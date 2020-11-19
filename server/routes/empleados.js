import express from 'express';

import {
  VerEmpleados,
  VerEmpleado,
  CrearEmpleado,
  ModificarEmpleado,
  EliminarEmpleado,
} from '../controllers/empleados.js';

const empleadoRouter = express.Router();

empleadoRouter.get('/empleado', VerEmpleados);
empleadoRouter.get('/empleado/:id', VerEmpleado);
empleadoRouter.post('/empleado', CrearEmpleado);
empleadoRouter.put('/empleado/:id', ModificarEmpleado);
empleadoRouter.delete('/empleado/:id', EliminarEmpleado);

export default empleadoRouter;
