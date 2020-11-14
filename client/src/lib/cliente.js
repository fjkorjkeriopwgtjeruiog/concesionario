const { REACT_APP_URL } = process.env;

export const getAllClientela = async () => {
  const response = await fetch(REACT_APP_URL + '/clientedatos');
  return await response.json();
};

export const getAllClientes = async () => {
  const response = await fetch(REACT_APP_URL + '/cliente');
  return await response.json();
};

export const getCliente = async (id) => {
  const response = await fetch(REACT_APP_URL + '/cliente/' + id);
  return await response.json();
};

export const createCliente = async (coche, response) => {
  await fetch(REACT_APP_URL + '/cliente', {
    method: 'POST',
    body: JSON.stringify(coche),
    headers: { 'Content-Type': 'application/json' },
  });
};

export const updateCliente = async (coche, id, response) => {
  await fetch(REACT_APP_URL + '/cliente/' + id, {
    method: 'PUT',
    body: JSON.stringify(coche),
    headers: { 'Content-Type': 'application/json' },
  });
};

export const deleteCliente = async (id, response) => {
  await fetch(REACT_APP_URL + '/cliente/' + id, {
    method: 'Delete',
  });
};

export const localizaDNI = async () => {
  const response = await fetch(REACT_APP_URL + '/dni');
  return await response.json();
};
