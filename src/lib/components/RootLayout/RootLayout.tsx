import { ReactNode } from 'react';
import { Navbar } from '../Navbar';

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default RootLayout;
