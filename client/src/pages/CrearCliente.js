import React, { useState } from 'react';
import { createCliente } from '../lib/cliente.js';
import { revisar } from '../funciones.js';

const CrearCliente = () => {
  const [nom, setNom] = useState('');
  const [dni, setDni] = useState(10000000);

  const ajuNom = (event) => {
    setNom(event.currentTarget.value);
  };
  const ajuDni = (event) => {
    setDni(event.currentTarget.value);
  };

  const introducecliente = async () => {
    if (await revisar(dni, 1)) {
      const cl = {
        nombre: nom,
        dni: dni,
        fecha_registro: new Date(),
      };
      createCliente(cl, function () {
        alert('¡El cliente ha sido registrado con exito!');
        window.location.replace('/cliente');
      });
    }
  };

  return (
    <main className="crear-profe">
      <h2>Introduzca los datos del nuevo cliente</h2>

      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" onChange={ajuNom} />
        </div>

        <div>
          <label>DNI:</label>
          <input
            type="number"
            min="10000000"
            max="99999999"
            value={dni}
            onChange={ajuDni}
          />
        </div>

        <button className="btn" type="button" onClick={introducecliente}>
          Añadir Cliente
        </button>
        <br />
      </form>
    </main>
  );
};

export default CrearCliente;
