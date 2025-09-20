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
import { TypesForDirector } from './DirectorCreate';

interface DataInterface {
  id: number;
  image: string | null;
  type: number;
  fullnames: LanguagePayloadShowData;
  positions: LanguagePayloadShowData;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'director', method: 'get' });
  return Array.isArray(res) ? res : [res];
};

const DirectorShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['directorData'],
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
      header: 'Tip',
      accessor: 'type',
      cell: row =>
        row.type ? (
          <Text>{TypesForDirector?.find(t => t.value === row.type)?.label ?? ''}</Text>
        ) : (
          <Text>Tapılmadı</Text>
        ),
    },
    {
      header: 'Şəkil',
      accessor: 'image',
      cell: row =>
        row.image ? <Image src={row.image} boxSize={100} /> : <Text>Yoxdur</Text>,
    },
  ];

  const allLangs = new Set<string>();
  data.forEach(item => {
    Object.keys(item.fullnames).forEach(lang => allLangs.add(lang));
    Object.keys(item.positions).forEach(lang => allLangs.add(lang));
  });

  allLangs.forEach(lang => {
    dynamicColumns.push({
      header: `Pozisiya (${lang.toUpperCase()})`,
      accessor: `positions.${lang}`,
      cell: row =>
        row.positions[lang] ? (
          <Highlighter text={row.positions[lang]} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    });
    dynamicColumns.push({
      header: `Ad / Soyad (${lang.toUpperCase()})`,
      accessor: `fullnames.${lang}`,
      cell: row =>
        row.fullnames?.[lang] ? (
          <Highlighter text={row.fullnames[lang]} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    });
  });

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/haqqimizda/idareetme-direktorlar/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal endpoint="director" />
      <DataTable
        columns={dynamicColumns}
        data={filteredData}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/haqqimizda/idareetme-direktorlar/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={refetch}
      />
    </VStack>
  );
};

export default DirectorShow;
