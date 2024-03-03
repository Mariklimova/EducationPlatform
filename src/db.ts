import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: '5432',
  password: 'Murka220183',
  user: 'postgres',
  database: 'EducationPlatform',
});

export default pool;
