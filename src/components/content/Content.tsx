import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import type { ContentRoutesInterface } from '../types/content/routeType';
import { CONTENT_ROUTES } from '../../hooks/contentHooks/ContentRoutes';
import SearchContainer from './components/home/components/SearchContainer';
import "../../components/content/components/home/style.scss"

const Content: React.FC = () => {
  const location = useLocation();

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
      <Suspense fallback={<div>Loading...</div>}>
        {location.pathname !== '/' && <SearchContainer />}
        <Routes>
          {CONTENT_ROUTES?.map((route: ContentRoutesInterface) => (
            <Route key={route.id} path={route.route} element={route.component} />
          ))}
        </Routes>
      </Suspense>
    </Box>
  );
};

export default Content;
