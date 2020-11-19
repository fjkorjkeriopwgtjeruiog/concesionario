import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <main className="Wrap">
      <h1>
        <u>¡Bienvenido a los Concesionarios Max!</u>
      </h1>
      <p>
        ¿Buscas un coche de última generación? ¿Uno barato? ¿Uno con mucho
        espacio?
        <br />
        Sea cual sea el coche que estes buscando, ¡Aquí lo encontrarás!
      </p>
      <Link to="/coche">
        <button className="VcButton">Lista de Coches</button>
      </Link>
    </main>
  );
};

export default Inicio;
