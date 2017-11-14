const app = require('../../index');
const request = require('supertest');

describe('express', () => {
  it('should load home page when GET /', (done) => {
    request(app).get('/').expect(200, done);
  });
});
