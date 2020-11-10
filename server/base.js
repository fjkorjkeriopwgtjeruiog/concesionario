import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: 'daniel',
  host: 'localhost',
  database: 'bookstore',
  password: '1234',
  port: 5432,
});

export default pool;
