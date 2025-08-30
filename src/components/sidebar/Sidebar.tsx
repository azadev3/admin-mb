// Sidebar.tsx
import React from 'react';
import { VStack, Box } from '@chakra-ui/react';
import SidebarLink from './uitils/SidebarLink';
import type { RoutesInterface } from '../types/sidebar/routeType';
import { SIDEBAR_ROUTES } from '../../hooks/sidebarHooks/SidebarRoutes';

const Sidebar: React.FC = () => {
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
      <VStack align="stretch" spacing={1}>
        {SIDEBAR_ROUTES?.map((route: RoutesInterface) => (
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
