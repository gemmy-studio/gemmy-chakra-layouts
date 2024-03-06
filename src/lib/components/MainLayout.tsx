import { ReactNode } from 'react';

import { Navbar } from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
