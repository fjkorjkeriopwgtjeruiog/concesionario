import React, { useState, useEffect } from 'react';
import { createCompra } from '../lib/compra.js';
import { useHistory } from 'react-router-dom';

// Sacamos las anteriores listas creadas hasta ahora.
import { getAllClientes } from '../lib/cliente.js';
import { getAllCoches } from '../lib/coche.js';
import { getAllEmpleados } from '../lib/empleado.js';
import { getAllTiendas } from '../lib/tienda.js';

const CrearCompra = () => {
  const [coc, setCoc] = useState(0);
  const [cli, setCli] = useState(0);
  const [emp, setEmp] = useState(0);
  const [tie, setTie] = useState(0);
  const history = useHistory();

  // Esta vez necesitamos MUCHAS arrays para los valores foraneos.
  const [cocp, setCocp] = useState([]);
  const [clip, setClip] = useState([]);
  const [empp, setEmpp] = useState([]);
  const [tiep, setTiep] = useState([]);

  const ajuCoc = (event) => {
    setCoc(event.currentTarget.value);
  };

  const ajuCli = (event) => {
    setCli(event.currentTarget.value);
  };

  const ajuEmp = (event) => {
    setEmp(event.currentTarget.value);
  };

  const ajuTie = (event) => {
    setTie(event.currentTarget.value);
  };

  const fetchValores = async () => {
    const vendedor = await getAllEmpleados();
    setEmpp(vendedor);
    setEmp(vendedor[0].id); // Le damos un valor predeterminado.

    const comprador = await getAllClientes();
    setClip(comprador);
    setCli(comprador[0].id);

    const coche = await getAllCoches();
    setCocp(coche);
    setCoc(coche[0].id);

    const concesionario = await getAllTiendas();
    setTiep(concesionario);
    setTie(concesionario[0].id);
  };

  useEffect(() => {
    fetchValores();
  }, []);

  const introducetienda = () => {
    const co = {
      coche: coc,
      cliente: cli,
      empleado: emp,
      tienda: tie,
      fecha: new Date(),
    };
    createCompra(co, function () {
      alert('¡La venta se ha realizado con exito!');
      history.push('/compra');
    });
  };

  return (
    <main className="crear-profe">
      <h2>Introduzca los datos de la venta</h2>

      <form>
        <div>
          <label>Coche:</label>
          <select onChange={ajuCoc}>
            {cocp.map((g) => {
              return (
                <option value={g.id}>
                  {g.fabricante} {g.nombre}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label>Cliente:</label>
          <select onChange={ajuCli}>
            {clip.map((g) => {
              return <option value={g.id}>{g.nombre}</option>;
            })}
          </select>
        </div>

        <div>
          <label>Empleado:</label>
          <select onChange={ajuEmp}>
            {empp.map((g) => {
              return <option value={g.id}>{g.nombre}</option>;
            })}
          </select>
        </div>

        <div>
          <label>Concesionario:</label>
          <select onChange={ajuTie}>
            {tiep.map((g) => {
              return <option value={g.id}>{g.tienda}</option>;
            })}
          </select>
        </div>

        <button className="btn" type="button" onClick={introducetienda}>
          Añadir Venta
        </button>
        <br />
      </form>
    </main>
  );
};

export default CrearCompra;
