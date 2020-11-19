import express from 'express';

import {
  TiendaCompleta,
  CompraCompleta,
  Libertad,
  Disponible,
} from '../controllers/otros.js';

const otroRouter = express.Router();

otroRouter.get('/tienda', TiendaCompleta);
otroRouter.get('/compra', CompraCompleta);
otroRouter.get('/espera', Libertad);
otroRouter.get('/dni', Disponible);

export default otroRouter;
