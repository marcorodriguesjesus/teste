const request = require('supertest');
const app = require('../app');

describe('Teste da rota GET /', () => {
  it('deve retornar "Hello World!"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});