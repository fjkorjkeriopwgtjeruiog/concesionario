const { REACT_APP_URL } = process.env;

export const getAllCoches = async () => {
  const response = await fetch(REACT_APP_URL + '/coche');
  return await response.json();
};

export const getCoche = async (id) => {
  const response = await fetch(REACT_APP_URL + '/coche/' + id);
  return await response.json();
};

export const createCoche = async (coche, callback, response) => {
  await fetch(REACT_APP_URL + '/coche', {
    method: 'POST',
    body: JSON.stringify(coche),
    headers: { 'Content-Type': 'application/json' },
  });
  callback(); // Esto asegura que sea ya cuando se introduzcan los datos que seas redirigido.
};

export const updateCoche = async (coche, id, callback, response) => {
  await fetch(REACT_APP_URL + '/coche/' + id, {
    method: 'PUT',
    body: JSON.stringify(coche),
    headers: { 'Content-Type': 'application/json' },
  });
  callback();
};

export const deleteCoche = async (id, response) => {
  await fetch(REACT_APP_URL + '/coche/' + id, {
    method: 'Delete',
  });
};
