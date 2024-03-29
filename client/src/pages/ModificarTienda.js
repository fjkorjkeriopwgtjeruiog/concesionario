import React, { useState, useEffect } from 'react';
import { updateTienda, getTienda } from '../lib/tienda.js';
import { getEmpleadosLibres, getEmpleado } from '../lib/empleado.js';
import { useParams, useHistory } from 'react-router-dom';

const ModificarTienda = () => {
  const [nom, setNom] = useState('');
  const [ciu, setCiu] = useState('');
  const [con, setCon] = useState(0);
  const [ger, setGer] = useState(0);
  const [gerentes, partido] = useState([]);
  const history = useHistory();

  const { id } = useParams();

  const fetchDatos = async (id) => {
    const data = await getTienda(id);
    const datos = data[0];
    setNom(datos.nombre);
    setCiu(datos.ciudad);
    setCon(datos.anno_construccion);

    const dato = await getEmpleadosLibres();
    const esperada = await getEmpleado(datos.gerente);
    const esper = esperada[0];
    dato.push({ id: esper.id, nombre: esper.nombre }); // Incluimos el actual gerente.
    partido(dato);
    setGer(esper.id); // Le damos de valor predeterminado el actual empleado.
  };

  useEffect(() => {
    fetchDatos(id);
  }, [id]);

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

  const modificatienda = () => {
    const ti = {
      nombre: nom,
      ciudad: ciu,
      anno_construccion: con,
      gerente: ger,
    };
    updateTienda(ti, id, function () {
      alert('¡El concesionario ha sido modificado!');
      history.push('/tienda');
    });
  };

  return (
    <main className="crear-profe">
      <h2>Introduzca los datos actualizados del concesionario</h2>

      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nom} onChange={ajuNom} />
        </div>

        <div>
          <label>Ciudad donde se encuentra:</label>
          <input type="text" value={ciu} onChange={ajuCiu} />
        </div>

        <div>
          <label>Año en la que se construyo:</label>
          <input type="number" value={con} onChange={ajuCon} />
        </div>

        <div>
          <label>Gerente:</label>
          <select value={ger} onChange={ajuGer}>
            {gerentes.map((g) => {
              return <option value={g.id}>{g.nombre}</option>;
            })}
          </select>
        </div>

        <button className="btn" type="button" onClick={modificatienda}>
          Modificar Concesionario
        </button>
        <br />
      </form>
    </main>
  );
};

export default ModificarTienda;
