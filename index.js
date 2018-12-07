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
const Assistant = require('watson-developer-cloud/assistant/v1');
const bank = require('./lib/bankFunctions');

// declare Watson Assistant service
const assistant = new Assistant({
  version: '2018-07-10',
});

const date = new Date();
date.setMonth(date.getMonth() + 1);
const accountData = {
  acc_minamt: 50,
  acc_currbal: 430,
  acc_paydue: `${date.getFullYear()}-${date.getMonth() + 1}-26 12:00:00`,
  accnames: [
    5624,
    5893,
    9225,
  ],
  private: {
    function_creds: {
      user: process.env.CLOUD_FUNCTION_USER,
      password: process.env.CLOUD_FUNCTION_PASS,
    },
  },
};

app.get('/', (req, res) => {
  res.render('./dist/index.html');
});

app.post('/api/message', (req, res) => {
  // check for workspace id and handle null workspace env variable
  const workspace = process.env.ASSISTANT_WORKSPACE_ID || '<workspace-id>';
  if (!workspace || workspace === '<workspace-id>') {
    return res.json({
      output: {
        text: 'The app has not been configured with a ASSISTANT_WORKSPACE_ID environment variable.',
      },
    });
  }

  const contextWithAcc = Object.assign({}, req.body.context, accountData);

  // assemble conversation payload
  const payload = {
    workspace_id: workspace,
    context: contextWithAcc || {},
    input: req.body.input || {},
  };

  // send payload to Conversation and return result
  assistant.message(payload, (err, data) => {
    if (err) {
      // TODO: return error from service, currently service returns non-legal
      // status code
      return res.status(500).jsonp(err);
    }

    // TODO: temporary hack to hide function creds... fix later
    const maskedData = Object.assign({}, data);
    maskedData.context.private.function_creds.user = '****';
    maskedData.context.private.function_creds.password = '****';

    return res.json(maskedData);
  });
});

app.get('/bank/validate', (req, res) => {
  const value = req.query.value;
  const isAccValid = bank.validateAcc(Number(value));
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

  res.send({ result: 'statement', dates: { startingDate: startingDateString, endingDate: endingDateString } });
});

module.exports = app;
