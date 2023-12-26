import React, { Suspense } from 'react';
// import Posts from './../page';
// usando el import alias:
import Posts from '@/app/posts/page';

const loadingPost = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  return data;
};

const Post = async ({ params }) => {
  // ! params es un obj que contine los parametros de la url.
  // * En este caso postId es el nombre del paramtro de la url (Por que la carpeta se llama [postId])
  const post = await loadingPost(params.postId);

  console.log(post);

  return (
    <>
      <h4>
        {post.id}.- {post.title}
      </h4>
      <p>{post.body}</p>
      <hr />

      <h3>Otras publicaciones:</h3>
      {/* <Suspense> : Permite que las demas partes de la pagina se cargen normalmente. Ya que lo que contienne puede demorar  */}
      <Suspense fallback="Cargando otras publicaciones...">
        {/* Tambien: fallback={<div>Cargando otras publicaciones...</div>}" */}
        <Posts />
      </Suspense>
    </>
  );
};

export default Post;
