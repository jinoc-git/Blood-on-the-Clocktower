'use client';

import React, { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { NoteProvider } from '../providers/NoteProvider';

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <NoteProvider>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 1000,
          removeDelay: 1000,
        }}
      />
      {children}
    </NoteProvider>
  );
};

export default Provider;
