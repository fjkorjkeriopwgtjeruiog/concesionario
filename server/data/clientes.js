import pool from '../base.js';

export const getClientes = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM cliente ORDER BY id', (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

export const getClienteId = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      'SELECT * FROM cliente WHERE id = $1',
      [id],
      (error, results) => {
        if (error) reject(error);
        resolve(results.rows);
      },
    );
  });
};

export const createCliente = (body) => {
  return new Promise(function (resolve, reject) {
    const { nombre, dni, fecha_registro } = body;
    pool.query(
      'INSERT INTO cliente (nombre, dni, fecha_registro) VALUES ($1, $2, $3)',
      [nombre, dni, fecha_registro],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`¡Cliente añadido con exito!`);
      },
    );
  });
};

export const updateCliente = (body, id) => {
  return new Promise(function (resolve, reject) {
    const { nombre, dni, fecha_registro } = body;
    pool.query(
      'UPDATE cliente SET nombre=$1, dni=$2, fecha_registro=$3 WHERE id=$4',
      [nombre, dni, fecha_registro, id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`¡Los datos del cliente se han actualizado!`);
      },
    );
  });
};

export const deleteCliente = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query('DELETE FROM cliente WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(`¡Cliente eliminado!`);
    });
  });
};