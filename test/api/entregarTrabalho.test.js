import request from 'supertest';
import { expect } from 'chai';
import app from '../../src/app.js';
import { loginAluno } from '../../helpers/alunoHelper.js';

describe('Entrega de trabalho', () => {
    it('deve registrar um trabalho', async () => {
        const token = await loginAluno(
            app,
            'ana.souza@example.com',
            '123456'
        );

        const response = await request(app)
            .post('/api/alunos/aluno-ana-souza/trabalhos')
            .set('Authorization', `Bearer ${token}`)
            .send({
                disciplinaId: 'disciplina-matematica',
                titulo: 'Lista de Exercícios 2'
            });

        expect(response.status).to.equal(201);
    });
});
