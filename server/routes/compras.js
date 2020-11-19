import express from 'express';

import {
  VerCompras,
  Crearcompra,
  ModificarCompra,
  EliminarCompra,
} from '../controllers/compras.js';

const compraRouter = express.Router();

compraRouter.get('/compra/:id', VerCompras);
compraRouter.post('/compra', Crearcompra);
compraRouter.put('/compra/:id', ModificarCompra);
compraRouter.delete('/compra/:id', EliminarCompra);

export default compraRouter;
