// HeroShow.tsx
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
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'Hero', method: 'get' });
  return [
    {
      id: res.id ?? 1,
      image: res.image,
      titleAz: res.titleAz,
      titleEn: res.titleEn,
    },
  ];
};

const HeroShow: React.FC = () => {
  const [data, setData] = useState<DataInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const getData = async () => {
    setLoading(true);
    try {
      const result = await fetchData();
      setData(result);
    } catch (error) {
      console.error('Hero fetch error:', error);
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
      Object.values(item).some(
        val => val && String(val).toLowerCase().includes(lower)
      )
    );
  }, [searchTerm, data]);

  const columns: Column<DataInterface>[] = [
    { header: 'ID', accessor: 'id' },
    {
      header: 'Şəkil',
      accessor: 'image',
      cell: row =>
        row.image ? (
          <Image src={`${baseImageUrl}${row.image}`} boxSize={12} />
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
        createButtonLocation="/hero/create"
        onRefresh={getData}
        dataLoading={loading}
      />
      <DeleteModal />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={loading}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/hero/edit/${item.id}`}
      />
    </VStack>
  );
};

export default HeroShow;
