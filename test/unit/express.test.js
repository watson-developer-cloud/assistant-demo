process.env.NODE_ENV = 'production';
const request = require('supertest');
require('dotenv').config({ silent: true });
const app = require('../../index');


describe('express', () => {
  it('should load home page when GET /', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
  it('should respond with JSON when GET /api/message', (done) => {
    if (process.env.WATSON_ASSISTANT_APIKEY) {
      return request(app)
        .post('/api/message')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    }
    done();
  });
});
