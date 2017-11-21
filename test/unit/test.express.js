require('dotenv').config({ silent: true });
const app = require('../../index');
const request = require('supertest');

describe('express', () => {
  it('should load home page when GET /', (done) => {
    request(app).get('/').expect(200, done);
  });
  it('should respond with JSON when GET /api/message', (done) => {
    request(app)
      .get('/api/message')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

