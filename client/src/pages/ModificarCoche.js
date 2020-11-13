import React, { useState, useEffect } from 'react';
import { updateCoche, getCoche } from '../lib/coche.js';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ModificarCoche = () => {
  const [nom, setNom] = useState('');
  const [fab, setFab] = useState('');
  const [ann, setAnn] = useState(0);
  const [pre, setPre] = useState(0);
  const [pla, setPla] = useState(0);

  const { id } = useParams();

  const fetchCoche = async (id) => {
    const data = await getCoche(id);
    const datos = data[0]; // Los datos son devueltos como un array, por lo que hay que arreglarlo.
    setNom(datos.nombre);
    setFab(datos.fabricante);
    setAnn(datos.anno_fabricacion);
    setPre(datos.precio);
    setPla(datos.plazas);
  };

  useEffect(() => {
    fetchCoche(id);
  }, [id]);

  const ajuNom = (event) => {
    setNom(event.currentTarget.value);
  };
  const ajuFab = (event) => {
    setFab(event.currentTarget.value);
  };
  const ajuAnn = (event) => {
    setAnn(event.currentTarget.value);
  };
  const ajuPre = (event) => {
    setPre(event.currentTarget.value);
  };
  const ajuPla = (event) => {
    setPla(event.currentTarget.value);
  };

  const modificacoche = () => {
    const co = {
      nombre: nom,
      fabricante: fab,
      anno_fabricacion: ann,
      precio: pre,
      plazas: pla,
    };
    updateCoche(co, id);
    alert('¡Los datos del coche han sido modificados con exito!');
  };

  return (
    <main className="crear-profe">
      <h2>Introduzca los nuevos datos para el coche</h2>

      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nom} onChange={ajuNom} />
        </div>

        <div>
          <label>Fabricante:</label>
          <input type="text" value={fab} onChange={ajuFab} />
        </div>

        <div>
          <label>Año de fabricación:</label>
          <input type="text" value={ann} onChange={ajuAnn} />
        </div>

        <div>
          <label>precio:</label>
          <input type="text" value={pre} onChange={ajuPre} />
        </div>

        <div>
          <label>Plazas:</label>
          <input type="text" value={pla} onChange={ajuPla}></input>
        </div>

        <Link to="/coche">
          <button className="btn" type="button" onClick={modificacoche}>
            Modificar Coche
          </button>
        </Link>
        <br />
      </form>
    </main>
  );
};

export default ModificarCoche;
