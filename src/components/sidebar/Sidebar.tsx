// Sidebar.tsx
import React from 'react';
import { VStack, Box } from '@chakra-ui/react';
import SidebarLink from './uitils/SidebarLink';
import { useSidebarRoutes } from '../hooks/sidebarHooks/useSidebarRoutes';
import type { RoutesInterface } from '../types/sidebar/routeType';

const Sidebar: React.FC = () => {
  const { routes } = useSidebarRoutes();

  return (
    <Box
      as="aside"
      w="100%"
      maxW="300px"
      h="100%"
      overflowY="auto"
      bg="transparent"
      borderRight="1px solid"
      borderColor="borderColor"
      p="12px 8px 40px 4px"
      display="flex"
      flexDirection="column"
      gap="10px"
      position="relative"
    >
      <VStack align="stretch" spacing={2}>
        {routes?.map((route: RoutesInterface) => (
          <SidebarLink
            title={route?.title}
            to={route?.route}
            activeLinkIcon={route?.activeIcon}
            key={route?.id}
            isDropdown={route?.isDropdownRoute}
            dropdownItems={route?.dropdowns ?? []}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
