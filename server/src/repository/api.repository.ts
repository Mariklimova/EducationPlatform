import pool from '../db';
import { iUser } from '../interfaces/interface';

async function createUserDB(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql: string = 'insert into users (name, surname, email, pwd) values ($1, $2, $3, $4) returning *';
    const { rows } = await client.query(sql, [name, surname, email, pwd]);
    await client.query('COMMIT');
    return rows;
  } catch (error: any) {
    await client.query('ROLLBACK');
    return [];
  } finally {
    client.release();
  }
}

async function getUserByIdDB(email: string): Promise<iUser[]> {
  const client = await pool.connect();

  const sql: string = 'select * from users where email = $1';
  const { rows } = await client.query(sql, [email]);
  return rows;
}

export { createUserDB, getUserByIdDB };
