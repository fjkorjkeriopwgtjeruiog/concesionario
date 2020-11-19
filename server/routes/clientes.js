import express from 'express';

import {
  ListarClientes,
  VerClientes,
  VerCliente,
  CrearCliente,
  ModificarCliente,
  BorrarCliente,
} from '../controllers/clientes.js';

const clienteRouter = express.Router();

clienteRouter.get('/clientedatos', ListarClientes);
clienteRouter.get('/cliente', VerClientes);
clienteRouter.get('/cliente/:id', VerCliente);
clienteRouter.post('/cliente', CrearCliente);
clienteRouter.put('/cliente/:id', ModificarCliente);
clienteRouter.delete('/cliente/:id', BorrarCliente);

export default clienteRouter;
