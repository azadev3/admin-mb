import React, { useMemo, useState } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import UserManagement from '../../uitils/UserManagement';
import DeleteModal from '../../../../ui/modals/DeleteModal';
import { apiRequest } from '../../../../config/apiRequest';
import Highlighter from '../../../../shared/Highlighter';
import DataTable from '../../../../shared/ui/DataTable';
import type { Column } from '../../../../shared/ui/model';
import { useQuery } from '@tanstack/react-query';

interface DataInterface {
  id: number;
  titleAz: string | null;
  titleEn: string | null;
  slugAz: string | null;
  slugEn: string | null;
  metaTitleAz: string | null;
  metaTitleEn: string | null;
  metaDescriptionAz: string | null;
  metaDescriptionEn: string | null;
  metaKeywordAz: string | null;
  metaKeywordEn: string | null;
  descriptionAz: string | null;
  descriptionEn: string | null;
  date: string | null;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'Advertisement', method: 'get' });
  return res.map(
    (item: any): DataInterface => ({
      id: item?.id ?? 1,
      titleAz: item?.titleAz ?? null,
      titleEn: item?.titleEn ?? null,
      slugAz: item?.slugAz ?? null,
      slugEn: item?.slugEn ?? null,
      metaTitleAz: item?.metaTitleAz ?? null,
      metaTitleEn: item?.metaTitleEn ?? null,
      metaDescriptionAz: item?.metaDescriptionAz ?? null,
      metaDescriptionEn: item?.metaDescriptionEn ?? null,
      metaKeywordAz: item?.metaKeywordAz ?? null,
      metaKeywordEn: item?.metaKeywordEn ?? null,
      descriptionAz: item?.descriptionAz ?? null,
      descriptionEn: item?.descriptionEn ?? null,
      date: item?.date ?? null,
    }),
  );
};

const AdvertisementShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['advertisementData'],
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

  if (error) {
    return <Text color="red.500">Xəta baş verdi: {error.message}</Text>;
  }

  const columns: Column<DataInterface>[] = [
    { header: 'ID', accessor: 'id' },
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
    { header: 'Slug (AZ)', accessor: 'slugAz' },
    { header: 'Slug (EN)', accessor: 'slugEn' },
    { header: 'Tarix', accessor: 'date' },
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
        createButtonLocation="/elanlar/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal endpoint="Advertisement" />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/elanlar/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={refetch}
      />
    </VStack>
  );
};

export default AdvertisementShow;
