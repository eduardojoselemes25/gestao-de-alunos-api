import request from 'supertest';
import 'dotenv/config';

export async function loginAdmin(app) {
    const response = await request(app)
        .post('/api/auth/login')
        .send({
            email: process.env.ADMIN_EMAIL,
            senha: process.env.ADMIN_PASSWORD
        });

    return response.body.token;
}
