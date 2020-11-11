import pool from '../base.js';

export const TiendaReal = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      'select tienda.id, tienda.nombre as tienda,ciudad,anno_construccion,empleado.nombre as gerente from tienda join empleado on gerente=empleado.id order by tienda.id',
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      },
    );
  });
};

export const CompraReal = () => {
  var espacio = ' ';
  return new Promise(function (resolve, reject) {
    pool.query(
      'select compra.id, fabricante || $1 || coche.nombre as coche, cliente.nombre as cliente, empleado.nombre as empleado, tienda.nombre as tienda, fecha from compra, coche, cliente, empleado, tienda where coche.id=coche and cliente.id=cliente and empleado.id=empleado and tienda.id=tienda order by compra.id',
      [espacio],
      (error, results) => {
        if (error) reject(error);
        resolve(results.rows);
      },
    );
  });
};

export const TiendaRealId = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      'select tienda.id, tienda.nombre as tienda, ciudad, anno_construccion, empleado.nombre as gerente from tienda, empleado where tienda.id=$1 and gerente=empleado.id order by tienda.id',
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      },
    );
  });
};

export const CompraRealId = (id) => {
  var espacio = ' ';
  return new Promise(function (resolve, reject) {
    pool.query(
      'select compra.id, fabricante || $1 || coche.nombre as coche, cliente.nombre as cliente, empleado.nombre as empleado, tienda.nombre as tienda, fecha from compra, coche, cliente, empleado, tienda where compra.id=$2 and coche.id=coche and cliente.id=cliente and empleado.id=empleado and tienda.id=tienda order by compra.id',
      [espacio, id],
      (error, results) => {
        if (error) reject(error);
        resolve(results.rows);
      },
    );
  });
};
