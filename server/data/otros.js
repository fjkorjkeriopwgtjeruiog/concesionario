import pool from '../base.js';

export const TiendaReal = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      'SELECT tienda.id, tienda.nombre AS tienda, ciudad, anno_construccion, empleado.nombre AS gerente FROM tienda JOIN empleado ON gerente=empleado.id ORDER BY tienda.id',
      (error, results) => {
        if (error) reject(error);
        resolve(results.rows);
      },
    );
  });
};

export const CompraReal = () => {
  var espacio = ' ';
  return new Promise(function (resolve, reject) {
    pool.query(
      'SELECT compra.id, fabricante || $1 || coche.nombre AS coche, cliente.nombre AS cliente, empleado.nombre AS empleado, tienda.nombre AS tienda, fecha FROM compra, coche, cliente, empleado, tienda WHERE coche.id=coche AND cliente.id=cliente AND empleado.id=empleado AND tienda.id=tienda ORDER BY compra.id',
      [espacio],
      (error, results) => {
        if (error) reject(error);
        resolve(results.rows);
      },
    );
  });
};

export const EmpleadoLibre = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      'SELECT id, nombre FROM empleado WHERE id NOT in (SELECT gerente FROM tienda)',
      (error, results) => {
        if (error) reject(error);
        resolve(results.rows);
      },
    );
  });
};

export const DNILocalizado = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      'SELECT cliente.dni AS cliente, empleado.dni AS empleado FROM empleado FULL JOIN cliente ON empleado.id=cliente.id',
      (error, results) => {
        if (error) reject(error);
        resolve(results.rows);
      },
    );
  });
};
