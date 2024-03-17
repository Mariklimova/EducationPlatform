import { createData, getAllUser, getAllUserById, updateUser, deleteUser, partUpdateUser } from "../../service/user.service";
import * as repository from '../../repository/user.repository';

describe('createData', () => {
    test('corrected', async () => {
        const mock = jest.spyOn(repository, 'createDataDB');
        mock.mockResolvedValue([{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: '123456789' }]);
        const result = await createData('Ivan', 'Ivanov', 'ivan@mail.ru', '123456789');
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledWith('Ivan', 'Ivanov', 'ivan@mail.ru', '123456789');
        expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: '123456789' }])
        expect(result).toHaveLength(1);
    });

    test('uncorrected', async () => {
        const mock = jest.spyOn(repository, 'createDataDB');
        mock.mockResolvedValue([]);
        try {
            await createData('Ivan', 'Ivanov', 'ivan@mail.ru', '123456789');
        } catch (error: any) {
            expect(mock).toHaveBeenCalled();
            expect(error.message).toBe('data do not create');
        }
    })
});

describe('getAllUser', () => {
    test('corrected', async () => {
        const mock = jest.spyOn(repository, 'getAllUserDB');
        mock.mockResolvedValue([{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: '123456789' }, { id: 2, name: 'Peter', surname: 'Petrov', email: 'peter@mail.ru', pwd: '234567891' }]);
        const result = await getAllUser();
        expect(mock).toHaveBeenCalled();
        expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: '123456789' }, { id: 2, name: 'Peter', surname: 'Petrov', email: 'peter@mail.ru', pwd: '234567891' }]);
        expect(result.length).toBeGreaterThan(0);
    });

    test('uncorrected', async () => {
        const mock = jest.spyOn(repository, 'getAllUserDB');
        mock.mockResolvedValue([]);
        try {
            await getAllUser()
        } catch (error: any) {
            expect(mock).toHaveBeenCalled();
            expect(error.message).toBe('The database is empty');
        }
    });
});

describe('getAllUserById', () => {
    test('corrected', async () => {
        const mock = jest.spyOn(repository, 'getAllUserByIdDB');
        mock.mockResolvedValue([{ id: 2, name: 'Peter', surname: 'Petrov', email: 'peter@mail.ru', pwd: '234567891' }]);
        const result = await getAllUserById('2');
        expect(mock).toHaveBeenCalled();
        expect(result).toEqual([{ id: 2, name: 'Peter', surname: 'Petrov', email: 'peter@mail.ru', pwd: '234567891' }]);
        expect(result).toHaveLength(1);;
    });

    test('uncorrected', async () => {
        const mock = jest.spyOn(repository, 'getAllUserByIdDB');
        mock.mockResolvedValue([]);
        try {
            await getAllUserById('2')
        } catch (error: any) {
            expect(mock).toHaveBeenCalled();
            expect(error.message).toBe('Id is not found');
        }
    });
});

describe('updateUser', () => {
    test('corrected', async () => {
        const mock = jest.spyOn(repository, 'updateUserDB');
        mock.mockResolvedValue([{ id: 1, name: 'Sidor', surname: 'Sidorov', email: 'ivan@mail.ru', pwd: '123456789' }]);
        const result = await updateUser('1','Sidor','Sidorov','ivan@mail.ru','123456789' );
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledWith('1','Sidor','Sidorov', 'ivan@mail.ru', '123456789');
        expect(result).toEqual([{ id: 1, name: 'Sidor', surname: 'Sidorov', email: 'ivan@mail.ru', pwd: '123456789' }]);
        expect(result).toHaveLength(1);;
    });

    test('uncorrected', async () => {
        const mock = jest.spyOn(repository, 'updateUserDB');
        mock.mockResolvedValue([]);
        try {
            await updateUser('1','Sidor','Sidorov','ivan@mail.ru','123456789')
        } catch (error: any) {
            expect(mock).toHaveBeenCalled();
            expect(error.message).toBe('Data is not saved');
        }
    });
});

