import request from 'supertest';
import app from '../src/app.js';
import dotenv from 'dotenv';

dotenv.config();

export async function getAdminToken() {
  const email = process.env.ADMIN_EMAIL || 'admin@escola.com';
  const senha = process.env.ADMIN_PASSWORD || 'admin123';

  const res = await request(app)
    .post('/api/auth/login')
    .send({ email, senha });

  return res.body.token;
}
