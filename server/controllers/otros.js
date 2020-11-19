import {
  TiendaReal,
  CompraReal,
  EmpleadoLibre,
  DNILocalizado,
} from '../models/otros.js';

// Funciones especiales.

export const TiendaCompleta = async (req, res) => {
  TiendaReal()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const CompraCompleta = async (req, res) => {
  CompraReal()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const Libertad = async (req, res) => {
  EmpleadoLibre()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const Disponible = async (req, res) => {
  DNILocalizado()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
