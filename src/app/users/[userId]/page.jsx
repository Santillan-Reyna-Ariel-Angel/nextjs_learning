'use client';
import React from 'react';
// * useParams: permite acceder a los parametros de la url sin esperar a que nos manden/lleguen por props
import { useParams } from 'next/navigation';

const UserPage = () => {
  const params = useParams();
  console.log('paramas', params);
  return (
    <div>
      <button
        className="bg-blue-400 px-3 py-2 rounded-md"
        onClick={() => {
          console.log('works!!!');
        }}
      >
        click
      </button>
    </div>
  );
};

export default UserPage;
