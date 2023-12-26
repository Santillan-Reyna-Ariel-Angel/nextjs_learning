'use client';
import React from 'react';
// useRouter: nos permite redirigirnos a otra pagina pero con la opcion de ejecutar codigo antes de la redireccion
import { useRouter } from 'next/navigation';

// ! NO S EPUEDE USAR metadata con "use client"
// export const metadata = {
//   title: 'PeopleInfo App - sobre nosotros',
// };

const AboutPage = () => {
  const router = useRouter();
  return (
    <section>
      <h1>Quienes somos nosotros</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illum
        impedit aperiam veritatis, ad quia aliquam. Perferendis rem aspernatur
        laudantium id perspiciatis itaque porro, culpa veritatis aliquid modi
        voluptas, illo dolor quia labore. Beatae est quaerat autem esse saepe
        iusto ipsam, ea fuga pariatur impedit nisi cum similique eum doloribus
        cupiditate. Quo accusamus doloribus mollitia nobis, quam, iste, nam
        optio illo atque saepe sapiente ipsam facere amet aperiam nihil totam
        ullam culpa natus placeat odio recusandae laudantium? Sapiente quo quasi
        omnis voluptates praesentium deserunt minima officia facere eveniet
        voluptatibus. Velit eligendi at natus quia. Nihil perferendis ratione
        error unde incidunt.
      </p>

      <button
        className="bg-blue-400 px-3 py-2 rounded-md"
        onClick={() => {
          alert('Codigo ejecutado antes del router.push()');
          router.push('/');
        }}
      >
        Home
      </button>
    </section>
  );
};

export default AboutPage;
