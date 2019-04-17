process.env.NODE_ENV = 'production';
const request = require('supertest');
require('dotenv').config({ silent: true });


const describeOrSkip = process.env.ASSISTANT_ID ? describe : describe.skip;
describeOrSkip('express', () => {
  const app = require('../../index');
  it('should load home page when GET /', (done) => {
    request(app).get('/').expect(200, done);
  });

  it('should respond with JSON when GET /api/session', (done) => {
    request(app)
      .get('/api/session')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
