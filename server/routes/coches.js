import express from 'express';

import {
  VerCoches,
  VerCoche,
  CrearCoche,
  ModificarCoche,
  EliminarCoche,
} from '../controllers/coches.js';

const cocheRouter = express.Router();

cocheRouter.get('/coche', VerCoches);
cocheRouter.get('/coche/:id', VerCoche);
cocheRouter.post('/coche', CrearCoche);
cocheRouter.put('/coche/:id', ModificarCoche);
cocheRouter.delete('/coche/:id', EliminarCoche);

export default cocheRouter;
