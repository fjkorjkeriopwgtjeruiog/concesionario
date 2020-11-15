import React, { useState, useEffect } from 'react';
import { updateCompra, getCompra } from '../lib/compra.js';
import { useParams } from 'react-router-dom';

// Sacamos las anteriores listas creadas hasta ahora.
import { getAllClientes } from '../lib/cliente.js';
import { getAllCoches } from '../lib/coche.js';
import { getAllEmpleados } from '../lib/empleado.js';
import { getAllTiendas } from '../lib/tienda.js';

const ModificarCompra = () => {
  const [coc, setCoc] = useState(0);
  const [cli, setCli] = useState(0);
  const [emp, setEmp] = useState(0);
  const [tie, setTie] = useState(0);

  // Esta vez necesitamos MUCHAS arrays para los valores foraneos.
  const [cocp, setCocp] = useState([]);
  const [clip, setClip] = useState([]);
  const [empp, setEmpp] = useState([]);
  const [tiep, setTiep] = useState([]);

  const { id } = useParams();

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

  const fetchValores = async (id) => {
    const vendedor = await getAllEmpleados();
    setEmpp(vendedor);

    const comprador = await getAllClientes();
    setClip(comprador);

    const coche = await getAllCoches();
    setCocp(coche);

    const concesionario = await getAllTiendas();
    setTiep(concesionario);

    const data = await getCompra(id);
    const datos = data[0];
    setEmp(datos.empleado);
    setCli(datos.cliente);
    setCoc(datos.coche);
    setTie(datos.tienda);
  };

  useEffect(() => {
    fetchValores(id);
  }, [id]);

  const modificatienda = () => {
    const co = {
      coche: coc,
      cliente: cli,
      empleado: emp,
      tienda: tie,
    };
    updateCompra(co, id, function () {
      alert('¡La venta se ha modificado con exito!');
      window.location.replace('/compra');
    });
  };

  return (
    <main className="crear-profe">
      <h2>Modifique los datos de la venta</h2>

      <form>
        <div>
          <label>Coche:</label>
          <select value={coc} onChange={ajuCoc}>
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
          <select value={cli} onChange={ajuCli}>
            {clip.map((g) => {
              return <option value={g.id}>{g.nombre}</option>;
            })}
          </select>
        </div>

        <div>
          <label>Empleado:</label>
          <select value={emp} onChange={ajuEmp}>
            {empp.map((g) => {
              return <option value={g.id}>{g.nombre}</option>;
            })}
          </select>
        </div>

        <div>
          <label>Concesionario:</label>
          <select value={tie} onChange={ajuTie}>
            {tiep.map((g) => {
              return <option value={g.id}>{g.tienda}</option>;
            })}
          </select>
        </div>

        <button className="btn" type="button" onClick={modificatienda}>
          Modificar Venta
        </button>
        <br />
      </form>
    </main>
  );
};

export default ModificarCompra;
