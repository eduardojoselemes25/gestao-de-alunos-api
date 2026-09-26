import request from 'supertest';

export async function loginAluno(app, email, senha) {
    const response = await request(app)
        .post('/api/auth/login')
        .send({
            email,
            senha
        });

    return response.body.token;
}
