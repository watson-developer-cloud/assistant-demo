process.env.NODE_ENV = 'production';
const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config({ silent: true });

const testIfCredentials = process.env.ASSISTANT_IAM_APIKEY ? describe : describe.skip;

testIfCredentials('express', () => {
  const app = require('../../index');
  it('should load home page when GET /', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('should return a valid result for account 5893', (done) => {
    request(app)
      .get('/bank/validate?value=5893')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body.result).to.equal('acc123valid');
        done();
      });
  });

  it('should return an invalid result for account 1111', (done) => {
    request(app)
      .get('/bank/validate?value=1111')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body.result).to.equal('acc123invalid');
        done();
      });
  });
});
