import pool from '../base.js';

export const getTiendaId = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM tienda WHERE id = $1', [id], (error, results) => {
      if (error) reject(error);
      resolve(results.rows);
    });
  });
};

export const createTienda = (body) => {
  return new Promise(function (resolve, reject) {
    const { nombre, ciudad, anno_construccion, gerente } = body;
    pool.query(
      'INSERT INTO tienda (nombre, ciudad, anno_construccion, gerente) VALUES ($1, $2, $3, $4)',
      [nombre, ciudad, anno_construccion, gerente],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`¡Tienda añadida con exito!`);
      },
    );
  });
};

export const updateTienda = (body, id) => {
  return new Promise(function (resolve, reject) {
    const { nombre, ciudad, anno_construccion, gerente } = body;
    pool.query(
      'UPDATE tienda SET nombre=$1, ciudad=$2, anno_construccion=$3, gerente=$4 WHERE id=$5',
      [nombre, ciudad, anno_construccion, gerente, id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`¡Los datos de la tienda se han actualizado!`);
      },
    );
  });
};

export const deleteTienda = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query('DELETE FROM tienda WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(`¡Tienda eliminada!`);
    });
  });
};
