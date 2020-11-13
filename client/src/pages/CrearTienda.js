import React, { useState, useEffect } from 'react';
import { createTienda } from '../lib/tienda.js';
import { getEmpleadosLibres } from '../lib/empleado.js';
import { Link, Redirect } from 'react-router-dom';

const CrearTienda = () => {
  const [nom, setNom] = useState('');
  const [ciu, setCiu] = useState('');
  const [con, setCon] = useState(0);
  const [ger, setGer] = useState(0);
  const [gerentes, partido] = useState([]);

  const ajuNom = (event) => {
    setNom(event.currentTarget.value);
  };

  const ajuCiu = (event) => {
    setCiu(event.currentTarget.value);
  };

  const ajuCon = (event) => {
    setCon(event.currentTarget.value);
  };

  const ajuGer = (event) => {
    setGer(event.currentTarget.value);
  };

  const fetchAllEmpleados = async () => {
    const data = await getEmpleadosLibres();
    partido(data);
    if (data.length === 0) {
      alert('¡No queda ningún empleado que pueda dirigir el concesionario!');
      return <Redirect to="/tienda" />;
    } else setGer(data[0].id); // Le damos un valor predeterminado.
  };

  useEffect(() => {
    fetchAllEmpleados();
  }, []);

  const introducetienda = () => {
    const ti = {
      nombre: nom,
      ciudad: ciu,
      anno_construccion: con,
      gerente: ger,
      fecha_contratacion: new Date(),
    };
    createTienda(ti);
    alert('¡El concesionario ha sido añadido!');
  };

  return (
    <main className="crear-profe">
      <h2>Introduzca los datos del nuevo concesionario</h2>

      <form>
        <div>
          <label className="Label">Nombre:</label>
          <input type="text" onChange={ajuNom} />
        </div>

        <div>
          <label className="Label">Ciudad donde se encuentra:</label>
          <input type="text" onChange={ajuCiu} />
        </div>

        <div>
          <label>Año en la que se construyo:</label>
          <input type="number" onChange={ajuCon} />
        </div>

        <div>
          <label className="Label">Gerente:</label>
          <select onChange={ajuGer}>
            {gerentes.map((g) => {
              return <option value={g.id}>{g.nombre}</option>;
            })}
          </select>
        </div>

        <Link to="/tienda">
          <button className="btn" type="button" onClick={introducetienda}>
            Añadir Concesionario
          </button>
        </Link>
        <br />
      </form>
    </main>
  );
};

export default CrearTienda;
