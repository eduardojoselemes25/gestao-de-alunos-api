import request from 'supertest';
import { expect } from 'chai';
import app from '../../src/app.js';

describe('Login aluno', () => {
    it('deve realizar login', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'ana.souza@example.com',
                senha: '123456'
            });

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('token');
    });
});
