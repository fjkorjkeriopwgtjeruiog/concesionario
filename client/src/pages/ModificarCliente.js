import React, { useState, useEffect } from 'react';
import { updateCliente, getCliente } from '../lib/cliente.js';
import { useParams, useHistory } from 'react-router-dom';
import { revisar } from '../funciones.js';

const ModificarCliente = () => {
  const [nom, setNom] = useState('');
  const [dni, setDni] = useState(10000000);
  const history = useHistory();

  const { id } = useParams();

  const fetchCliente = async (id) => {
    const data = await getCliente(id);
    const datos = data[0]; // Los datos son devueltos como un array, por lo que hay que arreglarlo.
    setNom(datos.nombre);
    setDni(datos.dni);
  };

  useEffect(() => {
    fetchCliente(id);
  }, [id]);

  const ajuNom = (event) => {
    setNom(event.currentTarget.value);
  };
  const ajuDni = (event) => {
    setDni(event.currentTarget.value);
  };

  const modificacliente = async () => {
    if (await revisar(dni, 0)) {
      const cl = {
        nombre: nom,
        dni: dni,
      };
      updateCliente(cl, id, function () {
        alert('¡Los datos del cliente han sido actualizados correctamente!');
        history.push('/cliente');
      });
    }
  };

  return (
    <main className="crear-profe">
      <h2>Introduzca los nuevos datos para el cliente</h2>

      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nom} onChange={ajuNom} />
        </div>

        <div>
          <label>DNI:</label>
          <input
            type="number"
            min="10000000"
            max="99999999"
            value={dni}
            onChange={ajuDni}
          />
        </div>

        <button className="btn" type="button" onClick={modificacliente}>
          Modificar Cliente
        </button>
        <br />
      </form>
    </main>
  );
};

export default ModificarCliente;
