'use client';
import React from 'react';
import Link from 'next/link';

//*COMPONENTE CLIENTE DE REACT
export const PostCard = ({ post }) => {
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
