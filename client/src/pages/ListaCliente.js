import React, { useEffect, useState } from 'react';
import { getAllClientela, deleteCliente } from '../lib/cliente.js';
import { Link } from 'react-router-dom';
import { nif, fechar } from '../funciones.js';

const ListaCliente = () => {
  const [clienteData, setClienteData] = useState([]);
  const [resul, setResul] = useState(-1);

  const fetchAllClientes = async () => {
    const data = await getAllClientela();
    setClienteData(data);
    setResul(data.length);
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
      <div className="action">
        <h1 className="Nombre Cliente">Lista de Clientes</h1>
        <Link to="/crearcliente">
          <button className="btn" type="button">
            Registrar a un nuevo Cliente
          </button>
        </Link>
        <h1 className="Nombre Compra">Resultados: {resul}</h1>
      </div>
      <div className="Wrapper-flex-profes">
        <ul className="lista-profes-container">
          {clienteData.map((cliente, i) => {
            return (
              <ul className="lista-profe" key={i}>
                <h2>{cliente.nombre}</h2>
                <h4>NIF: {nif(cliente.dni)}</h4>
                <h4>Fecha de Registro: {fechar(cliente.fecha_registro)}</h4>
                <h4>Dinero gastado: {cliente.gastado}€</h4>
                <l className="Wrapper-flex-profes">
                  <Link to={'/modificarcliente/' + cliente.id}>
                    <button className="btn warning" type="button">
                      Modificar
                    </button>
                  </Link>
                  <button
                    className="btn danger"
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
