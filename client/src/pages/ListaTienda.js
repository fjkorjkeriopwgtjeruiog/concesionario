import React, { useEffect, useState } from 'react';
import { getAllTiendas, deleteTienda } from '../lib/tienda.js';
import { Link } from 'react-router-dom';

const ListaTienda = () => {
  const [tiendaData, setTiendaData] = useState([]);

  const fetchAllTiendas = async () => {
    const data = await getAllTiendas();
    setTiendaData(data);
  };

  useEffect(() => {
    fetchAllTiendas();
  }, []);

  const eliminatienda = async (event) => {
    const id = event.currentTarget.value;
    await deleteTienda(id);
    fetchAllTiendas();
    alert('¡La tienda ha sido borrada de nuestra lista!');
  };

  return (
    <main>
      <h1 className="Nombreprofe">Lista de Tiendas</h1>
      <div className="action">
        <Link to="/creartienda">
          <button className="btn" type="button">
            Crear una nueva Tienda
          </button>
        </Link>
      </div>
      <div className="Wrapper-flex-profes">
        <ul className="lista-profes-container">
          {tiendaData.map((tienda, i) => {
            return (
              <ul className="lista-profe" key={i}>
                <h2>{tienda.tienda}</h2>
                <h4>Ciudad: {tienda.ciudad}</h4>
                <h4>Año en el que se creo: {tienda.anno_construccion}€</h4>
                <h4>Gerente: {tienda.gerente}</h4>

                <l className="Wrapper-flex-profes">
                  <Link to={'/modificartienda/' + tienda.id}>
                    <button className="btn btn-edit" type="button">
                      Modificar
                    </button>
                  </Link>
                  <button
                    className="btn btn-edit"
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
