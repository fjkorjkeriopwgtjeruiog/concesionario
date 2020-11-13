import React, { useEffect, useState } from 'react';
import { getAllCompras, deleteCompra } from '../lib/compra.js';
import { Link } from 'react-router-dom';

const ListaCompra = () => {
  const [compraData, setCompraData] = useState([]);

  const fetchAllCompras = async () => {
    const data = await getAllCompras();
    setCompraData(data);
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
      <h1 className="Nombreprofe">Lista de Ventas</h1>
      <div className="action">
        <Link to="/crearcompra">
          <button className="btn" type="button">
            Incluir una nueva Venta
          </button>
        </Link>
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
                <h4>Fecha de la compra: {compra.fecha}</h4>

                <l className="Wrapper-flex-profes">
                  <Link to={'/modificarcompra/' + compra.id}>
                    <button className="btn btn-edit" type="button">
                      Modificar
                    </button>
                  </Link>
                  <button
                    className="btn btn-edit"
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
