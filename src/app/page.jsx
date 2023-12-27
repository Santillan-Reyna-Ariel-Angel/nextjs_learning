import React from 'react';
// ! RECOMENDACIÓN: Tratar de usar 'use client' solo en la carpeta de components, esto para que el metadata de los archivos de la carpeta app puedan funcionar sin problemas
// import User from './../components/User';
// usando el import alias:
import User from '@/components/User';

export const metadata = {
  title: 'PeopleInfo App - HomePage',
};

const HomePage = () => {
  return (
    <>
      <div>Pagina principal</div>
      <User />
    </>
  );
};

export default HomePage;
