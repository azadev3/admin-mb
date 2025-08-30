import React, { useMemo, useState } from 'react';
import { VStack, Image, Text } from '@chakra-ui/react';
import UserManagement from '../../uitils/UserManagement';
import DeleteModal from '../../../../ui/modals/DeleteModal';
import { apiRequest } from '../../../../config/apiRequest';
import { baseImageUrl } from '../../../../config/baseURL';
import Highlighter from '../../../../shared/Highlighter';
import DataTable from '../../../../shared/ui/DataTable';
import type { Column } from '../../../../shared/ui/model';
import { useQuery } from '@tanstack/react-query';

interface DataInterface {
  id: number;
  image: string | null;
  titleAz: string | null;
  titleEn: string | null;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'Hero', method: 'get' });
  return [
    {
      id: res.id ?? 1,
      image: res.image,
      titleAz: res.titleAz,
      titleEn: res.titleEn,
    },
  ];
};

const HeroShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['hero'],
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

  if (error)
    return <Text color="red.500">Xəta baş verdi: {error.message}</Text>;

  const columns: Column<DataInterface>[] = [
    { header: 'ID', accessor: 'id' },
    {
      header: 'Şəkil',
      accessor: 'image',
      cell: row =>
        row.image ? (
          <Image src={`${baseImageUrl}${row.image}`} boxSize={12} />
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
        createButtonLocation="/hero/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/hero/edit/${item.id}`}
      />
    </VStack>
  );
};

export default HeroShow;
