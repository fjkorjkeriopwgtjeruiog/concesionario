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
import {
  getClientes,
  getClienteId,
  updateCliente,
  deleteCliente,
  createCliente,
} from './data/clientes.js';
import {
  getTiendas,
  getTiendaId,
  updateTienda,
  deleteTienda,
  createTienda,
} from './data/tiendas.js';
import {
  getCompras,
  getCompraId,
  updateCompra,
  deleteCompra,
  createCompra,
} from './data/compra.js';
import {
  TiendaReal,
  CompraReal,
  TiendaRealId,
  CompraRealId,
} from './data/otro.js';

const app = express();
const port = 2000;

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

app.get('/tienda', (req, res) => {
  getTiendas()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

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

app.get('/compra', (req, res) => {
  getCompras()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

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

app.get('/tiendareal', (req, res) => {
  TiendaReal()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/comprareal', (req, res) => {
  CompraReal()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/tiendareal/:id', (req, res) => {
  TiendaRealId(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/comprareal/:id', (req, res) => {
  CompraRealId(req.params.id)
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
