import React, { useState, useEffect } from 'react';
import { updateCoche, getCoche } from '../lib/coche.js';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ModificarCoche = () => {
  const [nom, setNom] = useState('');
  const [fab, setFab] = useState('');
  const [ann, setAnn] = useState('');
  const [pre, setPre] = useState();
  const [pla, setPla] = useState();

  const { id } = useParams();

  const fetchCoche = async () => {
    const data = await getCoche(id);
    const datos = data[0]; // Los datos son devueltos como un array, por lo que hay que arreglarlo.
    setNom(datos.nombre);
    setFab(datos.fabricante);
    setAnn(datos.anno_fabricacion);
    setPre(datos.precio);
    setPla(datos.plazas);
  };

  useEffect(() => {
    fetchCoche();
  }, []);

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
    alert('¡Los datos del coche ha sido modificados con exito!');
  };

  return (
    <main className="crear-profe">
      <h2>Introduzca los nuevos datos para el coche</h2>

      <form>
        <div>
          <label className="Label">Nombre:</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={nom}
            onChange={ajuNom}
          />
        </div>

        <div>
          <label>Fabricante:</label>
          <input
            type="text"
            name="fabricante"
            id="fabricante"
            value={fab}
            onChange={ajuFab}
          />
        </div>

        <div>
          <label>Año de fabricación:</label>
          <input
            type="text"
            name="anno_fabricacion"
            id="anno_fabricacion"
            value={ann}
            onChange={ajuAnn}
          />
        </div>

        <div>
          <label>precio:</label>
          <input
            type="text"
            name="precio"
            id="precio"
            value={pre}
            onChange={ajuPre}
          />
        </div>

        <div>
          <label>Plazas:</label>
          <input
            type="text"
            name="plazas"
            id="plazas"
            value={pla}
            onChange={ajuPla}
          ></input>
        </div>

        <button
          className="btn"
          type="button"
          value={pre}
          onClick={modificacoche}
        >
          <Link to="/coche">Modificar Coche</Link>
        </button>
        <br />
      </form>
    </main>
  );
};

export default ModificarCoche;
