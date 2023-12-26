'use client';
import React from 'react';
import Link from 'next/link';
// * useParams: permite acceder a los parametros de la url.
// * La diferencia es que cada postCard puede acceder a params sin esperar a que nos manden/lleguen por props
import { useParams } from 'next/navigation';

//*COMPONENTE CLIENTE DE REACT
export const PostCard = ({ post }) => {
  const params = useParams();
  console.log('useParams', params);

  return (
    <>
      <div className="bg-gray-950 p-10">
        <Link href={`/posts/${post.id}`}>
          <p>
            {post.id}.- {post.title}
          </p>
        </Link>
        <p className="text-slate-300">{post.body}</p>

        <button
          onClick={() => {
            alert(`Post ${post.id}`);
          }}
        >
          boton
        </button>
      </div>
    </>
  );
};
