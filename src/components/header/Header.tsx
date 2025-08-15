import React from 'react';
import Logo from './uitils/Logo';
import RightProfile from './uitils/RightProfile';
import { Box } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Box
      w="full"
      bg="#f5f5f5"
      p="16px 24px"
      borderBottomWidth="1px"
      borderBottomColor="borderColor"
      borderBottomStyle="solid"
    >
      <Box
        w="full"
        backgroundColor="transparent"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo />
        <RightProfile />
      </Box>
    </Box>
  );
};

export default Header;
