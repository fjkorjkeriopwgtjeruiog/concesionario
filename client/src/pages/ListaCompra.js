import React, { useEffect, useState } from 'react';
import { getAllCompras, deleteCompra } from '../lib/compra.js';
import { Link } from 'react-router-dom';
import { fechar } from '../funciones.js';

const ListaCompra = () => {
  const [compraData, setCompraData] = useState([]);
  const [resul, setResul] = useState(-1); // A la espera de que los datos carguen.

  const fetchAllCompras = async () => {
    const data = await getAllCompras();
    setCompraData(data);
    setResul(data.length);
  };

  useEffect(() => {
    fetchAllCompras();
  }, []);

  const eliminacompra = async (event) => {
    const id = event.currentTarget.value;
    await deleteCompra(id);
    fetchAllCompras();
    alert('¡La venta ha sido anulada!');
  };

  return (
    <main>
      <div className="action">
        <h1 className="Nombre Compra">Lista de Ventas</h1>
        <Link to="/crearcompra">
          <button className="btn" type="button">
            Incluir una nueva Venta
          </button>
        </Link>
        <h1 className="Nombre Compra">Resultados: {resul}</h1>
      </div>
      <div className="Wrapper-flex-profes">
        <ul className="lista-profes-container">
          {compraData.map((compra, i) => {
            return (
              <ul className="lista-profe" key={i}>
                <h2>Venta {compra.id}</h2>
                <h4>Coche: {compra.coche}</h4>
                <h4>Comprador: {compra.cliente}</h4>
                <h4>Vendedor: {compra.empleado}</h4>
                <h4>Concesionario: {compra.tienda}</h4>
                <h4>Fecha de la compra: {fechar(compra.fecha)}</h4>

                <l className="Wrapper-flex-profes">
                  <Link to={'/modificarcompra/' + compra.id}>
                    <button className="btn warning" type="button">
                      Modificar
                    </button>
                  </Link>
                  <button
                    className="btn danger"
                    type="button"
                    value={compra.id}
                    onClick={eliminacompra}
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

export default ListaCompra;
