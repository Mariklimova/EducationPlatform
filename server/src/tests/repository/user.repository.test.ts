import { createDataDB, getAllUserDB, getAllUserByIdDB, updateUserDB, deleteUserDB, partUpdateUserDB } from '../../repository/user.repository';


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

describe('createCourseDB', () => {
    test('corrected', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: '123456789' }] });

        const result = await createDataDB('Ivan', 'Ivanov', 'ivan@mail.ru', '123456789');

        expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: '123456789' }]);
        expect(result.length).toBe(1);
        expect(client.query).toHaveBeenCalled();

    })
});

describe('getAllUserDB', () => {
    test('corrected', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: '123456789' }, { id: 2, name: 'Peter', surname: 'Petrov', email: 'peter@mail.ru', pwd: '234567891' }] });

        const result = await getAllUserDB();

        expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: '123456789' }, { id: 2, name: 'Peter', surname: 'Petrov', email: 'peter@mail.ru', pwd: '234567891' }]);
        expect(result.length).toBeGreaterThan(0);
        expect(client.query).toHaveBeenCalled();

    })
});

describe('getAllUserByIdDB', () => {
    test('corrected', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: '123456789' }] });

        const result = await getAllUserByIdDB('1');

        expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: '123456789' }]);
        expect(result.length).toBe(1);
        expect(client.query).toHaveBeenCalled();

    })
});

describe('updateUserDB', () => {
    test('corrected', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan1@mail.ru', pwd: '345678912' }] });

        const result = await updateUserDB('1', 'Ivan', 'Ivanov', 'ivan1@mail.ru', '345678912');

        expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan1@mail.ru', pwd: '345678912' }]);
        expect(result.length).toBe(1);
        expect(client.query).toHaveBeenCalled();

    })
});

describe('deleteUserDB', () => {
    test('corrected', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 2, name: 'Peter', surname: 'Petrov', email: 'peter@mail.ru', pwd: '234567891' }] });

        const result = await deleteUserDB('2');

        expect(result).toEqual([{ id: 2, name: 'Peter', surname: 'Petrov', email: 'peter@mail.ru', pwd: '234567891' }]);
        expect(result.length).toBe(1);
        expect(client.query).toHaveBeenCalled();

    })
});

describe('partUpdateUserDB', () => {
    test('corrected', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 1, name: 'Ivan', surname: 'Antonov', email: 'ivan1@mail.ru', pwd: '345678912' }] });

        const result = await partUpdateUserDB('1', {surname: 'Antonov'});

        expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Antonov', email: 'ivan1@mail.ru', pwd: '345678912' }]);
        expect(result.length).toBe(1);
        expect(client.query).toHaveBeenCalled();

    })
});