import express from 'express';

import {
  VerTienda,
  CrearTienda,
  ModificarTienda,
  BorrarTienda,
} from '../controllers/tiendas.js';

const tiendaRouter = express.Router();

tiendaRouter.get('/tienda/:id', VerTienda);
tiendaRouter.post('/tienda', CrearTienda);
tiendaRouter.put('/tienda/:id', ModificarTienda);
tiendaRouter.delete('/tienda/:id', BorrarTienda);

export default tiendaRouter;
