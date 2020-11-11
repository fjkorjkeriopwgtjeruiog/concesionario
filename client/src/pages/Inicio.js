import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <main className="Wrap">
      <h3>¡Bienvenido a los Concesionarios Max!</h3>
      <p>
        ¿Buscas un coche de última gama? ¿Uno barato? ¿Uno con mucho espacio?
        <br />
        Sea cual sea el coche que estes buscando, ¡Aquí lo encontrarás!
      </p>
      <button className="VcButton" onClick="#">
        <Link to="/coche">Lista de Coches</Link>
      </button>
    </main>
  );
};

export default Inicio;
