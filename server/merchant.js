import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'daniel',
  host: 'localhost',
  database: 'bookstore',
  password: '1234',
  port: 5432,
});

export const getMerchants = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM merchants ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};
export const getMerchantId = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      'SELECT * FROM merchants WHERE id = $1',
      [id],
      (error, results) => {
        if (error) reject(error);
        resolve(results.rows);
      },
    );
  });
};
export const createMerchant = (body) => {
  return new Promise(function (resolve, reject) {
    const { name, email } = body;
    pool.query(
      'INSERT INTO merchants (name, email) VALUES ($1, $2)',
      [name, email],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`A new merchant has been added added`);
      },
    );
  });
};
export const updateMerchant = (body, id) => {
  return new Promise(function (resolve, reject) {
    const { name, email } = body;
    pool.query(
      'UPDATE merchants SET name=$1, email=$2 WHERE id=$3',
      [name, email, id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`A new merchant has been updated`);
      },
    );
  });
};
export const deleteMerchant = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      'DELETE FROM merchants WHERE id = $1',
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`Merchant deleted`);
      },
    );
  });
};
