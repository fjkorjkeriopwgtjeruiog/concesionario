const { REACT_APP_URL } = process.env;

export const getAllCoches = async () => {
  const response = await fetch(REACT_APP_URL + '/coche');
  return await response.json();
};
