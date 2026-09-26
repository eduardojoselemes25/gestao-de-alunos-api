import request from 'supertest';
import { expect } from 'chai';
import app from '../../src/app.js';

describe('Login Admin', () => {
    it('deve logar como administrador', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'admin@escola.com',
                senha: 'admin123'
            });

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('token');
    });
});
