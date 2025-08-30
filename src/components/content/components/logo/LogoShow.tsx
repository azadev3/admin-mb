import React from 'react';
import { VStack, Image, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import UserManagement from '../../uitils/UserManagement';
import DeleteModal from '../../../../ui/modals/DeleteModal';
import { apiRequest } from '../../../../config/apiRequest';
import { baseImageUrl } from '../../../../config/baseURL';
import DataTable from '../../../../shared/ui/DataTable';
import type { Column } from '../../../../shared/ui/model';

interface LogoDataInterface {
  id: number;
  headerLogo: string | null;
  footerLogo: string | null;
  favicon: string | null;
}

const fetchLogo = async (): Promise<LogoDataInterface[]> => {
  const res = await apiRequest({ endpoint: 'Logo', method: 'get' });
  return [
    {
      id: 1,
      headerLogo: res.headerLogo,
      footerLogo: res.footerLogo,
      favicon: res.favicon,
    },
  ];
};

const LogoShow: React.FC = () => {
  const {
    data = [],
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['logo'],
    queryFn: fetchLogo,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const columns: Column<LogoDataInterface>[] = [
    { header: 'ID', accessor: 'id' },
    {
      header: 'Header Loqo',
      accessor: 'headerLogo',
      cell: row =>
        row.headerLogo ? (
          <Image
            objectFit="contain"
            src={`${baseImageUrl}${row.headerLogo}`}
            boxSize="40px"
          />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Footer Loqo',
      accessor: 'footerLogo',
      cell: row =>
        row.footerLogo ? (
          <Image
            objectFit="contain"
            src={`${baseImageUrl}${row.footerLogo}`}
            boxSize="40px"
          />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Favicon',
      accessor: 'favicon',
      cell: row =>
        row.favicon ? (
          <Image
            objectFit="contain"
            src={`${baseImageUrl}${row.favicon}`}
            boxSize="40px"
          />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
  ];

  return (
    <VStack
      w="100%"
      align="stretch"
      spacing={4}
      p={4}
      bg="gray.50"
      borderRadius="md"
    >
      <UserManagement
        createButtonLocation="/logo/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal endpoint="Logo" />
      <DataTable
        columns={columns}
        data={data}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        onSearch={() => {}}
        onEditLocation={item => `/logo/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={refetch}
      />
    </VStack>
  );
};

export default LogoShow;
