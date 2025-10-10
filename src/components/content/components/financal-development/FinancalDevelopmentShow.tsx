import React, { useMemo, useState } from 'react';
import { VStack, Text, Link } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import type { LanguagePayloadShowData } from '../../../../auth/api/model';
import { apiRequest } from '../../../../config/apiRequest';
import Highlighter from '../../../../shared/Highlighter';
import DataTable from '../../../../shared/ui/DataTable';
import type { Column } from '../../../../shared/ui/model';
import DeleteModal from '../../../../ui/modals/DeleteModal';
import UserManagement from '../../uitils/UserManagement';

interface DataInterface {
  id?: number;
  year?: string;
  file?: string;
  image?: string;
  pdfFile?: string;
  titles: LanguagePayloadShowData;
  descriptions: LanguagePayloadShowData;
  fileHeadTitles: LanguagePayloadShowData;
  fileTitles: LanguagePayloadShowData;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'financialdevelopment', method: 'get' });
  if (!res) return [];
  if (res && Array.isArray(res)) return res;
  return [res];
};

const FinancalDevelopmentShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['financialdevelopment'],
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
      header: 'Şəkil',
      accessor: 'image',
      cell: row =>
        row.image ? (
          <img
            src={row.image}
            alt="preview"
            style={{ width: '80px', height: 'auto', borderRadius: '4px' }}
          />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'PDF',
      accessor: 'pdfFile',
      cell: row =>
        row.pdfFile ? (
          <Link href={row.pdfFile} color="blue.500" isExternal>
            Bax
          </Link>
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Fayl',
      accessor: 'file',
      cell: row =>
        row.file ? (
          <Link href={row.file} color="blue.500" isExternal>
            {row.file}
          </Link>
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
  ];

  const allLangs = new Set<string>();
  data.forEach(item => {
    [item.titles, item.descriptions, item.fileHeadTitles, item.fileTitles].forEach(
      obj => {
        if (obj) Object.keys(obj).forEach(lang => allLangs.add(lang));
      },
    );
  });

  allLangs.forEach(lang => {
    dynamicColumns.push(
      {
        header: `Başlıq (${lang.toUpperCase()})`,
        accessor: `titles.${lang}`,
        cell: row =>
          row.titles?.[lang] ? (
            <Highlighter text={row.titles[lang]} highlight={searchTerm} />
          ) : (
            <Text>Yoxdur</Text>
          ),
      },
      {
        header: `Açıqlama (${lang.toUpperCase()})`,
        accessor: `descriptions.${lang}`,
        cell: row =>
          row.descriptions?.[lang] ? (
            <Highlighter text={row.descriptions[lang]} highlight={searchTerm} />
          ) : (
            <Text>Yoxdur</Text>
          ),
      },
      {
        header: `Fayl Başlıq (${lang.toUpperCase()})`,
        accessor: `fileHeadTitles.${lang}`,
        cell: row =>
          row.fileHeadTitles?.[lang] ? (
            <Highlighter text={row.fileHeadTitles[lang]} highlight={searchTerm} />
          ) : (
            <Text>Yoxdur</Text>
          ),
      },
      {
        header: `Fayl Adı (${lang.toUpperCase()})`,
        accessor: `fileTitles.${lang}`,
        cell: row =>
          row.fileTitles?.[lang] ? (
            <Highlighter text={row.fileTitles[lang]} highlight={searchTerm} />
          ) : (
            <Text>Yoxdur</Text>
          ),
      },
    );
  });

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/financal-development/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal endpoint="financialdevelopment" />
      <DataTable
        columns={dynamicColumns}
        data={filteredData}
        loading={isLoading || isFetching}
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

export default FinancalDevelopmentShow;
