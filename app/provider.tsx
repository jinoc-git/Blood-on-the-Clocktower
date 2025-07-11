'use client';

import React, { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 1000,
          removeDelay: 1000,
        }}
      />
      {children}
    </>
  );
};

export default Provider;
