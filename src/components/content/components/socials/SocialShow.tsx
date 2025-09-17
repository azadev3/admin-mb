import React, { useMemo, useState } from 'react';
import { VStack, Text, Link, Image } from '@chakra-ui/react';
import UserManagement from '../../uitils/UserManagement';
import DeleteModal from '../../../../ui/modals/DeleteModal';
import DataTable from '../../../../shared/ui/DataTable';
import Highlighter from '../../../../shared/Highlighter';
import type { Column } from '../../../../shared/ui/model';
import { apiRequest } from '../../../../config/apiRequest';
import { baseImageUrl } from '../../../../config/baseURL';
import { useQuery } from '@tanstack/react-query';

interface DataInterface {
  id: number;
  title: string | null;
  icon: string | null;
  url: string | null;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'Social', method: 'get' });
  return res;
};

const SocialShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['socials'],
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
          <Image
            src={
              row.icon.startsWith('http')
                ? row.icon
                : `${baseImageUrl}${row.icon}`
            }
            boxSize={100}
            objectFit="contain"
          />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'URL',
      accessor: 'url',
      cell: row =>
        row.url ? (
          <Link
            href={
              row.url.startsWith('http') ? row.url : `${baseImageUrl}${row.url}`
            }
            isExternal
            color="blue.500"
            textDecoration="underline"
          >
            URL Aç
          </Link>
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Başlıq',
      accessor: 'title',
      cell: row =>
        row.title ? (
          <Highlighter text={row.title} highlight={searchTerm} />
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
        createButtonLocation="/sosial/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal endpoint="Social" />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/sosial/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={refetch}
      />
    </VStack>
  );
};

export default SocialShow;
