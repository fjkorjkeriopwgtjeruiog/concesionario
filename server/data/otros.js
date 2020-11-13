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

export const EmpleadoLibre = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      'select id, nombre from empleado where id not in (select gerente from tienda)',
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      },
    );
  });
};

export const DNILocalizado = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      'select cliente.dni as cliente, empleado.dni as empleado from empleado full join cliente on empleado.id=cliente.id',
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      },
    );
  });
};
