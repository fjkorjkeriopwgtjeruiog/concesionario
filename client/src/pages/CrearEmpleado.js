import React, { useState } from 'react';
import { createNewEmpleado } from '../lib/empleado.js';
import { Link } from 'react-router-dom';

const CrearEmpleado = () => {
  const [nom, setNom] = useState('');
  const [nac, setNac] = useState('');
  const [dni, setDni] = useState('');
  const [ciu, setCiu] = useState('');

  const ajuNom = (event) => {
    setNom(event.currentTarget.value);
  };

  const ajuNac = (event) => {
    setNac(event.currentTarget.value);
  };

  const ajuDni = (event) => {
    setDni(event.currentTarget.value);
  };

  const ajuCiu = (event) => {
    setCiu(event.currentTarget.value);
  };

  const introduceempleado = () => {
    if (dni.length < 9) alert('¡DNI no válido!');
    else {
      const em = {
        nombre: nom,
        fecha_nacimiento: nac,
        dni: dni,
        ciudad_natal: ciu,
        fecha_contratacion: new Date(),
      };
      createNewEmpleado(em);
      alert('¡El empleado ha sido contratado!');
    }
  };

  return (
    <main className="crear-profe">
      <h2>Introduzca los datos del empleado que quieres contratar</h2>

      <form>
        <div>
          <label className="Label">Nombre:</label>
          <input type="text" onChange={ajuNom} />
        </div>

        <div>
          <label className="Label">Fecha de nacimiento:</label>
          <input type="date" onChange={ajuNac} />
        </div>

        <div>
          <label>DNI:</label>
          <input type="text" maxlength="9" onChange={ajuDni} />
        </div>

        <div>
          <label className="Label">Ciudad Natal:</label>
          <input type="text" onChange={ajuCiu} />
        </div>

        <Link to="/empleado">
          <button className="btn" type="button" onClick={introduceempleado}>
            Contratar Empleado
          </button>
        </Link>
        <br />
      </form>
    </main>
  );
};

export default CrearEmpleado;