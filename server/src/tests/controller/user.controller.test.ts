import supertest from 'supertest';
import { app } from '../../app';

let id: string;

test('POST/user', async () => {

    const result = await supertest(app).post('/user').send({ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: '123456789' });

    id = result.body[0].id;

    expect(result.statusCode).toBe(200);
    expect(result.body.length).toBe(1);
    expect(result.body[0].name).toBe('Ivan');

});

test('GET/user', async () => {
    const result = await supertest(app).get('/user');

    expect(result.statusCode).toBe(200);
    expect(result.body.length).toBeGreaterThan(0)

});

test('GETbyId/user', async () => {
    const result = await supertest(app).get(`/user/${id}`);

    expect(result.statusCode).toBe(200);
    expect(result.body.length).toBe(1)

});

test('UPDATE/user', async () => {
    const result = await supertest(app).put(`/user/${id}`).send({ id: 1, name: 'Reter', surname: 'Petrov', email: 'peter@mail.ru', pwd: '123456789' });

    expect(result.statusCode).toBe(200);
    expect(result.body.length).toBe(1);
    expect(result.body[0].email).toBe('peter@mail.ru');

});

test('PATCH/user', async () => {
    const result = await supertest(app).patch(`/user/${id}`).send({pwd: '234567891' });

    expect(result.statusCode).toBe(200);
    expect(result.body.length).toBe(1);
    expect(result.body[0].pwd).toBe('234567891');

});

test('DELETE/user', async () => {
    const result = await supertest(app).delete(`/user/${id}`);

    expect(result.statusCode).toBe(200);
    expect(result.body.length).toBe(1)

});