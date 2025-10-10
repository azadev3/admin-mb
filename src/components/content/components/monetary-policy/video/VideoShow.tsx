import React, { useMemo, useState } from 'react';
import { VStack, Text, Link } from '@chakra-ui/react';
import UserManagement from '../../../uitils/UserManagement';
import DeleteModal from '../../../../../ui/modals/DeleteModal';
import { apiRequest } from '../../../../../config/apiRequest';
import Highlighter from '../../../../../shared/Highlighter';
import DataTable from '../../../../../shared/ui/DataTable';
import type { Column } from '../../../../../shared/ui/model';
import { useQuery } from '@tanstack/react-query';

interface DataInterface {
  id: number;
  url: string;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'monetarypolicyvideo', method: 'get' });
  if (!res) return [];
  if (res && Array.isArray(res)) return res;

  return [res];
};

const VideoShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['monetarypolicyvideo'],
    queryFn: fetchData,
    retry: 2,
    refetchOnWindowFocus: false,
  });

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    const lower = searchTerm.toLocaleLowerCase('az');

    const containsSearch = (val: any): boolean => {
      if (val === null || val === undefined) return false;
      if (typeof val === 'string' || typeof val === 'number') {
        return String(val).toLocaleLowerCase('az').includes(lower);
      }
      if (typeof val === 'object') {
        return Object.values(val).some(containsSearch);
      }
      return false;
    };

    return data.filter(item => containsSearch(item));
  }, [searchTerm, data]);

  if (error) return <Text color="red.500">Xəta baş verdi: {error.message}</Text>;

  const dynamicColumns: Column<DataInterface>[] = [
    { header: 'ID', accessor: 'id' },
    {
      header: 'İl',
      accessor: 'url',
      cell: row =>
        row.url ? (
          <Link isExternal color="blue.500" href={row.url}>
            <Highlighter text={row.url?.toString()} highlight={searchTerm?.toString()} />
          </Link>
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
  ];

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/pul-siyaseti/video/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal endpoint="monetarypolicyvideo" />
      <DataTable
        columns={dynamicColumns}
        data={filteredData}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/pul-siyaseti/video/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={refetch}
      />
    </VStack>
  );
};

export default VideoShow;
