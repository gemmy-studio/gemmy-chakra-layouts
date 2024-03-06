import { ReactNode } from 'react';
import { Footer } from '../Footer';

interface SingleLayoutProps {
  children: ReactNode;
}

export const SingleLayout = ({ children }: SingleLayoutProps) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default SingleLayout;
