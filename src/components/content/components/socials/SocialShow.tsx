import React, { useEffect, useState, useMemo } from 'react';
import { VStack, Text, Link, Image } from '@chakra-ui/react';
import UserManagement from '../../uitils/UserManagement';
import DeleteModal from '../../../../ui/modals/DeleteModal';
import { apiRequest } from '../../../../config/apiRequest';
import Highlighter from '../../../../helpers/Highlighter';
import type { Column } from '../../../../helpers/DataTable';
import DataTable from '../../../../helpers/DataTable';
import { baseImageUrl } from '../../../../config/baseURL';

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
  const [data, setData] = useState<DataInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const getData = async () => {
    setLoading(true);
    try {
      const result = await fetchData();
      setData(result);
    } catch (error) {
      console.error('Data fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    const lower = searchTerm.toLowerCase();
    return data.filter(item =>
      Object.values(item).some(val => val && String(val).toLowerCase().includes(lower)),
    );
  }, [searchTerm, data]);

  const columns: Column<DataInterface>[] = [
    { header: 'ID', accessor: 'id' },
    {
      header: 'Icon',
      accessor: 'icon',
      cell: row =>
        row.icon ? (
          <Image
            src={row.icon?.startsWith('http') ? row?.icon : `${baseImageUrl}${row.icon}`}
            boxSize={12}
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
            href={row.url.startsWith('http') ? row.url : `${baseImageUrl}${row.url}`}
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
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/sosial/create"
        onRefresh={getData}
        dataLoading={loading}
      />
      <DeleteModal endpoint="Social" />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={loading}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/sosial/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={getData}
      />
    </VStack>
  );
};

export default SocialShow;
