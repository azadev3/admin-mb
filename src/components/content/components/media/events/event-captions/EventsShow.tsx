import React, { useMemo, useState } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import type { LanguagePayloadShowData } from '../../../../../../auth/api/model';
import { apiRequest } from '../../../../../../config/apiRequest';
import Highlighter from '../../../../../../shared/Highlighter';
import DataTable from '../../../../../../shared/ui/DataTable';
import type { Column } from '../../../../../../shared/ui/model';
import DeleteModal from '../../../../../../ui/modals/DeleteModal';
import UserManagement from '../../../../uitils/UserManagement';

interface DataInterface {
  id: number;
  titles: LanguagePayloadShowData;
  descriptions: LanguagePayloadShowData;
  slugs: LanguagePayloadShowData;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'event', method: 'get' });
  return res;
};

const EventsShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['events'],
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
    { header: 'Tarix', accessor: 'date' },
  ];

  const allLangs = new Set<string>();
  data.forEach(item => {
    Object.keys(item.titles).forEach(lang => allLangs.add(lang));
    Object.keys(item.slugs).forEach(lang => allLangs.add(lang));
    Object.keys(item.descriptions).forEach(lang => allLangs.add(lang));
    if (item.titles) Object.keys(item.titles).forEach(lang => allLangs.add(lang));
    if (item.descriptions)
      Object.keys(item.descriptions).forEach(lang => allLangs.add(lang));
    if (item.slugs) Object.keys(item.slugs).forEach(lang => allLangs.add(lang));
  });

  allLangs.forEach(lang => {
    dynamicColumns.push({
      header: `Başlıq (${lang.toUpperCase()})`,
      accessor: `titles.${lang}`,
      cell: row =>
        row.titles[lang] ? (
          <Highlighter text={row.titles[lang]} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    });
    dynamicColumns.push({
      header: `Açıqlama (${lang.toUpperCase()})`,
      accessor: `descriptions.${lang}`,
      cell: row =>
        row.descriptions[lang] ? (
          <Highlighter text={row.descriptions[lang]} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    });
    dynamicColumns.push({
      header: `Slug (${lang.toUpperCase()})`,
      accessor: `slugs.${lang}`,
      cell: row =>
        row.slugs[lang] ? (
          <Highlighter text={row.slugs[lang]} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    });
  });

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/events/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal endpoint="event" />
      <DataTable
        columns={dynamicColumns}
        data={filteredData}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/events/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={refetch}
      />
    </VStack>
  );
};

export default EventsShow;
