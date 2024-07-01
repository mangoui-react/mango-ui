'use client';

import React from 'react';

import Header from './Header';
import Nav from './Nav';

interface RootLayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="flex w-full">
      <Header />
      <Nav />
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"></main> */}
      <main className="w-full grow p-6">
        <div className="relative flex items-center px-6 py-2 min-h-[60px]" />
        {children}
      </main>
    </div>
  );
};

export default Layout;
