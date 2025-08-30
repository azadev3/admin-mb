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
  titleAz: string | null;
  titleEn: string | null;
  subTitleAz: string | null;
  subTitleEn: string | null;
  icon: string | null;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'MacroDocument', method: 'get' });
  return res;
};

const MacroDocumentShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['macroDocuments'],
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
      header: 'Icon',
      accessor: 'icon',
      cell: row =>
        row.icon ? (
          <Image src={`${baseImageUrl}${row.icon}`} boxSize={12} />
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
      header: 'Mətn (AZ)',
      accessor: 'subTitleAz',
      cell: row =>
        row.subTitleAz ? (
          <Highlighter text={row.subTitleAz} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Mətn (EN)',
      accessor: 'subTitleEn',
      cell: row =>
        row.subTitleEn ? (
          <Highlighter text={row.subTitleEn} highlight={searchTerm} />
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
        createButtonLocation="/makroiqtisadi-senedler-ve-hesabatlar/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal endpoint="MacroDocument" />
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
          `/makroiqtisadi-senedler-ve-hesabatlar/edit/${item.id}`
        }
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={refetch}
      />
    </VStack>
  );
};

export default MacroDocumentShow;
