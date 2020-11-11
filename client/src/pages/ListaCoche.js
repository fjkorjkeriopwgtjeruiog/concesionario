import React, { useEffect, useState } from 'react';
import { getAllCoches, deleteCoche } from '../lib/coche.js';
import { Link } from 'react-router-dom';

const Teachers = () => {
  const [cocheData, setCocheData] = useState([]);

  const fetchAllCoches = async () => {
    const data = await getAllCoches();
    setCocheData(data);
  };

  useEffect(() => {
    fetchAllCoches();
  }, []);

  const eliminacoche = async (event) => {
    const id = event.currentTarget.value;
    await deleteCoche(id);
    fetchAllCoches(); // Tras eliminar el coche, actualizamos la lista.
    alert('¡El coche ha sido eliminado de nuestra lista!');
  };

  return (
    <main>
      <h1 className="Nombreprofe">Lista de Coches</h1>
      <div className="action">
        <button className="btn" type="button">
          <Link to="/crearcoche">Crear un nuevo Coche</Link>
        </button>
      </div>
      <div className="Wrapper-flex-profes">
        <ul className="lista-profes-container">
          {cocheData.map((coche, i) => {
            return (
              <ul className="lista-profe" key={i}>
                <h2>
                  {coche.fabricante} {coche.nombre}
                </h2>
                <h4>Año de fabricación: {coche.anno_fabricacion}</h4>
                <h4>Precio: {coche.precio}€</h4>
                <h4>Nº de asientos: {coche.plazas}</h4>

                <l className="Wrapper-flex-profes">
                  <button className="btn btn-edit" type="button">
                    <Link to={'/cochemodificar/' + coche.id}>Modificar</Link>
                  </button>
                  <button
                    className="btn btn-edit"
                    type="button"
                    value={coche.id}
                    onClick={eliminacoche}
                  >
                    Eliminar
                  </button>
                </l>
              </ul>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Teachers;
