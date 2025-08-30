import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RxCaretDown } from 'react-icons/rx';
import { Box, Flex, Text, Collapse, Icon } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setSearchModalVisible } from '../../../store/features/uiSlice';

export type DropdownItems = {
  id: number;
  title: string;
  to?: string;
  isDropdown?: boolean;
  dropdownItems?: DropdownItems[];
};

type Props = {
  title: string;
  to: string;
  activeLinkIcon?: React.ReactNode;
  isDropdown?: boolean;
  dropdownItems?: DropdownItems[];
};

const SidebarLink: React.FC<Props> = ({
  title,
  to,
  activeLinkIcon,
  isDropdown,
  dropdownItems,
}) => {
  const [menu, setMenu] = React.useState(false);
  const [openMenus, setOpenMenus] = React.useState<{ [key: number]: boolean }>(
    {},
  );
  const handleMenu = () => setMenu(prev => !prev);
  const toggleSubMenu = (id: number) =>
    setOpenMenus(prev => ({ ...prev, [id]: !prev[id] }));

  const dispatch = useDispatch();
  const location = useLocation();

  React.useEffect(() => {
    const isAnyLinkActive = dropdownItems?.some(
      item => location.pathname === item.to,
    );
    if (isAnyLinkActive) setMenu(true);
  }, [location, dropdownItems]);

  const renderDropdownItems = (items?: DropdownItems[]) => {
    if (!items) return null;

    const sortedItems = [...items].sort((a, b) => {
      if (a.isDropdown && !b.isDropdown) return -1;
      if (!a.isDropdown && b.isDropdown) return 1;
      return 0;
    });

    return sortedItems.map(item => {
      if (item.isDropdown && item.dropdownItems?.length) {
        return (
          <Box key={item.id}>
            <Flex
              align="center"
              justify="space-between"
              px="16px"
              py="8px"
              cursor="pointer"
              bg="gray.100"
              _hover={{ bg: 'gray.200' }}
              onClick={() => toggleSubMenu(item.id)}
            >
              <Text fontSize="14px" fontWeight={500} color="#303030">
                {item.title}
              </Text>
              <Icon
                as={RxCaretDown}
                fontSize="18px"
                color="#303030"
                transform={
                  openMenus[item.id] ? 'rotate(0deg)' : 'rotate(90deg)'
                }
                transition="0.1s ease-in-out"
              />
            </Flex>
            <Collapse in={openMenus[item.id]} animateOpacity>
              <Box pl={4}>{renderDropdownItems(item.dropdownItems)}</Box>
            </Collapse>
          </Box>
        );
      }

      return (
        <NavLink
          key={item.id}
          to={item.to || '#'}
          onClick={() => dispatch(setSearchModalVisible(false))}
        >
          {({ isActive }) => (
            <Box
              px="18px"
              py="10px"
              borderLeft={
                isActive ? '8px solid #094160' : '3px solid transparent'
              }
              bg={isActive ? 'rgb(226,226,226)' : 'rgb(244,244,244)'}
              _hover={{ bg: 'rgb(226,226,226)' }}
            >
              <Text fontSize="14px" fontWeight={500} color="#303030">
                {item.title}
              </Text>
            </Box>
          )}
        </NavLink>
      );
    });
  };

  return (
    <Box>
      {isDropdown ? (
        <Flex
          align="center"
          justify="space-between"
          px="18px"
          py="8px"
          cursor="pointer"
          bg="gray.50"
          border="1px solid #3030301e"
          _hover={{ bg: 'gray.100' }}
          onClick={handleMenu}
        >
          <Flex align="center" gap="16px">
            {activeLinkIcon && <Box>{activeLinkIcon}</Box>}
            <Text fontWeight={500} fontSize="14px" color="#000">
              {title}
            </Text>
          </Flex>
          <Icon
            as={RxCaretDown}
            fontSize="18px"
            color="#000"
            transform={menu ? 'rotate(0deg)' : 'rotate(90deg)'}
            transition="0.1s ease-in-out"
          />
        </Flex>
      ) : (
        <NavLink to={to} onClick={() => dispatch(setSearchModalVisible(false))}>
          {({ isActive }) => (
            <Flex
              align="center"
              gap="16px"
              px="18px"
              py="8px"
              bg={isActive ? 'rgb(226,226,226)' : 'gray.50'}
              borderLeft={
                isActive ? '8px solid #094160' : '3px solid transparent'
              }
              _hover={{ bg: 'gray.100' }}
            >
              {activeLinkIcon && <Box>{activeLinkIcon}</Box>}
              <Text fontWeight={500} fontSize="14px" color="#303030">
                {title}
              </Text>
            </Flex>
          )}
        </NavLink>
      )}

      <Collapse in={menu} animateOpacity>
        <Box pl={4}>{renderDropdownItems(dropdownItems)}</Box>
      </Collapse>
    </Box>
  );
};

export default SidebarLink;
