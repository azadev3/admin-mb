import React from 'react';
import { useContentRoutes } from '../hooks/contentHooks/useContentRoutes';
import type { ContentRoutesInterface } from '../types/content/routeType';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const Content: React.FC = () => {
  const { routes } = useContentRoutes();

  return (
    <Box
      as="main"
      w="100%"
      h="100%"
      overflowY="auto"
      bg="gray.50"
      p="16px"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      gap="8px"
    >
      <Routes>
        {routes?.map((route: ContentRoutesInterface) => (
          <Route
            key={route?.id}
            path={route?.route}
            element={route?.component}
          />
        ))}
      </Routes>
    </Box>
  );
};

export default Content;
