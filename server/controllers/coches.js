import {
  getCoches,
  getCocheId,
  updateCoche,
  deleteCoche,
  createCoche,
} from '../models/coches.js';

// Datos de los coches.

export const VerCoches = async (req, res) => {
  getCoches()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const VerCoche = async (req, res) => {
  getCocheId(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const CrearCoche = async (req, res) => {
  createCoche(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const ModificarCoche = async (req, res) => {
  updateCoche(req.body, req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const EliminarCoche = async (req, res) => {
  deleteCoche(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
