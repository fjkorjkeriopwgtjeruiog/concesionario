import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header.js';
import Footer from './Footer.js';

import Inicio from '../pages/Inicio.js';
import ListaCoche from '../pages/ListaCoche.js';
import ListaCliente from '../pages/ListaCliente.js';
import ListaEmpleado from '../pages/ListaEmpleado.js';
import ListaTienda from '../pages/ListaTienda.js';
import ListaCompra from '../pages/ListaCompra.js';
import CrearCoche from '../pages/CrearCoche.js';
import CrearCliente from '../pages/CrearCliente.js';
import CrearEmpleado from '../pages/CrearEmpleado.js';
import CrearTienda from '../pages/CrearTienda.js';
import CrearCompra from '../pages/CrearCompra.js';
import ModificarCoche from '../pages/ModificarCoche.js';
import ModificarCliente from '../pages/ModificarCliente.js';
import ModificarEmpleado from '../pages/ModificarEmpleado.js';
import ModificarTienda from '../pages/ModificarTienda.js';
import ModificarCompra from '../pages/ModificarCompra.js';
import ErrorPage from '../pages/Error.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/coche" component={ListaCoche} />
          <Route path="/cliente" component={ListaCliente} />
          <Route path="/empleado" component={ListaEmpleado} />
          <Route path="/tienda" component={ListaTienda} />
          <Route path="/compra" component={ListaCompra} />
          <Route path="/crearcoche" component={CrearCoche} />
          <Route path="/crearcliente" component={CrearCliente} />
          <Route path="/creartienda" component={CrearTienda} />
          <Route path="/crearempleado" component={CrearEmpleado} />
          <Route path="/crearcompra" component={CrearCompra} />
          <Route path="/modificarcoche/:id" component={ModificarCoche} />
          <Route path="/modificarcliente/:id" component={ModificarCliente} />
          <Route path="/modificarempleado/:id" component={ModificarEmpleado} />
          <Route path="/modificartienda/:id" component={ModificarTienda} />
          <Route path="/modificarcompra/:id" component={ModificarCompra} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
