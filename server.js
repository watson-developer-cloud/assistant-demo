#! /usr/bin/env node

// Requires and declarations
require('dotenv').config({ silent: true });
require('cf-deployment-tracker-client').track(); // Deployment tracking
const server = require('./index');

const port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;

server.listen(port, () => {
  console.log('Server running on port: %d', port);
});
