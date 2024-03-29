import React, { useEffect, useState } from 'react';
import { getAllEmpleados, deleteEmpleado } from '../lib/empleado.js';
import { Link } from 'react-router-dom';
import { nif, fechar } from '../funciones.js';

const ListaEmpleado = () => {
  const [empleadoData, setEmpleadoData] = useState([]);
  const [resul, setResul] = useState(-1);

  const fetchAllEmpleados = async () => {
    const data = await getAllEmpleados();
    setEmpleadoData(data);
    setResul(data.length);
  };

  useEffect(() => {
    fetchAllEmpleados();
  }, []);

  const eliminaempleado = async (event) => {
    const id = event.currentTarget.value;
    await deleteEmpleado(id);
    fetchAllEmpleados();
    alert('¡El empleado ha sido despedido!');
  };

  return (
    <main>
      <div className="action">
        <h1 className="Nombre Empleado">Lista de Empleados</h1>
        <Link to="/crearempleado">
          <button className="btn" type="button">
            Contratar a un nuevo Empleado
          </button>
        </Link>
        <h1 className="Nombre Compra">Resultados: {resul}</h1>
      </div>
      <div className="Wrapper-flex-profes">
        <ul className="lista-profes-container">
          {empleadoData.map((empleado, i) => {
            return (
              <ul className="lista-profe" key={i}>
                <h2>{empleado.nombre}</h2>
                <h4>
                  Fecha de nacimiento: {fechar(empleado.fecha_nacimiento)}
                </h4>
                <h4>NIF: {nif(empleado.dni)}</h4>
                <h4>Ciudad natal: {empleado.ciudad_natal}</h4>
                <h4>
                  Fecha de Contratación: {fechar(empleado.fecha_contratacion)}
                </h4>

                <l className="Wrapper-flex-profes">
                  <Link to={'/modificarempleado/' + empleado.id}>
                    <button className="btn warning" type="button">
                      Modificar
                    </button>
                  </Link>
                  <button
                    className="btn danger"
                    type="button"
                    value={empleado.id}
                    onClick={eliminaempleado}
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

export default ListaEmpleado;
