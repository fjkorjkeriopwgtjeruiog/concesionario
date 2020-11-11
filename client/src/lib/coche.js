const { REACT_APP_URL } = process.env;

export const getAllCoches = async () => {
  const response = await fetch(REACT_APP_URL + '/coche');
  return await response.json();
};

export const createNewCoche = async (coche, response) => {
  await fetch(REACT_APP_URL + '/coche', {
    method: 'POST',
    body: JSON.stringify(coche),
    headers: { 'Content-Type': 'application/json' },
  });
};

export const deleteCoche = async (id, response) => {
  await fetch(REACT_APP_URL + '/coche/' + id, {
    method: 'Delete',
  });
};
