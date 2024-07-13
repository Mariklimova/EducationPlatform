// import { iCourse } from '../interfaces/interface';
import { createLessonDB, getAllCourseDB, updateCourseDB, getCourseByIdDB, deleteCourseDB, partUpdateCourseDB } from '../repository/course.repository';

async function createCourse(course: string, description: string): Promise<iCourse[]> {
  const data: iCourse[] = await createCourseDB(course, description);
  if (!data.length) throw new Error('data do not create');
  return data;
}

async function getAllCourse(): Promise<iCourse[]> {
  const data: iCourse[] = await getAllCourseDB();
  if (!data.length) throw new Error('The database is empty');
  return data;
}

async function getCourseById(id: string): Promise<iCourse[]> {
  const data: iCourse[] = await getCourseByIdDB(id);
  if (!data.length) throw new Error('Id is not found');
  return data;
}

async function updateCourse(id: string, course: string, description: string): Promise<iCourse[]> {
  const data: iCourse[] = await updateCourseDB(id, course, description);
  if (!data.length) throw new Error('Data is not saved');
  return data;
}

async function deleteCourse(id: string): Promise<iCourse[]> {
  const data: iCourse[] = await deleteCourseDB(id);
  if (!data.length) throw new Error('Id is not found, data was not deleted');
  return data;
}

async function partUpdateCourse(id: string, body: iCourse): Promise<iCourse[]> {
  const data: iCourse[] = await partUpdateCourseDB(id, body);
  if (!data.length) throw new Error('Data is not changed');
  return data;
}

export { createCourse, getAllCourse, updateCourse, getCourseById, deleteCourse, partUpdateCourse };