'use client';

import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Link,
  IconButton,
  Stack,
  ButtonGroup,
  Center,
  Divider,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import { connectLinks, infoLinks } from '../../data/links';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Logo } from '../Logo';

export const LeftDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        variant="ghost"
        aria-label="Open drawer"
        display={{ base: 'flex', lg: 'none' }}
        icon={<HamburgerIcon w="5" h="5" />}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        blockScrollOnMount={false}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Stack direction="column" spacing="4" w="100%">
              <Link as={NextLink} href="/">
                <Logo color="accent.primary" />
              </Link>
              <Button
                as={NextLink}
                href="/login"
                variant="outline"
                onClick={onClose}
                w="100%"
              >
                Sign in
              </Button>
            </Stack>
          </DrawerHeader>

          <DrawerBody>
            <Stack direction="column" spacing="2" w="100%">
              <Text px="4" color="fg.muted">
                connect
              </Text>
              <Stack direction="column" spacing="1" w="100%">
                {connectLinks.map((link, index) => (
                  <Button
                    key={index}
                    as={NextLink}
                    href={link.href}
                    variant="ghost"
                    w="100%"
                    justifyContent="flex-start"
                  >
                    {link.label}
                  </Button>
                ))}
              </Stack>

              <Divider my="1" />

              <Text px="4" color="fg.muted">
                info
              </Text>
              <Stack direction="column" spacing="1" w="100%">
                {infoLinks.map((link, index) => (
                  <Button
                    key={index}
                    as={NextLink}
                    href={link.href}
                    variant="ghost"
                    w="100%"
                    justifyContent="flex-start"
                  >
                    {link.label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Center w="100%">
              <ButtonGroup variant="tertiary" spacing={'0'}>
                <ColorModeSwitcher />
              </ButtonGroup>
            </Center>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LeftDrawer;
