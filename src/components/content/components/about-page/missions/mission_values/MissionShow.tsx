import React, { useMemo, useState } from 'react';
import { VStack, Text, Image } from '@chakra-ui/react';
import { apiRequest } from '../../../../../../config/apiRequest';
import DeleteModal from '../../../../../../ui/modals/DeleteModal';
import UserManagement from '../../../../uitils/UserManagement';
import Highlighter from '../../../../../../shared/Highlighter';
import DataTable from '../../../../../../shared/ui/DataTable';
import type { Column } from '../../../../../../shared/ui/model';
import { useQuery } from '@tanstack/react-query';
import type { LanguagePayloadShowData } from '../../../../../../auth/api/model';

interface DataInterface {
  id: number;
  titles: LanguagePayloadShowData;
  texts: LanguagePayloadShowData;
  icon: string | null;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'mission', method: 'get' });
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
    {
      header: 'İkon',
      accessor: 'icon',
      cell: row =>
        row.icon ? <Image src={row.icon} boxSize={100} /> : <Text>Yoxdur</Text>,
    },
  ];

  const allLangs = new Set<string>();
  data.forEach(item => {
    Object.keys(item.titles).forEach(lang => allLangs.add(lang));
    Object.keys(item.texts).forEach(lang => allLangs.add(lang));
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
      accessor: `texts.${lang}`,
      cell: row =>
        row.texts?.[lang] ? (
          <Highlighter text={row.texts[lang]} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    });
  });

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/haqqimizda/missiya-ve-deyerler-values/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal endpoint="mission" />
      <DataTable
        columns={dynamicColumns}
        data={filteredData}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/haqqimizda/missiya-ve-deyerler-values/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={refetch}
      />
    </VStack>
  );
};

export default MissionShow;
