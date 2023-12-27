import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  // * searchParams: sirve para extraer las query's de la url
  const url = new URL(request.url);
  const { searchParams } = url;
  // console.log('searchParams: ', searchParams);
  console.log('get nombre:', searchParams.get('nombre'));
  console.log('get apellido', searchParams.get('apellido'));

  // console.log(params);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await response.json();

  return NextResponse.json(data);
};
