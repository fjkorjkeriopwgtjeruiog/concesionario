// Fallas con la carpeta.

//const { URL } = process.env;

export const getAllCoches = async () => {
  //alert(URL);
  const response = await fetch('http://localhost:6000/coche');
  return await response.json();
};
