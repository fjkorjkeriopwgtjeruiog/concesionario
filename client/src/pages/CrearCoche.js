import React, { useState } from 'react';
import { createCoche } from '../lib/coche.js';

const CrearCoche = () => {
  const [nom, setNom] = useState('');
  const [fab, setFab] = useState('');
  const [ann, setAnn] = useState(0);
  const [pre, setPre] = useState(0);
  const [pla, setPla] = useState(0);
  const [fot, setFot] = useState('');

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
  const ajuFot = (event) => {
    setFot(event.currentTarget.value);
  };

  const introducecoche = () => {
    const co = {
      nombre: nom,
      fabricante: fab,
      anno_fabricacion: ann,
      precio: pre,
      plazas: pla,
      foto: fot,
    };
    createCoche(co, function () {
      alert('¡El coche ha sido creado correctamente!');
      window.location.replace('/coche');
    });
  };

  return (
    <main className="crear-profe">
      <h2>Introduzca los datos del nuevo coche</h2>

      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" onChange={ajuNom} />
        </div>

        <div>
          <label>Fabricante:</label>
          <input type="text" onChange={ajuFab} />
        </div>

        <div>
          <label>Año de fabricación:</label>
          <input type="number" onChange={ajuAnn} />
        </div>

        <div>
          <label>precio:</label>
          <input type="number" onChange={ajuPre} />
        </div>

        <div>
          <label>Plazas:</label>
          <input type="number" onChange={ajuPla}></input>
        </div>

        <div>
          <label>Foto:</label>
          <input type="text" onChange={ajuFot} />
        </div>

        <button className="btn" type="button" onClick={introducecoche}>
          Crear Coche
        </button>
        <br />
      </form>
    </main>
  );
};

export default CrearCoche;
