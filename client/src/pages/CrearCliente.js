import React, { useState } from 'react';
import { createNewCliente } from '../lib/cliente.js';
import { Link } from 'react-router-dom';

const CrearCliente = () => {
  const [nom, setNom] = useState('');
  const [dni, setDni] = useState('');

  const ajuNom = (event) => {
    setNom(event.currentTarget.value);
  };
  const ajuDni = (event) => {
    setDni(event.currentTarget.value);
  };

  const introducecliente = () => {
    if (dni.length < 9) alert('¡DNI inválido!');
    else {
      const cl = {
        nombre: nom,
        dni: dni,
        fecha_registro: new Date(),
      };
      createNewCliente(cl);
      alert('¡El cliente ha sido registrado con exito!');
    }
  };

  return (
    <main className="crear-profe">
      <h2>Introduzca los datos del nuevo cliente</h2>

      <form>
        <div>
          <label className="Label">Nombre:</label>
          <input type="text" name="nombre" id="nombre" onChange={ajuNom} />
        </div>

        <div>
          <label>DNI:</label>
          <input
            className="identidad"
            type="text"
            name="dni"
            id="dni"
            maxlength="9"
            onChange={ajuDni}
          />
        </div>

        <button className="btn" type="button" onClick={introducecliente}>
          <Link to="/cliente">Añadir Cliente</Link>
        </button>
        <br />
      </form>
    </main>
  );
};

export default CrearCliente;
