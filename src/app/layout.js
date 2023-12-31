// import { Navbar } from '../components/Navbar';
// usando el import alias:
import { Navbar } from '@/components/Navbar';
import { Roboto } from 'next/font/google'; // De esta manera se importa fuentes de google fonts
import './globals.css';

export const metadata = {
  title: 'PeopleInfo App',
  description: 'Generated by Next.js',
  keywords: 'tienda, online, ecomerce',
};

// Se crea la constante que tendrá las configuraciones de la fuente
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  styles: ['italic', 'regular'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*  className={roboto.className} :  Establecemos una fuente a toda la aplicación*/}
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
