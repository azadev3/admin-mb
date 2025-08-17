import React, { useEffect, useState, useMemo } from 'react';
import { VStack, Image, Text } from '@chakra-ui/react';
import UserManagement from '../../uitils/UserManagement';
import DeleteModal from '../../../../ui/modals/DeleteModal';
import { apiRequest } from '../../../../config/apiRequest';
import Highlighter from '../../../../helpers/Highlighter';
import type { Column } from '../../../../helpers/DataTable';
import DataTable from '../../../../helpers/DataTable';
import { baseImageUrl } from '../../../../config/baseURL';

interface DataInterface {
  id: number;
  image: string | null;
  titleAz: string | null;
  titleEn: string | null;
  slugAz?: string | null;
  slugEn?: string | null;
  date?: string | null;
  isFocused?: boolean;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'Blog', method: 'get' });
  const onlyIsFocused = res?.filter((data: DataInterface) => data?.isFocused === true);

  return onlyIsFocused.map((item: DataInterface) => ({
    id: item.id,
    image: item.image,
    titleAz: item.titleAz,
    titleEn: item.titleEn,
    slugAz: item.slugAz,
    slugEn: item.slugEn,
    date: item.date,
    isFocused: item.isFocused,
  }));
};

const FocusShow: React.FC = () => {
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
      header: 'Şəkil',
      accessor: 'image',
      cell: row =>
        row.image ? (
          <Image src={`${baseImageUrl}${row?.image}`} boxSize={12} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
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
    { header: 'Slug (AZ)', accessor: 'slugAz' },
    { header: 'Slug (EN)', accessor: 'slugEn' },
    { header: 'Tarix', accessor: 'date' },
    {
      header: 'Focus',
      accessor: 'isFocused',
      cell: row => (row.isFocused ? <Text>✔</Text> : <Text>❌</Text>),
    },
  ];

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/fokus/create"
        onRefresh={getData}
        dataLoading={loading}
      />
      <DeleteModal endpoint="Blog" />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={loading}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/fokus/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={getData}
      />
    </VStack>
  );
};

export default FocusShow;
