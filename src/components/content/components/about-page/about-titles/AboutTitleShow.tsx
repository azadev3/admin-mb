import React, { useMemo, useState } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '../../../../../config/apiRequest';
import Highlighter from '../../../../../shared/Highlighter';
import DataTable from '../../../../../shared/ui/DataTable';
import type { Column } from '../../../../../shared/ui/model';
import DeleteModal from '../../../../../ui/modals/DeleteModal';
import UserManagement from '../../../uitils/UserManagement';
import type { LanguagePayloadShowData } from '../../../../../auth/api/model';

interface DataInterface {
  id: number;
  descriptions: LanguagePayloadShowData;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'about', method: 'get' });

  const items = Array.isArray(res) ? res : [res];

  return items.map(item => ({
    id: item.id ?? 1,
    descriptions: item.descriptions ?? {},
  }));
};

const AboutTitleShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['about'],
    queryFn: fetchData,
    retry: 2,
    refetchOnWindowFocus: false,
  });

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    const lower = searchTerm.toLocaleLowerCase('az');
    return data.filter(item =>
      Object.values(item.descriptions).some(
        val => val && String(val).toLocaleLowerCase('az').includes(lower),
      ),
    );
  }, [searchTerm, data]);

  if (error) return <Text color="red.500">Xəta baş verdi: {error.message}</Text>;

  const columns: Column<DataInterface>[] = [{ header: 'ID', accessor: 'id' }];

  const allLangs = new Set<string>();
  data.forEach(item =>
    Object.keys(item.descriptions).forEach(lang => allLangs.add(lang)),
  );

  allLangs.forEach(lang => {
    columns.push({
      header: `Açıqlama (${lang.toUpperCase()})`,
      accessor: `descriptions.${lang}`,
      cell: row =>
        row.descriptions[lang] ? (
          <Highlighter text={row.descriptions[lang]} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    });
  });

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/about/create"
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
        onEditLocation={item => `/about/edit/${item.id}`}
      />
    </VStack>
  );
};

export default AboutTitleShow;
