import {
  getClientes,
  getClienteDatos,
  getClienteId,
  updateCliente,
  deleteCliente,
  createCliente,
} from '../models/clientes.js';

export const ListarClientes = async (req, res) => {
  getClienteDatos()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const VerClientes = async (req, res) => {
  getClientes()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const VerCliente = async (req, res) => {
  getClienteId(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const CrearCliente = async (req, res) => {
  createCliente(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const ModificarCliente = async (req, res) => {
  updateCliente(req.body, req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export const BorrarCliente = async (req, res) => {
  deleteCliente(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
