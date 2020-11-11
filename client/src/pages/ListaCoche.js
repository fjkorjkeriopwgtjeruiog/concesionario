import React, { useEffect, useState } from 'react';
import { getAllCoches } from '../lib/coche.js';
//import { Link } from 'react-router-dom';

const Teachers = () => {
  const [cocheData, setCocheData] = useState([]);

  const fetchAllCoches = async () => {
    const data = await getAllCoches();
    setCocheData({ data });
  };

  useEffect(() => {
    fetchAllCoches();
  }, []);

  return (
    <main>
      <h3 className="Nombreprofe">Lista de Coches</h3>
      <div className="Wrapper-flex-profes">
        <ul className="lista-profes-container">
          {cocheData.map((coche, i) => {
            return (
              <li className="lista-profe" key={i}>
                <p>
                  {coche.id} {coche.fabricante} {coche.nombre}
                </p>
              </li>
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
