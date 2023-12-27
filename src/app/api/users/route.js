import { NextResponse } from 'next/server';

//* Prueba variables de entorno:
console.log('process.env.TOKEN: ', process.env.TOKEN);
console.log('process.env.SECRET_KEY: ', process.env.SECRET_KEY);

// A continuación se crean los métodos http (route handlers en doc de next.js)
export const GET = async () => {
  //* Prueba variables de entorno:
  console.log('TOKEN: ', process.env.TOKEN);

  // * Aquí dentro podemos crear cualquier lógica (conectar a otra bd, etc)
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return NextResponse.json(data);
};

export const POST = async (request) => {
  // * Este es el body que llega de la petición http(post) en Nest.js:
  const response = await request.json();
  // console.log(response);
  const { nombre, apellido } = response;
  console.log('Nombre completo: ', nombre, apellido);

  return NextResponse.json({
    message: 'Creando datos!',
  });
};

export const PUT = () => {
  return NextResponse.json({ message: 'Actualizando datos!' });
};

export const DELETE = () => {
  return NextResponse.json({ message: 'Eliminando datos!!!' });
};
