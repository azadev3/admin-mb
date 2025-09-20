import React, { useMemo, useState } from 'react';
import { VStack, Text, Link } from '@chakra-ui/react';
import UserManagement from '../../../uitils/UserManagement';
import DeleteModal from '../../../../../ui/modals/DeleteModal';
import { apiRequest } from '../../../../../config/apiRequest';
import Highlighter from '../../../../../shared/Highlighter';
import DataTable from '../../../../../shared/ui/DataTable';
import type { Column } from '../../../../../shared/ui/model';
import { useQuery } from '@tanstack/react-query';
import type { LanguagePayloadShowData } from '../../../../../auth/api/model';

interface DataInterface {
  id: number;
  file: string;
  fileType: string;
  titles: LanguagePayloadShowData;
  coverTitles: LanguagePayloadShowData;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({
    endpoint: 'statisticalreportfile',
    method: 'get',
  });

  if (!res) return [];
  if (res && Array.isArray(res)) return res;

  return [res];
};

const ReportFileShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['statisticalreportfile'],
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
      header: 'PDF Fayl',
      accessor: 'file',
      cell: row =>
        row.file ? (
          <Link isExternal href={row.file} color="blue.500">
            <Highlighter highlight={searchTerm} text={row.file} />
          </Link>
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
  ];

  const allLangs = new Set<string>();
  data.forEach(item => {
    Object.keys(item.titles).forEach(lang => allLangs.add(lang));
    Object.keys(item.coverTitles).forEach(lang => allLangs.add(lang));
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
      header: `Cover Başlıq (${lang.toUpperCase()})`,
      accessor: `coverTitles.${lang}`,
      cell: row =>
        row.coverTitles[lang] ? (
          <Highlighter text={row.coverTitles[lang]} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    });
  });

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/report-file/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal endpoint="statisticalreportfile" />
      <DataTable
        columns={dynamicColumns}
        data={filteredData}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/report-file/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={refetch}
      />
    </VStack>
  );
};

export default ReportFileShow;
