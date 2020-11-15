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

export const createCliente = async (cliente, callback, response) => {
  await fetch(REACT_APP_URL + '/cliente', {
    method: 'POST',
    body: JSON.stringify(cliente),
    headers: { 'Content-Type': 'application/json' },
  });
  callback();
};

export const updateCliente = async (cliente, id, callback, response) => {
  await fetch(REACT_APP_URL + '/cliente/' + id, {
    method: 'PUT',
    body: JSON.stringify(cliente),
    headers: { 'Content-Type': 'application/json' },
  });
  callback();
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
