import React, { useEffect, useState } from 'react';
import { getAllClientela, deleteCliente } from '../lib/cliente.js';
import { Link } from 'react-router-dom';
import { nif } from '../funciones.js';

const ListaCliente = () => {
  const [clienteData, setClienteData] = useState([]);

  const fetchAllClientes = async () => {
    const data = await getAllClientela();
    setClienteData(data);
  };

  useEffect(() => {
    fetchAllClientes();
  }, []);

  const eliminacliente = async (event) => {
    const id = event.currentTarget.value;
    await deleteCliente(id);
    fetchAllClientes();
    alert('¡El cliente ha sido eliminado de nuestra lista!');
  };

  return (
    <main>
      <h1 className="Nombreprofe">Lista de Clientes</h1>
      <div className="action">
        <Link to="/crearcliente">
          <button className="btn" type="button">
            Registrar a un nuevo Cliente
          </button>
        </Link>
      </div>
      <div className="Wrapper-flex-profes">
        <ul className="lista-profes-container">
          {clienteData.map((cliente, i) => {
            return (
              <ul className="lista-profe" key={i}>
                <h2>{cliente.nombre}</h2>
                <h4>NIF: {nif(cliente.dni)}</h4>
                <h4>Fecha de Registro: {cliente.fecha_registro}</h4>
                <h4>Dinero gastado: {cliente.gastado}</h4>
                <l className="Wrapper-flex-profes">
                  <Link to={'/modificarcliente/' + cliente.id}>
                    <button className="btn btn-edit" type="button">
                      Modificar
                    </button>
                  </Link>
                  <button
                    className="btn btn-edit"
                    type="button"
                    value={cliente.id}
                    onClick={eliminacliente}
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

export default ListaCliente;
