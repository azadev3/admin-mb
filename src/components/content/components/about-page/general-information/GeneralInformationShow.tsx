import React, { useMemo, useState } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { apiRequest } from '../../../../../config/apiRequest';
import UserManagement from '../../../uitils/UserManagement';
import Highlighter from '../../../../../shared/Highlighter';
import DataTable from '../../../../../shared/ui/DataTable';
import type { Column } from '../../../../../shared/ui/model';
import { useQuery } from '@tanstack/react-query';

interface DataInterface {
  id: number;
  titleAz: string | null;
  titleEn: string | null;
  descriptionAz: string | null;
  descriptionEn: string | null;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'About', method: 'get' });
  return Array.isArray(res) ? res : [res];
};

const GeneralInformationShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery<DataInterface[]>({
    queryKey: ['aboutInfo'],
    queryFn: fetchData,
  });

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    const lower = searchTerm.toLocaleLowerCase('az');
    return data.filter(item =>
      Object.values(item).some(
        val => val && String(val).toLocaleLowerCase('az').includes(lower),
      ),
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
        createButtonLocation="/haqqimizda/umumi-melumat/create"
        onRefresh={refetch}
        dataLoading={isLoading}
      />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={isLoading}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        refetch={refetch}
      />
    </VStack>
  );
};

export default GeneralInformationShow;
