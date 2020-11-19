import {
  getTiendaId,
  updateTienda,
  deleteTienda,
  createTienda,
} from '../models/tiendas.js';

// Datos de las tiendas.

export const VerTienda = async (req, res) => {
  getTiendaId(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const CrearTienda = async (req, res) => {
  createTienda(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const ModificarTienda = async (req, res) => {
  updateTienda(req.body, req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const BorrarTienda = async (req, res) => {
  deleteTienda(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
