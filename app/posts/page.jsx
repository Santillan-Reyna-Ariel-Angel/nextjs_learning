import React from 'react';
// import { PostCard } from '../../components/PostCard';
// usando el import alias:
import { PostCard } from '@/components/PostCard';
import './Posts.css';

const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  // !La siguiente promesa simula un retraso de la llegada de los datos para que el archivo "loading.jsx" se ejecute
  // * Si no se muestra el contenido de "loading.jsx" recargar  la pagina vaciando el cache
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data;
};

// * COMPONENETE React Server Compoenent (RSC)
const Posts = async () => {
  const posts = await getPosts();
  console.log(posts);

  return (
    <>
      <div className="grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Posts;
