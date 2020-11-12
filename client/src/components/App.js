import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header.js';
import Footer from './Footer.js';

import Inicio from '../pages/Inicio.js';
import ListaCoche from '../pages/ListaCoche.js';
import ListaCliente from '../pages/ListaCliente.js';
import CrearCoche from '../pages/CrearCoche.js';
import CrearCliente from '../pages/CrearCliente.js';
import ModificarCoche from '../pages/ModificarCoche.js';
import ModificarCliente from '../pages/ModificarCliente.js';
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
          <Route path="/crearcoche" component={CrearCoche} />
          <Route path="/crearcliente" component={CrearCliente} />
          <Route path="/modificarcoche/:id" component={ModificarCoche} />
          <Route path="/modificarcliente/:id" component={ModificarCliente} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
