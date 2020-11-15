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
    setDni(datos.dni);
    setCiu(datos.ciudad_natal);
    // Por disonancias con el formato de la fecha, necesitamos correcciones.
    const f = new Date(datos.fecha_nacimiento);
    let d = f.getDate();
    if (d < 10) d = '0' + String(d);
    let m = f.getMonth() + 1;
    if (m < 10) m = '0' + String(m);
    const a = f.getFullYear();
    const c = a + '-' + m + '-' + d;
    setNac(c);
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
          <label>Nombre:</label>
          <input type="text" value={nom} onChange={ajuNom} />
        </div>

        <div>
          <label>Fecha de nacimiento:</label>
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
          <label>Ciudad Natal:</label>
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
