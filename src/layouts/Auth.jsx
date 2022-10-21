import React from 'react';
import Header from '../components/utils/Header';

const Auth = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='pt-24 h-screen'>
        {children}
      </main>
    </div>
  )
}

export default Auth;

