/**
 * Copyright 2017 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const express = require('express');

const app = express();
require('./config/express')(app);
const AssistantV2 = require('ibm-watson/assistant/v2');
const uuidV1 = require('uuid/v1');
const NodeCache = require('node-cache');
const { IamAuthenticator } = require('ibm-watson/auth');
const bank = require('./lib/bankFunctions');
// stdTTL time in seconds (15 mins)
const searchCache = new NodeCache({ stdTTL: 900 });

// declare Watson Assistant service
const assistant = new AssistantV2({
  version: '2019-02-28',
  authenticator: new IamAuthenticator({
    apikey: process.env.ASSISTANT_IAM_APIKEY,
  }),
  url: process.env.ASSISTANT_URL,
});

const date = new Date();
date.setMonth(date.getMonth() + 1);
const initContext = {
  skills: {
    'main skill': {
      user_defined: {
        acc_minamt: 50,
        acc_currbal: 430,
        acc_paydue: `${date.getFullYear()}-${date.getMonth() + 1}-26 12:00:00`,
        accnames: [5624, 5893, 9225],
      },
    },
  },
};

function setSearchItems(data) {
  if (data.output !== undefined && data.output.generic !== undefined) {
    const genericObj = data.output.generic;
    const items = [];
    genericObj.forEach((response) => {
      if (response.response_type === 'search') {
        response.results.forEach((item) => {
          items.push(item);
        });
      }
    });

    for (let i = 0; i < items.length && i < 3; i += 1) {
      const item = items[i];
      let id = searchCache.get(item.title);
      if (id === undefined) {
        id = uuidV1();
        item.id = id;
        searchCache.set(item.title, id);
        searchCache.set(`header_${id}`, item.title);
        searchCache.set(`body_${id}`, item.body);
      } else {
        item.id = id;
      }
    }
  }
}

app.get('/', (req, res) => {
  res.render('./dist/index.html');
});

app.post('/api/message', (req, res) => {
  // check for assistant id and handle null assistant env variable
  const assistantId = process.env.ASSISTANT_ID || '<assistant-id>';
  if (!assistantId || assistantId === '<assistant-id>') {
    return res.json({
      output: {
        text: 'The app has not been configured with a ASSISTANT_ID environment variable.',
      },
    });
  }

  let textIn = '';

  if (req.body.input) {
    textIn = req.body.input.text;
  }

  // assemble assistant payload
  const payload = {
    assistantId,
    sessionId: req.body.session_id,
    input: {
      message_type: 'text',
      text: textIn,
    },
  };

  if (req.body.isFirstCall || req.body.context) {
    payload.context = req.body.context || initContext;
  }

  // send payload to Conversation and return result
  return assistant.message(payload, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(err.code || 500).json(err);
    }
    setSearchItems(data);
    return res.json(data);
  });
});

app.get('/bank/validate', (req, res) => {
  const { value } = req.query;
  const isAccValid = bank.validateAcc(Number(value));
  res.setHeader('Content-Type', 'application/json');
  // if accountNum is in list of valid accounts
  if (isAccValid === true) {
    res.send({ result: 'acc123valid' });
  } else {
    // return invalid by default
    res.send({ result: 'acc123invalid' });
  }
});

app.get('/bank/locate', (req, res) => {
  res.send({ result: 'zip123retrieved' });
});

app.get('/bank/statement', (req, res) => {
  const startingDate = new Date(req.query.value);
  const endingDate = new Date(startingDate.getFullYear(), startingDate.getMonth() + 1, 0);
  const startingDateString = startingDate.toLocaleDateString();
  const endingDateString = endingDate.toLocaleDateString();

  res.send({
    result: 'statement',
    dates: { startingDate: startingDateString, endingDate: endingDateString },
  });
});

app.get('/api/session', (req, res) => {
  assistant.createSession(
    {
      assistantId: process.env.ASSISTANT_ID || '{assistant_id}',
    },
    (error, response) => {
      if (error) {
        console.log(error);
        return res.status(error.code || 500).send(error);
      }
      return res.send(response);
    },
  );
});

app.get('/search', (req, res) => {
  const { id } = req.query;

  const header = searchCache.get(`header_${id}`)
    || 'The search result session has expired. Please restart the conversation in the main window.';
  const body = searchCache.get(`body_${id}`) || '';

  const doc = '<html><head><meta charset="UTF-8" /><title>Document</title></head>'
    + '<style>body {background-color: #252525;}div {color: white;font-family: Helvetica Neue, Helvetica, Arial, sans-serif;}</style>'
    + `<body><div style="width: 70%; padding: 10px;"><p><strong>${header}</strong></p>`
    + `<p>${body}</p></div></body></html>`;

  return res.send(doc);
});

module.exports = app;
