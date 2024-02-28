import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Footer } from './Footer';
import { Navbar } from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex direction="column" flex="1">
      <Navbar />
      {children}
      <Footer />
    </Flex>
  );
};
