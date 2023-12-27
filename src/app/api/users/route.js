import { NextResponse } from 'next/server';

// A continuación se crean los métodos http (route handlers en doc de next.js)
export const GET = async () => {
  // * Aquí dentro podemos crear cualquier lógica (conectar a otra bd, etc)
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return NextResponse.json(data);
};

export const POST = () => {
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
