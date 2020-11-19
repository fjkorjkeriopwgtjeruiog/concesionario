import pool from './base.js';

export const getCompraId = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM compra WHERE id = $1', [id], (error, results) => {
      if (error) reject(error);
      resolve(results.rows);
    });
  });
};

export const createCompra = (body) => {
  return new Promise(function (resolve, reject) {
    const { coche, cliente, empleado, tienda, fecha } = body;
    pool.query(
      'INSERT INTO compra (coche, cliente, empleado, tienda, fecha) VALUES ($1, $2, $3, $4, $5)',
      [coche, cliente, empleado, tienda, fecha],
      (error, results) => {
        if (error) reject(error);
        resolve(`¡Compra añadida con exito!`);
      },
    );
  });
};

export const updateCompra = (body, id) => {
  return new Promise(function (resolve, reject) {
    const { coche, cliente, empleado, tienda } = body;
    pool.query(
      'UPDATE compra SET coche=$1, cliente=$2, empleado=$3, tienda=$4 WHERE id=$5',
      [coche, cliente, empleado, tienda, id],
      (error, results) => {
        if (error) reject(error);
        resolve(`¡Los datos de la compra se han actualizado!`);
      },
    );
  });
};

export const deleteCompra = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query('DELETE FROM compra WHERE id = $1', [id], (error, results) => {
      if (error) reject(error);
      resolve(`¡Compra eliminada!`);
    });
  });
};
