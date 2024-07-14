// import { iCourse } from '../interfaces/interface';
import { createLessonDB, getAllLessonsDB, updateLessonDB, getLessonByCourseDB, deleteLessonDB, partUpdateLessonDB } from '../repository/course.repository';

async function createLesson(title: string, course_id: number) {
  const data = await createLessonDB(title, course_id);
  if (!data.length) throw new Error('data do not create');
  return data;
}

async function getAllLessons(){
  const data = await getAllLessonsDB();
  if (!data.length) throw new Error('The database is empty');
  return data;
}

async function getLessonByCourse(course_id: number) {
  const data = await getLessonByCourseDB(course_id);
  if (!data.length) throw new Error('Id is not found');
  return data;
}

async function updateLesson(title: string, course_id: number) {
  const data = await updateLessonDB(title, course_id);
  if (!data.length) throw new Error('Data is not saved');
  return data;
}

async function deleteLesson(id: number) {
  const data = await deleteLessonDB(id);
  if (!data.length) throw new Error('Id is not found, data was not deleted');
  return data;
}

async function partUpdateLesson(id:number, body) {
  const data = await partUpdateLessonDB(id, body);
  if (!data.length) throw new Error('Data is not changed');
  return data;
}

export { createLesson, getAllLessons, updateLesson, getLessonByCourse, deleteLesson, partUpdateLesson };