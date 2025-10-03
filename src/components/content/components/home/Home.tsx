import { Box } from '@chakra-ui/react';
import React from 'react';
import SearchContainer from './components/SearchContainer';
import './style.scss';

const Home: React.FC = () => {
  return (
    <Box
      w="100%"
      bg="gray.100"
      borderRadius="8px"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="borderColor_2"
      h="100%"
      overflowY="auto"
      p="16px 24px"
      display="flex"
      flexDirection="column"
    >
      <SearchContainer />
    </Box>
  );
};

export default Home;
