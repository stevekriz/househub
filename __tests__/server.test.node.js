const request = require('supertest');
const app = require('../server/app');

describe('Test the /api/reviews/:id path', () => {
  test('It should respond to the GET method', () => {
    return request(app)
      .get('/api/reviews/1')
      .expect(200)
      .expect((res) => {
        expect(res.body._id).toBe(1);
        expect(res.body).toHaveProperty('reviews');
      });
  });
});
