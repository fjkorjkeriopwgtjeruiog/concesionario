const { REACT_APP_URL } = process.env;

export const getAllEmpleados = async () => {
  const response = await fetch(REACT_APP_URL + '/empleado');
  return await response.json();
};

export const getEmpleado = async (id) => {
  const response = await fetch(REACT_APP_URL + '/empleado/' + id);
  return await response.json();
};

export const getEmpleadosLibres = async () => {
  const response = await fetch(REACT_APP_URL + '/espera');
  return await response.json();
};

export const createEmpleado = async (empleado, response) => {
  await fetch(REACT_APP_URL + '/empleado', {
    method: 'POST',
    body: JSON.stringify(empleado),
    headers: { 'Content-Type': 'application/json' },
  });
};

export const updateEmpleado = async (empleado, id, response) => {
  await fetch(REACT_APP_URL + '/empleado/' + id, {
    method: 'PUT',
    body: JSON.stringify(empleado),
    headers: { 'Content-Type': 'application/json' },
  });
};

export const deleteEmpleado = async (id, response) => {
  await fetch(REACT_APP_URL + '/empleado/' + id, {
    method: 'Delete',
  });
};
