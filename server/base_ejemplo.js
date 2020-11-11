// Para hacer funcionar este fichero, renombralo a "base.js"

import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: '(tu nombre de usuario)',
  host: 'localhost',
  database: '(el nombre de tu base de datos)',
  password: '(tu contraseña)',
  port: 5432,
});

export default pool;
