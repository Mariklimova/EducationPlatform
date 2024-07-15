import pool from '../db';
import { iLesson } from '../interfaces/interface';

async function createLessonDB(title: string, course_id:number): Promise<iLesson[]>  {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql: string = 'INSERT Into lessons (title,course_id) Values ($1,$2) returning *';
    const { rows } = await client.query(sql, [title, course_id]);
    await client.query('COMMIT');
    return rows;
  } catch (error: any) {
    await client.query('ROLLBACK');
    return [];
  } finally {
    client.release();
  }
}

async function getAllLessonsDB(): Promise<iLesson[]>  {
  const client = await pool.connect();

  const sql: string = 'select * from lessons order by id asc';
  const { rows } = await client.query(sql);
  client.release();
  return rows;
}

async function getLessonByCourseDB(course_id: string): Promise<iLesson[]>  {
  const client = await pool.connect();

  const sql: string = 'select * from lessons where course_id = $1 order by id asc';
  const { rows } = await client.query(sql, [course_id]);
  client.release();
  return rows;
}

async function deleteLessonDB(id: string): Promise<iLesson[]>  {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql: string = 'delete from lessons where id = $1 returning *';
    const { rows } = await client.query(sql, [id]);
    await client.query('COMMIT');
    return rows;
  } catch (error: any) {
    await client.query('ROLLBACK');
    return [];
  } finally {
    client.release();
  }
}

async function updateLessonDB(id: string, title: string, course_id: number): Promise<iLesson[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql: string = 'update lessons set title = $1, course_id = $2 where id = $3 returning *';
    const { rows } = await client.query(sql, [title, course_id, id]);
    await client.query('COMMIT');
    return rows;
  } catch (error: any) {
    await client.query('ROLLBACK');
    return [];
  } finally {
    client.release();
  }
}

async function partUpdateLessonDB(id: string, body:iLesson): Promise<iLesson[]>  {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql1: string = 'select * from courses where id = $1';
    const oldObj = (await client.query(sql1, [id])).rows;
    const newObj = { ...oldObj[0], ...body };
    const sql2: string = 'update lessons set title = $1, course_id = $2 where id = $3 returning *';
    const { rows } = await client.query(sql2, [newObj.title, newObj.course_id, id]);
    await client.query('COMMIT');
    return rows;
  } catch (error: any) {
    await client.query('ROLLBACK');
    return [];
  } finally {
    client.release();
  }
}

export { createLessonDB, getAllLessonsDB, updateLessonDB, getLessonByCourseDB, deleteLessonDB, partUpdateLessonDB };