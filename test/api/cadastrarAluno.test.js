import request from 'supertest';
import { expect } from 'chai';
import app from '../../src/app.js';
import alunos from '../data/alunos.json' assert { type: 'json' };
import { loginAdmin } from '../../helpers/adminHelper.js';

describe('Cadastro de alunos', () => {
    alunos.forEach((aluno) => {
        it(`deve cadastrar ${aluno.nome}`, async () => {
            const token = await loginAdmin(app);

            const response = await request(app)
                .post('/api/admin/alunos')
                .set('Authorization', `Bearer ${token}`)
                .send(aluno);

            expect(response.status).to.equal(201);
        });
    });
});
