import pool from '../db';
import { iCourse } from '../interfaces/interface';

async function createCourseDB(course: string, description: string): Promise<iCourse[]> {
    const client = await pool.connect()

    const sql: string = 'INSERT Into courses (course,description) Values ($1,$2) returning *'
    const { rows } = await client.query(sql, [course, description]);
    return rows
}

async function getAllCourseDB(): Promise<iCourse[]> {
    const client = await pool.connect()

    const sql: string = 'select * from courses order by id asc'
    const { rows } = await client.query(sql);
    return rows
}

async function updateCourseDB(id: number, course: string, description: string): Promise<iCourse[]> {
    const client = await pool.connect()

    const sql: string = 'update courses set course = $1, description = $2 where id = $3 returning *'
    const { rows } = await client.query(sql, [course, description,id]);
    return rows
}



export { createCourseDB, getAllCourseDB, updateCourseDB }