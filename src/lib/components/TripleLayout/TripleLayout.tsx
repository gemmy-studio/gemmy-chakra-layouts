import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Divider,
  Flex,
  IconButton,
  Spacer,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { SingleLayout } from '../SingleLayout';

interface TripleLayoutProps {
  left?: ReactNode;
  main: ReactNode;
  right?: ReactNode;
}

const SIDE_PANEL_WIDTH = '240px';
const SIDE_PANEL_TRANSITION = 'left 0.5s';
const MAIN_PANEL_WIDTH = 'calc(50vw - 384px)';

export const TripleLayout = ({ left, main, right }: TripleLayoutProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const color = useColorModeValue('blackAlpha.500', 'whiteAlpha.500');

  return (
    <Flex direction="row" w="100%">
      <IconButton
        onClick={onToggle}
        pos="fixed"
        top="50%"
        left={isOpen ? SIDE_PANEL_WIDTH : '0'}
        transition={SIDE_PANEL_TRANSITION}
        zIndex="overlay"
        display={{ base: 'block', lg: 'none' }}
        variant="ghost"
        aria-label="Toggle left box"
        icon={
          isOpen ? (
            <ArrowLeftIcon w="5" h="5" color={color} />
          ) : (
            <ArrowRightIcon w="5" h="5" color={color} />
          )
        }
      />
      <Box w={{ base: '0', lg: SIDE_PANEL_WIDTH, xl: MAIN_PANEL_WIDTH }}>
        <Box
          pos="fixed"
          left={{ base: isOpen ? '0' : `-${SIDE_PANEL_WIDTH}`, lg: '0' }}
          transition={SIDE_PANEL_TRANSITION}
          w={{ base: SIDE_PANEL_WIDTH, xl: MAIN_PANEL_WIDTH }}
          h="calc(100vh - 64px)"
          pr="4"
          overflowY="auto"
          bg="accent.primary"
          zIndex="banner"
        >
          {left}
        </Box>
      </Box>

      <Spacer />

      <Box w={{ base: '100%', md: '768px' }}>
        <SingleLayout>
          <Center>
            <Box
              w={{ base: '100%', md: '708px' }}
              pt={{ base: '0', md: '6' }}
              pb="8"
            >
              {main}
            </Box>
          </Center>
          <Divider />
        </SingleLayout>
      </Box>

      <Spacer />

      <Box w={MAIN_PANEL_WIDTH} display={{ base: 'none', xl: 'block' }}>
        <Box
          pos="fixed"
          right="0"
          w={MAIN_PANEL_WIDTH}
          h="calc(100vh - 64px)"
          pl="4"
          overflowY="auto"
          bg="accent.primary"
          zIndex="banner"
        >
          {right}
        </Box>
      </Box>
    </Flex>
  );
};

export default TripleLayout;
