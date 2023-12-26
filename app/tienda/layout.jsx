import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'PeopleInfo App - store',
};

const LayoutTienda = ({ children }) => {
  return (
    <>
      <nav>
        <h3>Layout Tienda</h3>
        <ul>
          <li>
            <Link href="/tienda/categorias">Categorias</Link>
          </li>

          <li>
            <Link href="/tienda/categorias/computadoras">Computadoras</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default LayoutTienda;
