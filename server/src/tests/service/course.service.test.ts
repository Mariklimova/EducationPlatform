import { createCourse, getAllCourse, getCourseById, updateCourse, deleteCourse, partUpdateCourse } from "../../service/course.service";
import * as repository from '../../repository/course.repository';

describe('createCourse', () => {
    test('corrected', async () => {
        const mock = jest.spyOn(repository, 'createCourseDB');
        mock.mockResolvedValue([{ id: 1, course: 'JS', description: 'test' }]);
        const result = await createCourse('JS', 'test');
        expect(result).toEqual([{ id: 1, course: 'JS', description: 'test' }]);
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledWith('JS', 'test');
        expect(result).toHaveLength(1);
    });

    test('uncorrected', async () => {
        const mock = jest.spyOn(repository, 'createCourseDB');
        mock.mockResolvedValue([]);
        try {
            await createCourse('JS', 'test')
        } catch (error: any) {
            expect(mock).toHaveBeenCalled();
            expect(error.message).toBe('data do not create')
        }
    })
});

describe('getAllCourse', () => {
    test('corrected', async () => {
        const mock = jest.spyOn(repository, 'getAllCourseDB');
        mock.mockResolvedValue([{ id: 1, course: 'JS', description: 'test' }, { id: 2, course: 'TS', description: 'test2' }]);
        const result = await getAllCourse();
        expect(mock).toHaveBeenCalled();
        expect(result).toEqual([{ id: 1, course: 'JS', description: 'test' }, { id: 2, course: 'TS', description: 'test2' }]);
        expect(result.length).toBeGreaterThan(0);
    });

    test('uncorrected', async () => {
        const mock = jest.spyOn(repository, 'getAllCourseDB');
        mock.mockResolvedValue([]);
        try {
            await getAllCourse();
        } catch (error: any) {
            expect(mock).toHaveBeenCalled();
            expect(error.message).toBe('The database is empty')
        }
    })
});

describe('getCourseById', () => {
    test('corrected', async () => {
        const mock = jest.spyOn(repository, 'getCourseByIdDB');
        mock.mockResolvedValue([{ id: 2, course: 'TS', description: 'test2' }]);
        const result = await getCourseById('2');
        expect(mock).toHaveBeenCalled();
        expect(result).toEqual([{ id: 2, course: 'TS', description: 'test2' }]);
        expect(result).toHaveLength(1);
    });

    test('uncorrected', async () => {
        const mock = jest.spyOn(repository, 'getAllCourseDB');
        mock.mockResolvedValue([]);
        try {
            await getCourseById('2');
        } catch (error: any) {
            expect(mock).toHaveBeenCalled();
            expect(error.message).toBe('Id is not found');
        }
    });
});

describe('updateCourse', () => {
    test('corrected', async () => {
        const mock = jest.spyOn(repository, 'updateCourseDB');
        mock.mockResolvedValue([{ id: 1, course: 'JavaScript', description: 'test1' }]);
        const result = await updateCourse('1', 'JavaScript', 'test1');
        expect(mock).toHaveBeenCalled();
        expect(result).toEqual([{ id: 1, course: 'JavaScript', description: 'test1' }]);
        expect(result).toHaveLength(1);
    });

    test('uncorrected', async () => {
        const mock = jest.spyOn(repository, 'updateCourseDB');
        mock.mockResolvedValue([]);
        try {
            await updateCourse('1', 'JavaScript', 'test1');
        } catch (error: any) {
            expect(mock).toHaveBeenCalled();
            expect(error.message).toBe('Data is not saved');
        }
    });
});

describe('deleteCourse', () => {
    test('corrected', async () => {
        const mock = jest.spyOn(repository, 'deleteCourseDB');
        mock.mockResolvedValue([{ id: 2, course: 'TS', description: 'test2' }]);
        const result = await deleteCourse('2');
        expect(mock).toHaveBeenCalled();
        expect(result).toEqual([{ id: 2, course: 'TS', description: 'test2' }]);
        expect(result).toHaveLength(1);
    });

    test('uncorrected', async () => {
        const mock = jest.spyOn(repository, 'deleteCourseDB');
        mock.mockResolvedValue([]);
        try {
            await deleteCourse('2');
        } catch (error: any) {
            expect(mock).toHaveBeenCalled();
            expect(error.message).toBe('Id is not found, data was not deleted');
        }
    });
});

describe('partUpdateCourse', () => {
    test('corrected', async () => {
        const mock = jest.spyOn(repository, 'partUpdateCourseDB');
        mock.mockResolvedValue([{ id: 1, course: 'JavaScript', description: 'test_1' }]);
        const result = await partUpdateCourse('1', { description: 'test_1' });
        expect(mock).toHaveBeenCalled();
        expect(result).toEqual([{ id: 1, course: 'JavaScript', description: 'test_1' }]);
        expect(result).toHaveLength(1);
    });

    test('uncorrected', async () => {
        const mock = jest.spyOn(repository, 'partUpdateCourseDB');
        mock.mockResolvedValue([]);
        try {
            await partUpdateCourse('1', { description: 'test_1' });
        } catch (error: any) {
            expect(mock).toHaveBeenCalled();
            expect(error.message).toBe('Data is not changed');
        }
    });
})