import React, { useEffect, useState } from 'react';
import { getAllEmpleados, deleteEmpleado } from '../lib/empleado.js';
import { Link } from 'react-router-dom';

const ListaEmpleado = () => {
  const [empleadoData, setEmpleadoData] = useState([]);

  const fetchAllEmpleados = async () => {
    const data = await getAllEmpleados();
    setEmpleadoData(data);
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
      <h1 className="Nombreprofe">Lista de Empleados</h1>
      <div className="action">
        <button className="btn" type="button">
          <Link to="/crearcliente">Contratar a un nuevo Empleado</Link>
        </button>
      </div>
      <div className="Wrapper-flex-profes">
        <ul className="lista-profes-container">
          {empleadoData.map((empleado, i) => {
            return (
              <ul className="lista-profe" key={i}>
                <h2>{empleado.nombre}</h2>
                <h4>Fecha de nacimiento: {empleado.fecha_nacimiento}</h4>
                <h4>DNI: {empleado.dni}</h4>
                <h4>Ciudad natal: {empleado.ciudad_natal}</h4>
                <h4>Fecha de Contratación: {empleado.fecha_contratacion}</h4>

                <l className="Wrapper-flex-profes">
                  <Link to={'/modificarempleado/' + empleado.id}>
                    <button className="btn btn-edit" type="button">
                      Modificar
                    </button>
                  </Link>
                  <button
                    className="btn btn-edit"
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
