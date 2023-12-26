import React from 'react';
import Link from 'next/link';

// * Este archivo (not-found.jsx) sera el componente que se mostrara si no se encuentra una url valida
const NotFound = () => {
  return (
    <>
      <section>
        <h1>Error 404</h1>
        <p>Pagina no encontrada</p>
        <Link href="/">ir a principal</Link>
      </section>
    </>
  );
};

export default NotFound;
