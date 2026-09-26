import request from 'supertest';
import { expect } from 'chai';
import app from '../../src/app.js';
import alunosData from '../data/alunos.json' assert { type: 'json' };
import { getAdminToken } from '../../helpers/adminHelper.js';

describe('Cadastro de alunos', () => {
  let adminToken;

  before(async () => {
    adminToken = await getAdminToken();
  });

  alunosData.forEach((aluno) => {
    it(`deve cadastrar ${aluno.nome}`, async () => {
      const res = await request(app)
        .post('/api/admin/alunos')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(aluno);

      expect(res.status).to.equal(201);
    });
  });
});
