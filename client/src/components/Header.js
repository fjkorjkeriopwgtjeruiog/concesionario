import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link className="brand" to="/">
        <h1>Concesionarios Max</h1>
      </Link>

      <nav className="Menu">
        <ul className="NavMenu">
          <li className="ElementNavMenu">
            <Link to="/coche">Coches</Link>
          </li>
          <li className="ElementNavMenu">
            <Link to="/cliente">Clientes</Link>
          </li>
          <li className="ElementNavMenu">
            <Link to="/empleado">Empleados</Link>
          </li>
          <li className="ElementNavMenu">
            <Link to="/tienda">Concesionarios</Link>
          </li>
          <li className="ElementNavMenu">
            <Link to="/compra">Ventas</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
