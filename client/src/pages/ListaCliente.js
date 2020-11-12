import React, { useEffect, useState } from 'react';
import { getAllClientes, deleteCliente } from '../lib/cliente.js';
import { Link } from 'react-router-dom';

const ListaCliente = () => {
  const [clienteData, setClienteData] = useState([]);

  const fetchAllClientes = async () => {
    const data = await getAllClientes();
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
        <button className="btn" type="button">
          <Link to="/crearcliente">Registrar a un nuevo Cliente</Link>
        </button>
      </div>
      <div className="Wrapper-flex-profes">
        <ul className="lista-profes-container">
          {clienteData.map((cliente, i) => {
            return (
              <ul className="lista-profe" key={i}>
                <h2>{cliente.nombre}</h2>
                <h4>DNI: {cliente.dni}</h4>
                <h4>Fecha de Registro: {cliente.fecha_registro}</h4>

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
