'use client';

import { HamburgerIcon, Icon } from '@chakra-ui/icons';
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
  Avatar,
  Spacer,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import { connectLinks, infoLinks } from '../../data/links';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Logo } from '../Logo';
import { FiLogOut } from 'react-icons/fi';
import { removeCookies } from '../../utils/cookies';
import { User } from '../../contexts/UserContext';

interface LeftDrawerProps {
  authStatus: boolean;
  user: User;
}

export const LeftDrawer: React.FC<LeftDrawerProps> = ({ authStatus, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        variant="ghost"
        aria-label="Open drawer"
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
          <DrawerHeader px="4">
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
                display={authStatus ? 'none' : 'flex'}
              >
                Sign in
              </Button>
            </Stack>
          </DrawerHeader>

          <DrawerBody px="4">
            <Stack direction="column" spacing="2" w="100%">
              <Text px="4" color="fg.subtle">
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

              <Text px="4" color="fg.subtle">
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

          <DrawerFooter px="4">
            <Stack direction="column" spacing="4" w="100%">
              <Center w="100%">
                <ButtonGroup variant="tertiary" spacing="0">
                  <ColorModeSwitcher />
                </ButtonGroup>
              </Center>

              <Stack direction="row" display={authStatus ? 'flex' : 'none'}>
                <Center>
                  <Avatar
                    size="sm"
                    name={user.nickname as string}
                    src={user.image as string}
                  />
                </Center>
                <Stack direction="column" bg="bg.subset" spacing="0" w="180px">
                  <Text fontSize="xs" color="fg.muted" noOfLines={1}>
                    {user.nickname}
                  </Text>
                  <Text fontSize="xs" color="fg.subtle" noOfLines={1}>
                    {user.email}
                  </Text>
                </Stack>
                <Spacer />
                <Center>
                  <IconButton
                    as="a"
                    href="/"
                    onClick={() => removeCookies()}
                    variant="ghost"
                    aria-label="Switch color mode"
                    icon={<Icon as={FiLogOut} boxSize="20px" />}
                  />
                </Center>
              </Stack>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LeftDrawer;
