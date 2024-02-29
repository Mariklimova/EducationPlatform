import { iCourse } from '../interfaces/interface';
import { createCourseDB, getAllCourseDB,updateCourseDB } from '../repository/course.repository';

async function createCourse(course: string, description: string): Promise<iCourse[]> {
    const data: iCourse[] = await createCourseDB(course, description)
    if (!data.length) throw new Error('data do not create')
    return data
}

async function getAllCourse(): Promise<iCourse[]> {
    const data: iCourse[] = await getAllCourseDB()
    if (!data.length) throw new Error('The database is empty')
    return data
}

async function updateCourse(id: number, course: string, description: string): Promise<iCourse[]> {
    const data: iCourse[] = await updateCourseDB(id, course, description)
    if (!data.length) throw new Error('Data is not saved')
    return data
}






export { createCourse, getAllCourse, updateCourse }