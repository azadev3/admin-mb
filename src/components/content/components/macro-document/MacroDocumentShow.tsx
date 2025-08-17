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
  titleAz: string | null;
  titleEn: string | null;
  subTitleAz: string | null;
  subTitleEn: string | null;
  icon: string | null;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'MacroDocument', method: 'get' });
  return res;
};

const MacroDocumentShow: React.FC = () => {
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
          <Image src={`${baseImageUrl}${row?.icon}`} boxSize={12} />
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
    {
      header: 'Mətn (AZ)',
      accessor: 'subTitleAz',
      cell: row =>
        row.subTitleAz ? (
          <Highlighter text={row.subTitleAz} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Mətn (EN)',
      accessor: 'subTitleEn',
      cell: row =>
        row.subTitleEn ? (
          <Highlighter text={row.subTitleEn} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
  ];

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/makroiqtisadi-senedler-ve-hesabatlar/create"
        onRefresh={getData}
        dataLoading={loading}
      />
      <DeleteModal endpoint="MacroDocument" />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={loading}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/makroiqtisadi-senedler-ve-hesabatlar/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={getData}
      />
    </VStack>
  );
};

export default MacroDocumentShow;
