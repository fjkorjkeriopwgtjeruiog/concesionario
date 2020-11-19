import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    'postgresql://daniel:1234@localhost:5432/bookstore',
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
