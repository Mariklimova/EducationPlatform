import { createCourseDB,getAllCourseDB,getCourseByIdDB,updateCourseDB, deleteCourseDB,partUpdateCourseDB } from '../../repository/course.repository';


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
        client.query.mockResolvedValue({ rows: [{ id: 1, course: 'JS', description: 'test' }] });

        const result = await createCourseDB('JS', 'test');

        expect(result).toEqual([{ id: 1, course: 'JS', description: 'test' }]);
        expect(result.length).toBe(1);
        expect(client.query).toHaveBeenCalled();

    })
})

describe('getAllCourseDB', () => {
    test('corrected', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 1, course: 'JS', description: 'test' }, { id: 2, course: 'TS', description: 'test2' }] });

        const result = await getAllCourseDB();

        expect(result).toEqual([{ id: 1, course: 'JS', description: 'test' }, { id: 2, course: 'TS', description: 'test2' }]);
        expect(result.length).toBeGreaterThan(0);
        expect(client.query).toHaveBeenCalled();

    })
});

describe('getCourseByIdDB', () => {
    test('corrected', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 1, course: 'JS', description: 'test' }] });

        const result = await getCourseByIdDB('1');

        expect(result).toEqual([{ id: 1, course: 'JS', description: 'test' }]);
        expect(result.length).toBe(1);
        expect(client.query).toHaveBeenCalled();

    })
});

describe('updateCourseDB', () => {
    test('corrected', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 1, course: 'JavaScript', description: 'test1' }] });

        const result = await updateCourseDB('1',  'JavaScript','test1' );

        expect(result).toEqual([{id: 1, course: 'JavaScript', description: 'test1' }]);
        expect(result.length).toBe(1);
        expect(client.query).toHaveBeenCalled();

    })
});

describe('deleteCourseDB', () => {
    test('corrected', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 2, course: 'TS', description: 'test2' }] });

        const result = await deleteCourseDB('2');

        expect(result).toEqual([{ id: 2, course: 'TS', description: 'test2' }]);
        expect(result.length).toBe(1);
        expect(client.query).toHaveBeenCalled();

    })
});

describe('partUpdateCourseDB', () => {
    test('corrected', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 1, course: 'JavaScript', description: 'test_1' }] });

        const result = await partUpdateCourseDB('1', { description: 'test_1'});

        expect(result).toEqual([{id: 1, course: 'JavaScript', description: 'test_1' }]);
        expect(result.length).toBe(1);
        expect(client.query).toHaveBeenCalled();

    })
});
