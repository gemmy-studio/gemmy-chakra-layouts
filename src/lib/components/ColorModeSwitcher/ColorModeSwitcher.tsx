'use client';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';

export const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      variant="ghost"
      aria-label="Switch color mode"
      icon={
        colorMode === 'light' ? (
          <MoonIcon w="5" h="5" />
        ) : (
          <SunIcon w="5" h="5" />
        )
      }
    />
  );
};

export default ColorModeSwitcher;
