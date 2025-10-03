import { Box } from '@chakra-ui/react';
import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/content/Content';
import '../src/components/content/components/home/style.scss';

const App: React.FC = () => {
  return (
    <Box
      w="100%"
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexDirection="column"
      bg="#f5f5f5"
    >
      <Header />
      <Box
        w="full"
        height="calc(100vh - 85px)"
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Sidebar />
        <Content />
      </Box>
    </Box>
  );
};

export default App;
