'use client';

import React, { useState } from 'react';

const User = () => {
  const [userData, setUserData] = useState({
    name: 'Ariel',
    lastName: 'Santillan',
  });

  return (
    <>
      <p>{`${userData.name} ${userData.lastName}`}</p>
    </>
  );
};

export default User;
