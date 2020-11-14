const { REACT_APP_URL } = process.env;

export const getAllTiendas = async () => {
  const response = await fetch(REACT_APP_URL + '/tienda');
  return await response.json();
};

export const getTienda = async (id) => {
  const response = await fetch(REACT_APP_URL + '/tienda/' + id);
  return await response.json();
};

export const createTienda = async (tienda, response) => {
  await fetch(REACT_APP_URL + '/tienda', {
    method: 'POST',
    body: JSON.stringify(tienda),
    headers: { 'Content-Type': 'application/json' },
  });
};

export const updateTienda = async (tienda, id, response) => {
  await fetch(REACT_APP_URL + '/tienda/' + id, {
    method: 'PUT',
    body: JSON.stringify(tienda),
    headers: { 'Content-Type': 'application/json' },
  });
};

export const deleteTienda = async (id, response) => {
  await fetch(REACT_APP_URL + '/tienda/' + id, {
    method: 'Delete',
  });
};
