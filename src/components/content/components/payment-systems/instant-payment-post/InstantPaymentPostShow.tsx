import React, { useMemo, useState } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import type { LanguagePayloadShowData } from '../../../../../auth/api/model';
import { apiRequest } from '../../../../../config/apiRequest';
import Highlighter from '../../../../../shared/Highlighter';
import DataTable from '../../../../../shared/ui/DataTable';
import type { Column } from '../../../../../shared/ui/model';
import DeleteModal from '../../../../../ui/modals/DeleteModal';
import UserManagement from '../../../uitils/UserManagement';

interface DataInterface {
  id: number;
  titles: LanguagePayloadShowData;
  descriptions: LanguagePayloadShowData;
  shortDescriptions: LanguagePayloadShowData;
  slugs: LanguagePayloadShowData;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'InstantPaymentPost', method: 'get' });
  if (!res) return [];
  if (res && Array.isArray(res)) return res;

  return [res];
};

const InstantPaymentPostShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['InstantPaymentPost'],
    queryFn: fetchData,
    retry: 2,
    refetchOnWindowFocus: false,
  });

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    const lower = searchTerm.toLocaleLowerCase('az');
    return data.filter(
      item =>
        Object.values(item.titles).some(
          val => val && String(val).toLocaleLowerCase('az').includes(lower),
        ) ||
        Object.values(item.descriptions).some(
          val => val && String(val).toLocaleLowerCase('az').includes(lower),
        ) ||
        Object.values(item.shortDescriptions).some(
          val => val && String(val).toLocaleLowerCase('az').includes(lower),
        ) ||
        Object.values(item.slugs).some(
          val => val && String(val).toLocaleLowerCase('az').includes(lower),
        ),
    );
  }, [searchTerm, data]);

  if (error) return <Text color="red.500">Xəta baş verdi: {error.message}</Text>;

  const columns: Column<DataInterface>[] = [{ header: 'ID', accessor: 'id' }];

  const allLangs = new Set<string>();
  data.forEach(item => Object.keys(item.titles).forEach(lang => allLangs.add(lang)));
  data.forEach(item =>
    Object.keys(item.descriptions).forEach(lang => allLangs.add(lang)),
  );
  data.forEach(item => Object.keys(item.slugs).forEach(lang => allLangs.add(lang)));
  data.forEach(item =>
    Object.keys(item.shortDescriptions).forEach(lang => allLangs.add(lang)),
  );

  allLangs.forEach(lang => {
    columns.push({
      header: `Başlıq (${lang.toUpperCase()})`,
      accessor: `titles.${lang}`,
      cell: row =>
        row.titles[lang] ? (
          <Highlighter text={row.titles[lang]} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    });
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
    columns.push({
      header: `Qısa Açıqlama (${lang.toUpperCase()})`,
      accessor: `shortDescriptions.${lang}`,
      cell: row =>
        row.shortDescriptions[lang] ? (
          <Highlighter text={row.shortDescriptions[lang]} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    });
    columns.push({
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
        createButtonLocation="/payment-systems/InstantPaymentPost/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal endpoint="InstantPaymentPost" />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/payment-systems/InstantPaymentPost/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={refetch}
      />
    </VStack>
  );
};

export default InstantPaymentPostShow;
