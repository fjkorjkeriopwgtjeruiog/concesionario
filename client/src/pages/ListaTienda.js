import React, { useEffect, useState } from 'react';
import { getAllTiendas, deleteTienda } from '../lib/tienda.js';
import { Link } from 'react-router-dom';

const ListaTienda = () => {
  const [tiendaData, setTiendaData] = useState([]);
  const [resul, setResul] = useState(-1);

  const fetchAllTiendas = async () => {
    const data = await getAllTiendas();
    setTiendaData(data);
    setResul(data.length);
  };

  useEffect(() => {
    fetchAllTiendas();
  }, []);

  const eliminatienda = async (event) => {
    const id = event.currentTarget.value;
    await deleteTienda(id);
    fetchAllTiendas();
    alert('¡El concesionario ha sido eliminado de nuestra lista!');
  };

  return (
    <main>
      <div className="action">
        <h1 className="Nombre Tienda">Lista de Concesionarios</h1>
        <Link to="/creartienda">
          <button className="btn" type="button">
            Crear un nuevo Concesionario
          </button>
        </Link>
        <h1 className="Nombre Compra">Resultados: {resul}</h1>
      </div>
      <div className="Wrapper-flex-profes">
        <ul className="lista-profes-container">
          {tiendaData.map((tienda, i) => {
            return (
              <ul className="lista-profe" key={i}>
                <h2>{tienda.tienda}</h2>
                <h4>Ciudad: {tienda.ciudad}</h4>
                <h4>Año en el que se creo: {tienda.anno_construccion}</h4>
                <h4>Gerente: {tienda.gerente}</h4>

                <l className="Wrapper-flex-profes">
                  <Link to={'/modificartienda/' + tienda.id}>
                    <button className="btn warning" type="button">
                      Modificar
                    </button>
                  </Link>
                  <button
                    className="btn danger"
                    type="button"
                    value={tienda.id}
                    onClick={eliminatienda}
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

export default ListaTienda;
