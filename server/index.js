import express from 'express';
import {
  getEmpleados,
  getEmpleadoId,
  updateEmpleado,
  deleteEmpleado,
  createEmpleado,
} from './data/empleados.js';

import {
  getCoches,
  getCocheId,
  updateCoche,
  deleteCoche,
  createCoche,
} from './data/coches.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers',
  );
  next();
});

// Datos de los empleados.

app.get('/empleado', (req, res) => {
  getEmpleados()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/empleado/:id', (req, res) => {
  getEmpleadoId(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post('/empleado', (req, res) => {
  createEmpleado(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.put('/empleado/:id', (req, res) => {
  updateEmpleado(req.body, req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.delete('/empleado/:id', (req, res) => {
  deleteEmpleado(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

// Datos de los coches.

app.get('/coche', (req, res) => {
  getCoches()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/coche/:id', (req, res) => {
  getCocheId(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post('/coche', (req, res) => {
  createCoche(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.put('/coche/:id', (req, res) => {
  updateCoche(req.body, req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.delete('/coche/:id', (req, res) => {
  deleteCoche(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

// Puerto activado.

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
