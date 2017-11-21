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
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressBrowserify = require('express-browserify');
const path = require('path');

module.exports = (app) => {
  // parse cookies
  app.use(cookieParser());

  // handle URLencoded and json params
  app.use(bodyParser.urlencoded({
    extended: true,
    limit: '40mb',
  }));
  app.use(bodyParser.json({
    limit: '40mb',
  }));

  // automatically bundle front end js on the fly
  // note: this should be used before express.static since bundle.js is in the
  // public folder
  const isDev = (app.get('env') === 'development');
  const browserifyier = expressBrowserify('./public/js/bundle.js', {
    watch: isDev,
    debug: isDev,
    extension: ['jsx', 'js'],
    transform: [['babelify', { presets: ['es2015', 'react'] }]],
  });
  if (!isDev) {
    browserifyier.browserify.transform('uglifyify', { global: true });
  }
  app.get('/js/bundle.js', browserifyier);

  // serve static files from the public folder
  app.use(express.static(path.join(__dirname, '..', 'public')));
};
