import { iLesson } from '../interfaces/interface';
import { createLessonDB, getAllLessonsDB, updateLessonDB, getLessonByCourseDB, deleteLessonDB, partUpdateLessonDB } from '../repository/lesson.respository';

async function createLesson(title: string, course_id: number) {
  const data:iLesson[] = await createLessonDB(title, course_id);
  if (!data.length) throw new Error('data do not create');
  return data;
}

async function getAllLessons(){
  const data:iLesson[] = await getAllLessonsDB();
  if (!data.length) throw new Error('The database is empty');
  return data;
}

async function getLessonByCourse(course_id: string) {
  const data:iLesson[] = await getLessonByCourseDB(course_id);
  if (!data.length) throw new Error('Id is not found');
  return data;
}

async function updateLesson(id:string, title: string, course_id: number) {
  const data:iLesson[] = await updateLessonDB(id, title, course_id);
  if (!data.length) throw new Error('Data is not saved');
  return data;
}

async function deleteLesson(id: string) {
  const data:iLesson[] = await deleteLessonDB(id);
  if (!data.length) throw new Error('Id is not found, data was not deleted');
  return data;
}

async function partUpdateLesson(id:string, body:iLesson) {
  const data:iLesson[] = await partUpdateLessonDB(id, body);
  if (!data.length) throw new Error('Data is not changed');
  return data;
}

export { createLesson, getAllLessons, updateLesson, getLessonByCourse, deleteLesson, partUpdateLesson };