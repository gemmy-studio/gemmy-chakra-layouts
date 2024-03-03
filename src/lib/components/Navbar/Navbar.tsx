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
  useColorModeValue,
  Avatar,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { connectLinks } from '../../data/links';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { LeftDrawer } from '../LeftDrawer';
import { Logo } from '../Logo';
import { Cookies } from 'react-cookie';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const cookies = new Cookies();
  const allCookies = cookies.getAll();
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    setAuthStatus(allCookies.userId);
  }, [allCookies]);

  return (
    <>
      <Box
        as="nav"
        role="navigation"
        bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}
        backdropFilter="auto"
        backdropBlur="2px"
        pos="fixed"
        top="0"
        left="0"
        width="100%"
        zIndex="sticky"
        boxShadow="sm"
      >
        <Container maxW="container.xl" py="4" px={{ base: '4', md: '8' }}>
          <Stack direction={['row']} spacing={{ base: '0', md: '10' }}>
            <Center>
              <LeftDrawer />
              <Link as={NextLink} href="/" w="168px">
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

            <Stack direction="row" spacing="2">
              <ButtonGroup variant="tertiary" spacing={'0'}>
                <IconButton
                  variant="ghost"
                  aria-label="Search database"
                  icon={<SearchIcon w="5" h="5" />}
                />
                <Box display={{ base: 'none', md: 'flex' }}>
                  <ColorModeSwitcher />
                </Box>
              </ButtonGroup>
              {authStatus ? (
                <Center>
                  <Avatar
                    size="sm"
                    name={allCookies.userNickname}
                    src={allCookies.userImage}
                  />
                </Center>
              ) : (
                <Button
                  as={NextLink}
                  href="/login"
                  variant="outline"
                  px={{ base: '2', sm: '4' }}
                >
                  Sign in
                </Button>
              )}
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box pt="72px" />
    </>
  );
};

export default Navbar;
