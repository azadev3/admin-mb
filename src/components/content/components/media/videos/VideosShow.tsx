import React, { useEffect, useState, useMemo } from 'react';
import { VStack, Text, Link } from '@chakra-ui/react';
import { apiRequest } from '../../../../../config/apiRequest';
import DataTable, { type Column } from '../../../../../helpers/DataTable';
import DeleteModal from '../../../../../ui/modals/DeleteModal';
import UserManagement from '../../../uitils/UserManagement';
import { baseImageUrl } from '../../../../../config/baseURL';

interface DataInterface {
  id: number;
  url: string;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'Video', method: 'get' });

  return res;
};

const VideosShow: React.FC = () => {
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
      header: 'Video',
      accessor: 'url',
      cell: row =>
        row.url ? (
          <Link
            href={row.url.startsWith('http') ? row.url : `${baseImageUrl}${row.url}`}
            isExternal
            color="blue.500"
            textDecoration="underline"
          >
            Bax
          </Link>
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
  ];

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/videolar/create"
        onRefresh={getData}
        dataLoading={loading}
      />
      <DeleteModal endpoint="Video" />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={loading}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/videolar/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={getData}
      />
    </VStack>
  );
};

export default VideosShow;
