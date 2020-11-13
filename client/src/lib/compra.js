const { REACT_APP_URL } = process.env;

export const getAllCompras = async () => {
  const response = await fetch(REACT_APP_URL + '/comprareal');
  return await response.json();
};

export const getCompra = async (id) => {
  const response = await fetch(REACT_APP_URL + '/compra/' + id);
  return await response.json();
};

export const createCompra = async (compra, response) => {
  await fetch(REACT_APP_URL + '/compra', {
    method: 'POST',
    body: JSON.stringify(compra),
    headers: { 'Content-Type': 'application/json' },
  });
};

export const updateCompra = async (compra, id, response) => {
  await fetch(REACT_APP_URL + '/compra/' + id, {
    method: 'PUT',
    body: JSON.stringify(compra),
    headers: { 'Content-Type': 'application/json' },
  });
};

export const deleteCompra = async (id, response) => {
  await fetch(REACT_APP_URL + '/compra/' + id, {
    method: 'Delete',
  });
};
