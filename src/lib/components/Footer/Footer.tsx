'use client';

import {
  Box,
  BoxProps,
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Link,
  Divider,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import { connectLinks, infoLinks } from '../../data/links';
import { Logo } from '../Logo';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/woojae-lim-35002624a/',
    label: 'LinkedIn',
    icon: <FaLinkedin size="20px" />,
  },
  {
    href: 'https://github.com/gemmy-studio',
    label: 'GitHub',
    icon: <FaGithub size="20px" />,
  },
  {
    href: 'https://twitter.com/woojae0445',
    label: 'Twitter',
    icon: <FaXTwitter size="20px" />,
  },
];

export const Footer = (props: BoxProps) => {
  return (
    <Box as="footer" role="contentinfo" bg="bg.primary" {...props}>
      <Container
        as="footer"
        role="contentinfo"
        maxW="container.xl"
        py="8"
        px={{ base: '4', md: '8' }}
      >
        <Stack spacing="4">
          <Stack
            justify="space-between"
            direction={{ base: 'column', lg: 'row' }}
            align={{ base: 'left', lg: 'top' }}
            spacing="8"
            pb="8"
          >
            <Stack direction="column" spacing="6" w="auto" align="flex-start">
              <Logo />
              <Text fontSize="sm" color={'fg.muted'}>
                개발자를 위한 기록하고 공유하는 공간
              </Text>
            </Stack>
            <Stack direction="row" spacing="4">
              <Stack
                direction="column"
                spacing="2"
                w={{ base: '30%', lg: '44' }}
              >
                <Text color={'fg.subtle'}>connect</Text>
                {connectLinks.map((link, index) => (
                  <Link
                    key={index}
                    as={NextLink}
                    href={link.href}
                    justifyContent="flex-start"
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
              <Stack
                direction="column"
                spacing="2"
                w={{ base: 'auto', lg: '44' }}
              >
                <Text color={'fg.subtle'}>info</Text>
                {infoLinks.map((link, index) => (
                  <Link
                    key={index}
                    as={NextLink}
                    href={link.href}
                    justifyContent="flex-start"
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Stack>
          <Divider />
          <Stack
            justify="space-between"
            direction={['column', 'row']}
            align={['left', 'center']}
          >
            <Text fontSize="sm" color="fg.subtle">
              &copy; {new Date().getFullYear()} Gemmy Studio. All rights
              reserved.
            </Text>
            <ButtonGroup variant="tertiary">
              {socialLinks.map((link) => (
                <IconButton
                  as="a"
                  href={link.href}
                  key={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={link.icon}
                  justifyContent={['flex-start', 'center']}
                >
                  {link.label}
                </IconButton>
              ))}
            </ButtonGroup>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
