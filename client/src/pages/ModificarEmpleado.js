import React, { useState, useEffect } from 'react';
import { updateEmpleado, getEmpleado } from '../lib/empleado.js';
import { useParams, Link } from 'react-router-dom';
import { revisar } from '../funciones.js';

const ModificarEmpleado = () => {
  const [nom, setNom] = useState('');
  const [nac, setNac] = useState('');
  const [dni, setDni] = useState(10000000);
  const [ciu, setCiu] = useState('');

  const { id } = useParams();

  const fetchEmpleado = async (id) => {
    const data = await getEmpleado(id);
    const datos = data[0];
    setNom(datos.nombre);
    setNac(datos.fecha_nacimiento);
    setDni(datos.dni);
    setCiu(datos.ciudad_natal);
  };

  useEffect(() => {
    fetchEmpleado(id);
  }, [id]);

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

  const modificaempleado = async () => {
    if (await revisar(dni, 0)) {
      const em = {
        nombre: nom,
        fecha_nacimiento: nac,
        dni: dni,
        ciudad_natal: ciu,
      };
      updateEmpleado(em, id);
      alert('¡Los datos del empleado han sido modificados!');
    }
  };

  return (
    <main className="crear-profe">
      <h2>Introduzca los nuevos datos para el empleado</h2>

      <form>
        <div>
          <label className="Label">Nombre:</label>
          <input type="text" value={nom} onChange={ajuNom} />
        </div>

        <div>
          <label className="Label">Fecha de nacimiento:</label>
          <input type="date" value={nac} onChange={ajuNac} />
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
          <label className="Label">Ciudad Natal:</label>
          <input type="text" value={ciu} onChange={ajuCiu} />
        </div>

        <Link to="/empleado">
          <button className="btn" type="button" onClick={modificaempleado}>
            Modificar Empleado
          </button>
        </Link>
        <br />
      </form>
    </main>
  );
};

export default ModificarEmpleado;
