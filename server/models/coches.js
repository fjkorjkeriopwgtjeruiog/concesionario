import pool from './base.js';

export const getCoches = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM coche ORDER BY id', (error, results) => {
      if (error) reject(error);
      resolve(results.rows);
    });
  });
};

export const getCocheId = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM coche WHERE id = $1', [id], (error, results) => {
      if (error) reject(error);
      resolve(results.rows);
    });
  });
};

export const createCoche = (body) => {
  return new Promise(function (resolve, reject) {
    const { nombre, fabricante, anno_fabricacion, precio, plazas, foto } = body;
    pool.query(
      'INSERT INTO coche (nombre, fabricante, anno_fabricacion, precio, plazas, foto) VALUES ($1, $2, $3, $4, $5, $6)',
      [nombre, fabricante, anno_fabricacion, precio, plazas, foto],
      (error, results) => {
        if (error) reject(error);
        resolve(`¡Coche añadido con exito!`);
      },
    );
  });
};

export const updateCoche = (body, id) => {
  return new Promise(function (resolve, reject) {
    const { nombre, fabricante, anno_fabricacion, precio, plazas, foto } = body;
    pool.query(
      'UPDATE coche SET nombre=$1, fabricante=$2, anno_fabricacion=$3, precio=$4, plazas=$5, foto=$6 WHERE id=$7',
      [nombre, fabricante, anno_fabricacion, precio, plazas, foto, id],
      (error, results) => {
        if (error) reject(error);
        resolve(`¡Los datos del coche se han actualizado!`);
      },
    );
  });
};

export const deleteCoche = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query('DELETE FROM coche WHERE id = $1', [id], (error, results) => {
      if (error) reject(error);
      resolve(`¡Coche eliminado!`);
    });
  });
};
