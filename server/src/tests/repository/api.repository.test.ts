import { createUserDB, getUserByIdDB } from '../../repository/api.repository';


const client = {
    query: jest.fn(),
    release: jest.fn()
}

jest.mock('pg', function () {
    return {
        Pool: jest.fn(function () {
            return {
                connect: jest.fn(function () {
                    return client
                })
            }
        })
    }
});

describe('createUserDB', () => {
    test('corrected', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: '123456789' }] });

        const result = await createUserDB('Ivan', 'Ivanov', 'ivan@mail.ru', '123456789');

        expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: '123456789' }]);
        expect(result.length).toBe(1);
        expect(client.query).toHaveBeenCalled();

    })
});

describe('getUserByIdDB', () => {
    test('corrected', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: '123456789' }] });

        const result = await getUserByIdDB('ivan@mail.ru');

        expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: '123456789' }]);
        expect(result.length).toBe(1);
        expect(client.query).toHaveBeenCalled();

    })
});
