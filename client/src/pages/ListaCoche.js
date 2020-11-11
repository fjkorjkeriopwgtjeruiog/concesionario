import React, { useEffect, useState } from 'react';
import { getAllCoches } from '../lib/coche.js';
//import { Link } from 'react-router-dom';

const Teachers = () => {
  const [cocheData, setCocheData] = useState([]);

  const fetchAllCoches = async () => {
    const data = await getAllCoches();
    setCocheData(data);
  };

  useEffect(() => {
    fetchAllCoches();
  }, []);

  return (
    <main>
      <h1 className="Nombreprofe">Lista de Coches</h1>
      <div className="Wrapper-flex-profes">
        <ul className="lista-profes-container">
          {cocheData.map((coche, i) => {
            return (
              <ul className="lista-profe" key={i}>
                <h2>
                  Nombre: {coche.fabricante} {coche.nombre}
                </h2>
                <h4>Año de fabricación: {coche.anno_fabricacion}</h4>
                <h4>Precio: {coche.precio}€</h4>
                <h4>Nº de asientos: {coche.plazas}</h4>
              </ul>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Teachers;

/*
      <div className="action">
        <button className="btn" type="button">
          <Link to="/crearcoche">Crear un nuevo Coche</Link>
        </button>
      </div>
*/
