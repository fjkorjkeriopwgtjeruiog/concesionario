import express from 'express';
import dotenv from 'dotenv';

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
import {
  getClientes,
  getClienteDatos,
  getClienteId,
  updateCliente,
  deleteCliente,
  createCliente,
} from './data/clientes.js';
import {
  getTiendaId,
  updateTienda,
  deleteTienda,
  createTienda,
} from './data/tiendas.js';
import {
  getCompraId,
  updateCompra,
  deleteCompra,
  createCompra,
} from './data/compras.js';
import {
  TiendaReal,
  CompraReal,
  EmpleadoLibre,
  DNILocalizado,
} from './data/otros.js';

const app = express();
const port = 5001;

dotenv.config();

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

// Datos de los clientes.

app.get('/clientedatos', (req, res) => {
  getClienteDatos()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/cliente', (req, res) => {
  getClientes()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/cliente/:id', (req, res) => {
  getClienteId(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post('/cliente', (req, res) => {
  createCliente(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.put('/cliente/:id', (req, res) => {
  updateCliente(req.body, req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.delete('/cliente/:id', (req, res) => {
  deleteCliente(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

// Datos de las tiendas.

app.get('/tienda/:id', (req, res) => {
  getTiendaId(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post('/tienda', (req, res) => {
  createTienda(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.put('/tienda/:id', (req, res) => {
  updateTienda(req.body, req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.delete('/tienda/:id', (req, res) => {
  deleteTienda(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

// Datos de las compras.

app.get('/compra/:id', (req, res) => {
  getCompraId(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post('/compra', (req, res) => {
  createCompra(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.put('/compra/:id', (req, res) => {
  updateCompra(req.body, req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.delete('/compra/:id', (req, res) => {
  deleteCompra(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

// Funciones especiales.

app.get('/tienda', (req, res) => {
  TiendaReal()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/compra', (req, res) => {
  CompraReal()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/espera', (req, res) => {
  EmpleadoLibre()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/dni', (req, res) => {
  DNILocalizado()
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
