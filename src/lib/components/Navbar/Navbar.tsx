'use client';

import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Stack,
  Spacer,
  Center,
  IconButton,
  ButtonGroup,
  Button,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { connectLinks } from '../../data/links';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { LeftDrawer } from '../LeftDrawer';
import { Logo } from '../Logo';
export const Navbar = () => {
  return (
    <>
      <Box
        as="nav"
        role="navigation"
        bg="bg.primary"
        pos="fixed"
        top="0"
        left="0"
        width="100%"
        zIndex="sticky"
        boxShadow="sm"
      >
        <Container maxW="container.xl" py="4" px={{ base: '4', md: '8' }}>
          <Stack direction={['row']} spacing="12">
            <Center>
              <Link as={NextLink} href="/">
                <Logo color="accent.primary" />
              </Link>
            </Center>

            <Stack
              direction="row"
              spacing="8"
              display={{ base: 'none', lg: 'flex' }}
            >
              {connectLinks.map((link, index) => (
                <Center key={index}>
                  <Link
                    as={NextLink}
                    href={link.href}
                    justifyContent="flex-start"
                  >
                    {link.label}
                  </Link>
                </Center>
              ))}
            </Stack>

            <Spacer />

            <Stack direction="row" spacing="4">
              <ButtonGroup variant="tertiary" spacing={'0'}>
                <IconButton
                  variant="ghost"
                  aria-label="Search database"
                  icon={<SearchIcon w="5" h="5" />}
                />
                <Box display={{ base: 'none', lg: 'flex' }}>
                  <ColorModeSwitcher />
                </Box>
                <Box display={{ base: 'flex', lg: 'none' }}>
                  <LeftDrawer />
                </Box>
              </ButtonGroup>
              <Button
                as={NextLink}
                href="/login"
                variant="outline"
                display={{ base: 'none', lg: 'flex' }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box pt="72px" />
    </>
  );
};

export default Navbar;