import React, { useState } from 'react';
import { createNewCoche } from '../lib/coche.js';
import { Link } from 'react-router-dom';

const FormTeacher = () => {
  const [nom, setNom] = useState('');
  const [fab, setFab] = useState('');
  const [ann, setAnn] = useState('');
  const [pre, setPre] = useState('');
  const [pla, setPla] = useState('');

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

  const introducecoche = () => {
    const profi = {
      nombre: nom,
      fabricante: fab,
      anno_fabricacion: ann,
      precio: pre,
      plazas: pla,
    };
    createNewCoche(profi);
    alert('¡El coche ' + nom + ' ha sido creado correctamente!');
  };

  return (
    <main className="crear-profe">
      <h2>Introduzca los datos del nuevo coche</h2>

      <form>
        <div>
          <label className="Label">Nombre:</label>
          <input type="text" name="nombre" id="nombre" onChange={ajuNom} />
        </div>

        <div>
          <label>Fabricante:</label>
          <input
            type="text"
            name="fabricante"
            id="fabricante"
            onChange={ajuFab}
          />
        </div>

        <div>
          <label>Año de fabricación:</label>
          <input
            type="text"
            name="anno_fabricacion"
            id="anno_fabricacion"
            onChange={ajuAnn}
          />
        </div>

        <div>
          <label>precio:</label>
          <input type="text" name="precio" id="precio" onChange={ajuPre} />
        </div>

        <div>
          <label>Plazas:</label>
          <input
            type="text"
            name="plazas"
            id="plazas"
            onChange={ajuPla}
          ></input>
        </div>

        <button className="btn" type="button" onClick={introducecoche}>
          <Link to="/coche">Crear Coche</Link>
        </button>
        <br />
      </form>
    </main>
  );
};

export default FormTeacher;
