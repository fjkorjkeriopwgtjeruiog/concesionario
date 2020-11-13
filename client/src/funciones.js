import { localizaDNI } from './lib/cliente.js';

// La letra para formar junto al DNI el NIF.
export function nif(n) {
  const letra = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E',
  ];
  return String(n) + letra[n % 23];
}

// Comprobamos que el DNI cumpla las reglas.
export const revisar = async (d, crea) => {
  if (d > 99999999) {
    alert('¡Ese DNI es demasiado largo!');
    return false;
  }
  if (d < 10000000) {
    alert('¡Ese DNI es demasiado corto!');
    return false;
  }

  const lista = await localizaDNI();
  const vector = [];

  lista.forEach((dni) => {
    vector.push(dni.cliente - d);
    vector.push(dni.empleado - d);
  });

  // Si la función fue llamada para modificar, perdorará el propio dni de la persona a modificar.
  if (!crea) {
    const rer = vector.indexOf(0);
    if (rer > -1) vector.splice(rer, 1);
  }

  if (vector.indexOf(0) > -1) {
    alert('¡Ese DNI ya esta siendo usado!');
    return false;
  }

  return true;
};
