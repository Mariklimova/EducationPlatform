import { createUser, authorizUser } from '../../service/api.service';
import bcript from 'bcrypt';
import * as repository from '../../repository/api.repository';


describe('createUser', () => {
    test('corrected', async () => {
        const mock_1 = jest.spyOn(repository, 'getUserByIdDB');
        const mock_2 = jest.spyOn(bcript, 'hash');
        const mock_3 = jest.spyOn(repository, 'createUserDB');

        mock_1.mockResolvedValue([]);
        mock_2.mockResolvedValue('fdtfyguhijkl4vyujh');
        mock_3.mockResolvedValue([{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: 'fdtfyguhijkl4vyujh' }]);

        const result = await createUser('Ivan', 'Ivanov', 'ivan@mail.ru', '123456789');

        expect(mock_1).toHaveBeenCalled();
        expect(mock_2).toHaveBeenCalled();
        expect(mock_3).toHaveBeenCalled();

        expect(mock_1).toHaveBeenCalledWith('ivan@mail.ru');
        expect(mock_2).toHaveBeenCalledWith('123456789', 4);
        expect(mock_3).toHaveBeenCalledWith('Ivan', 'Ivanov', 'ivan@mail.ru', 'fdtfyguhijkl4vyujh');

        expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: 'fdtfyguhijkl4vyujh' }]);
        expect(result).toHaveLength(1)
    })

    test('uncorrected_1', async () => {
        const mock = jest.spyOn(repository, 'getUserByIdDB');

        try {
            mock.mockResolvedValue([{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: 'fdtfyguhijkl4vyujh' }]);
            await createUser('Ivan', 'Ivanov', 'ivan@mail.ru', '123456789')
        } catch (error: any) {
            expect(mock).toHaveBeenCalled();
            expect(error.message).toBe('such an email already exists')
        }
    });

    test('uncorrected_2', async () => {
        const mock_1 = jest.spyOn(repository, 'getUserByIdDB');
        const mock_2 = jest.spyOn(bcript, 'hash');
        const mock_3 = jest.spyOn(repository, 'createUserDB');
        try {
            mock_1.mockResolvedValue([]);
            mock_2.mockResolvedValue('fdtfyguhijkl4vyujh');
            mock_3.mockResolvedValue([]);

            await createUser('Ivan', 'Ivanov', 'ivan@mail.ru', '123456789')
        } catch (error: any) {
            expect(mock_1).toHaveBeenCalled();
            expect(mock_2).toHaveBeenCalled();
            expect(mock_3).toHaveBeenCalled();
            expect(error.message).toBe('data is not saved')
        }
    })
});

describe('authorizUser', () => {
    test('corrected', async () => {
        const mock_1 = jest.spyOn(repository, 'getUserByIdDB');
        const mock_2 = jest.spyOn(bcript, 'compare');

        mock_1.mockResolvedValue([{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: 'fdtfyguhijkl4vyujh' }]);
        mock_2.mockResolvedValue(true);

        const result = await authorizUser('ivan@mail.ru', '123456789');

        expect(mock_1).toHaveBeenCalled();
        expect(mock_2).toHaveBeenCalled();
        expect(mock_1).toHaveBeenCalledWith('ivan@mail.ru');
        expect(mock_2).toHaveBeenCalledWith('123456789', 'fdtfyguhijkl4vyujh');

        expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru', pwd: 'fdtfyguhijkl4vyujh' }]);
    });

    // test('uncorrected_2', async () => {
    //     const mock_1 = jest.spyOn(repository, 'getUserByIdDB');
    //     const mock_2 = jest.spyOn(bcript, 'hash');
    //     const mock_3 = jest.spyOn(repository, 'createUserDB');
    //     try {
    //         mock_1.mockResolvedValue([]);
    //         mock_2.mockResolvedValue('fdtfyguhijkl4vyujh');
    //         mock_3.mockResolvedValue([]);

    //         await createUser('Ivan', 'Ivanov', 'ivan@mail.ru', '123456789')
    //     } catch (error: any) {
    //         expect(mock_1).toHaveBeenCalled();
    //         expect(mock_2).toHaveBeenCalled();
    //         expect(mock_3).toHaveBeenCalled();
    //         expect(error.message).toBe('data is not saved')
    //     }
    // })
})