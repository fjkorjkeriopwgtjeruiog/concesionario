import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import clienteRouter from './routes/clientes.js';
import cocheRouter from './routes/coches.js';
import compraRouter from './routes/compras.js';
import empleadoRouter from './routes/empleados.js';
import otroRouter from './routes/otros.js';
import tiendaRouter from './routes/tiendas.js';

const app = express();
const PORT = process.env.PORT || 5001;

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers',
  );
  next();
});

app.use(clienteRouter);
app.use(cocheRouter);
app.use(compraRouter);
app.use(empleadoRouter);
app.use(otroRouter);
app.use(tiendaRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
