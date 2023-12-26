import React from 'react';
import Link from 'next/link';
import './Navbar.css';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar py-5">
        <Link href="/">
          <h1 className="nacbar">Nextjs Curso</h1>
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/tienda">Tienda</Link>
          </li>

          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
