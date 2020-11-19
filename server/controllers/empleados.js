import {
  getEmpleados,
  getEmpleadoId,
  updateEmpleado,
  deleteEmpleado,
  createEmpleado,
} from '../models/empleados.js';

// Datos de los empleados.

export const VerEmpleados = async (req, res) => {
  getEmpleados()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const VerEmpleado = async (req, res) => {
  getEmpleadoId(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const CrearEmpleado = async (req, res) => {
  createEmpleado(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const ModificarEmpleado = async (req, res) => {
  updateEmpleado(req.body, req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const EliminarEmpleado = async (req, res) => {
  deleteEmpleado(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
