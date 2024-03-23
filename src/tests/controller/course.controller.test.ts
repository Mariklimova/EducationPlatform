import supertest from 'supertest';
import { app } from '../../app';

let id:string;

test('POST/course', async () => {

    const result = await supertest(app).post('/course').send({ course: 'gtfyuyui', description: '465tyiookjvgr' });

    id = result.body[0].id;

    expect(result.statusCode).toBe(200);
    expect(result.body.length).toBe(1);
    expect(result.body[0].course).toBe('gtfyuyui');

});

test('GET/course', async () => {
    const result = await supertest(app).get('/course');

    expect(result.statusCode).toBe(200);
    expect(result.body.length).toBeGreaterThan(0)

});

test('GETbyId/course', async () => {
    const result = await supertest(app).get(`/course/${id}`);

    expect(result.statusCode).toBe(200);
    expect(result.body.length).toBe(1)

});

test('UPDATE/course', async () => {
    const result = await supertest(app).put(`/course/${id}`).send({ course: 'gtfyuyui2', description: '465tyiookjvgr2' });

    expect(result.statusCode).toBe(200);
    expect(result.body.length).toBe(1);
    expect(result.body[0].course).toBe('gtfyuyui2');

});

test('PATCH/course', async () => {
    const result = await supertest(app).patch(`/course/${id}`).send({ course: 'gtfyuyui21'});

    expect(result.statusCode).toBe(200);
    expect(result.body.length).toBe(1);
    expect(result.body[0].course).toBe('gtfyuyui21');

});

test('DELETE/course', async () => {
    const result = await supertest(app).delete(`/course/${id}`);

    expect(result.statusCode).toBe(200);
    expect(result.body.length).toBe(1)

});
