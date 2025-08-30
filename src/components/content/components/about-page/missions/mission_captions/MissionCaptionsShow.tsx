import React, { useMemo, useState } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { apiRequest } from '../../../../../../config/apiRequest';
import UserManagement from '../../../../uitils/UserManagement';
import Highlighter from '../../../../../../shared/Highlighter';
import DataTable from '../../../../../../shared/ui/DataTable';
import type { Column } from '../../../../../../shared/ui/model';
import { useQuery } from '@tanstack/react-query';

interface DataInterface {
  id: number;
  titleAz: string | null;
  titleEn: string | null;
  textAz: string | null;
  textEn: string | null;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'MissionCaption', method: 'get' });
  return Array.isArray(res) ? res : [res];
};

const MissionCaptionsShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['missionCaptionsData'],
    queryFn: fetchData,
    retry: 2,
    refetchOnWindowFocus: false,
  });

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    const lower = searchTerm.toLocaleLowerCase('az')
    return data.filter(item =>
      Object.values(item).some(val => val && String(val).toLocaleLowerCase('az').includes(lower)),
    );
  }, [searchTerm, data]);

  const columns: Column<DataInterface>[] = [
    {
      header: 'Başlıq (AZ)',
      accessor: 'titleAz',
      cell: row =>
        row.titleAz ? (
          <Highlighter text={row.titleAz} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Başlıq (EN)',
      accessor: 'titleEn',
      cell: row =>
        row.titleEn ? (
          <Highlighter text={row.titleEn} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Açıqlama (AZ)',
      accessor: 'textAz',
      cell: row =>
        row.textAz ? (
          <Highlighter text={row.textAz} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Açıqlama (EN)',
      accessor: 'textEn',
      cell: row =>
        row.textEn ? (
          <Highlighter text={row.textEn} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
  ];

  if (error) {
    return <Text color="red.500">Xəta baş verdi: {error.message}</Text>;
  }

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/haqqimizda/missiya-ve-deyerler/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={(val: any) => setSearchTerm(val)}
        refetch={refetch}
      />
    </VStack>
  );
};

export default MissionCaptionsShow;
