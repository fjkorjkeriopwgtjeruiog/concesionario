import pool from '../base.js';

export const getEmpleados = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM empleado ORDER BY id', (error, results) => {
      if (error) reject(error);
      resolve(results.rows);
    });
  });
};

export const getEmpleadoId = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      'SELECT * FROM empleado WHERE id = $1',
      [id],
      (error, results) => {
        if (error) reject(error);
        resolve(results.rows);
      },
    );
  });
};

export const createEmpleado = (body) => {
  return new Promise(function (resolve, reject) {
    const {
      nombre,
      fecha_nacimiento,
      dni,
      ciudad_natal,
      fecha_contratacion,
    } = body;
    pool.query(
      'INSERT INTO empleado (nombre, fecha_nacimiento, dni, ciudad_natal, fecha_contratacion) VALUES ($1, $2, $3, $4, $5)',
      [nombre, fecha_nacimiento, dni, ciudad_natal, fecha_contratacion],
      (error, results) => {
        if (error) reject(error);
        resolve(`¡Empleado añadido con exito!`);
      },
    );
  });
};

export const updateEmpleado = (body, id) => {
  return new Promise(function (resolve, reject) {
    const { nombre, fecha_nacimiento, dni, ciudad_natal } = body;
    pool.query(
      'UPDATE empleado SET nombre=$1, fecha_nacimiento=$2, dni=$3, ciudad_natal=$4 WHERE id=$5',
      [nombre, fecha_nacimiento, dni, ciudad_natal, id],
      (error, results) => {
        if (error) reject(error);
        resolve(`¡Los datos del empleado se han actualizado!`);
      },
    );
  });
};

export const deleteEmpleado = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query('DELETE FROM empleado WHERE id = $1', [id], (error, results) => {
      if (error) reject(error);
      resolve(`¡Empleado eliminado!`);
    });
  });
};
