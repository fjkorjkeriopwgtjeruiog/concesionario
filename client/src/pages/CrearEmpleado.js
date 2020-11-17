import React, { useState } from 'react';
import { createEmpleado } from '../lib/empleado.js';
import { revisar } from '../funciones.js';
import { useHistory } from 'react-router-dom';

const CrearEmpleado = () => {
  const [nom, setNom] = useState('');
  const [nac, setNac] = useState('');
  const [dni, setDni] = useState(10000000);
  const [ciu, setCiu] = useState('');
  const history = useHistory();

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

  const introduceempleado = async () => {
    if (await revisar(dni, 1)) {
      const em = {
        nombre: nom,
        fecha_nacimiento: nac,
        dni: dni,
        ciudad_natal: ciu,
        fecha_contratacion: new Date(),
      };
      createEmpleado(em, function () {
        alert('¡El empleado ha sido contratado!');
        history.push('/empleado');
      });
    }
  };

  return (
    <main className="crear-profe">
      <h2>Introduzca los datos del empleado que quieres contratar</h2>

      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" onChange={ajuNom} />
        </div>

        <div>
          <label>Fecha de nacimiento:</label>
          <input type="date" onChange={ajuNac} />
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

        <div>
          <label>Ciudad Natal:</label>
          <input type="text" onChange={ajuCiu} />
        </div>

        <button className="btn" type="button" onClick={introduceempleado}>
          Contratar Empleado
        </button>
        <br />
      </form>
    </main>
  );
};

export default CrearEmpleado;
