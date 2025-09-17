import React, { useMemo, useState } from 'react';
import { VStack, Text, Image } from '@chakra-ui/react';
import { apiRequest } from '../../../../../../config/apiRequest';
import DeleteModal from '../../../../../../ui/modals/DeleteModal';
import UserManagement from '../../../../uitils/UserManagement';
import { baseImageUrl } from '../../../../../../config/baseURL';
import Highlighter from '../../../../../../shared/Highlighter';
import DataTable from '../../../../../../shared/ui/DataTable';
import type { Column } from '../../../../../../shared/ui/model';
import { useQuery } from '@tanstack/react-query';

interface DataInterface {
  id: number;
  titleAz: string | null;
  titleEn: string | null;
  descriptionAz: string | null;
  descriptionEn: string | null;
  icon: string | null;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'Mission', method: 'get' });
  return Array.isArray(res) ? res : [res];
};

const MissionShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['missionData'],
    queryFn: fetchData,
    retry: 2,
    refetchOnWindowFocus: false,
  });

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    const lower = searchTerm.toLocaleLowerCase('az')
    return data.filter(item =>
      Object.values(item).some(
        val => val && String(val).toLocaleLowerCase('az').includes(lower),
      ),
    );
  }, [searchTerm, data]);

  const columns: Column<DataInterface>[] = [
    { header: 'ID', accessor: 'id' },
    {
      header: 'Header Loqo',
      accessor: 'icon',
      cell: row =>
        row.icon ? (
          <Image
            objectFit="contain"
            src={`${baseImageUrl}${row.icon}`}
            boxSize="100px"
          />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
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
      accessor: 'descriptionAz',
      cell: row =>
        row.descriptionAz ? (
          <Highlighter text={row.descriptionAz} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Açıqlama (EN)',
      accessor: 'descriptionEn',
      cell: row =>
        row.descriptionEn ? (
          <Highlighter text={row.descriptionEn} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
  ];

  if (error) {
    return <Text color="red.500">Xəta baş verdi: {error.message}</Text>;
  }

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
        createButtonLocation="/haqqimizda/missiya-ve-deyerler-values/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal endpoint="Mission" />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item =>
          `/haqqimizda/missiya-ve-deyerler-values/edit/${item.id}`
        }
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={refetch}
      />
    </VStack>
  );
};

export default MissionShow;
