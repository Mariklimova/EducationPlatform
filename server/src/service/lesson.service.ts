import { iLesson } from '../interfaces/interface';
import { createLessonDB, getAllLessonsDB, updateLessonDB, getLessonByCourseDB, deleteLessonDB } from '../repository/lesson.respository';

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

async function getLessonByCourse(course_id: number) {
  const data:iLesson[] = await getLessonByCourseDB(course_id);
  if (!data.length) throw new Error('Id is not found');
  return data;
}

async function updateLesson(id:number, title: string, course_id: number) {
  const data:iLesson[] = await updateLessonDB(id, title, course_id);
  if (!data.length) throw new Error('Data is not saved');
  return data;
}

async function deleteLesson(id: number) {
  const data:iLesson[] = await deleteLessonDB(id);
  if (!data.length) throw new Error('Id is not found, data was not deleted');
  return data;
}

export { createLesson, getAllLessons, updateLesson, getLessonByCourse, deleteLesson};