import {
  getCompraId,
  updateCompra,
  deleteCompra,
  createCompra,
} from '../models/compras.js';

// Datos de las compras.

export const VerCompras = async (req, res) => {
  getCompraId(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const Crearcompra = async (req, res) => {
  createCompra(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const ModificarCompra = async (req, res) => {
  updateCompra(req.body, req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const EliminarCompra = async (req, res) => {
  deleteCompra(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
