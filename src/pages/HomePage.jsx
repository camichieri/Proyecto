import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [message, setMessage] = useState('Welcome to WhatsApp Clone');

  useEffect(() => {
    setTimeout(() => {
      setMessage('Welcome to the React App');
    }, 2000);
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default HomePage;