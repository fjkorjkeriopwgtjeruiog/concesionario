import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header.js';
import Footer from './Footer.js';

import Inicio from '../pages/Inicio.js';
import ListaCoche from '../pages/ListaCoche.js';
import CrearCoche from '../pages/CrearCoche.js';
import ModificarCoche from '../pages/ModificarCoche.js';
import ErrorPage from '../pages/Error.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/coche" component={ListaCoche} />
          <Route path="/crearcoche" component={CrearCoche} />
          <Route path="/modificarcoche/:id" component={ModificarCoche} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
