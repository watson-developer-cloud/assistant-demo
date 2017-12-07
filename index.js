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
const Conversation = require('watson-developer-cloud/conversation/v1');

// declare Watson Conversation service
const conversation = new Conversation({
  username: process.env.CONVERSATION_USERNAME,
  password: process.env.CONVERSATION_PASSWORD,
  version_date: '2017-05-26',
});

app.get('/', (req, res) => {
  res.render('use', {
    bluemixAnalytics: !!process.env.BLUEMIX_ANALYTICS,
  });
  res.render('./dist/index.html');
});

app.post('/api/message', (req, res) => {
  // check for workspace id and handle null workspace env variable
  const workspace = process.env.CONVERSATION_WORKSPACE || '<workspace-id>';
  if (!workspace || workspace === '<workspace-id>') {
    return res.json({
      output: {
        text: 'The app has not been configured with a WORKSPACE_ID environment variable.',
      },
    });
  }

  // assemble conversation payload
  const payload = {
    workspace_id: workspace,
    context: req.body.context || {},
    input: req.body.input || {},
  };

  // send payload to Conversation and return result
  conversation.message(payload, (err, data) => {
    if (err) {
      return res.status(err.code || 500).json(err);
    }
    return res.json(data);
  });
});

module.exports = app;
