import React, { useEffect, useState } from 'react';
import { getAllCoches, deleteCoche } from '../lib/coche.js';
import { Link } from 'react-router-dom';

const ListaCoche = () => {
  const [cocheData, setCocheData] = useState([]);
  const [resul, setResul] = useState(-1);

  const fetchAllCoches = async () => {
    const data = await getAllCoches();
    setCocheData(data);
    setResul(data.length);
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
      <div className="action">
        <h1 className="Nombre Coche">Lista de Coches</h1>
        <Link to="/crearcoche">
          <button className="btn" type="button">
            Crear un nuevo Coche
          </button>
        </Link>
        <h1 className="Nombre Compra">Resultados: {resul}</h1>
      </div>
      <div className="Wrapper-flex-profes">
        <ul className="lista-profes-container">
          {cocheData.map((coche, i) => {
            return (
              <ul className="lista-profe" key={i}>
                <img src={coche.foto} alt={'Error'} />
                <h2>
                  {coche.fabricante} {coche.nombre}
                </h2>
                <h4>Año de fabricación: {coche.anno_fabricacion}</h4>
                <h4>Precio: {coche.precio}€</h4>
                <h4>Nº de asientos: {coche.plazas}</h4>
                <l className="Wrapper-flex-profes">
                  <Link to={'/modificarcoche/' + coche.id}>
                    <button className="btn warning" type="button">
                      Modificar
                    </button>
                  </Link>
                  <button
                    className="btn danger"
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

export default ListaCoche;
