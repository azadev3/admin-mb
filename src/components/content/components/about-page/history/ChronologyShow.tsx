import React, { useEffect, useState, useMemo } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { apiRequest } from '../../../../../config/apiRequest';
import DataTable, { type Column } from '../../../../../helpers/DataTable';
import Highlighter from '../../../../../helpers/Highlighter';
import DeleteModal from '../../../../../ui/modals/DeleteModal';
import UserManagement from '../../../uitils/UserManagement';

interface DataInterface {
  id: number;
  year: number;
  textAz: string;
  textEn: string;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'Chronology', method: 'get' });

  return res.map(
    (item: any): DataInterface => ({
      id: item?.id ?? 1,
      year: item?.year ?? 0,
      textAz: item?.textAz ?? '',
      textEn: item?.textEn ?? '',
    }),
  );
};

const ChronologyShow: React.FC = () => {
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
      header: 'İl',
      accessor: 'year',
      cell: row => <Text>{row.year}</Text>,
    },
    {
      header: 'Açıqlama (AZ)',
      accessor: 'textAz',
      cell: row =>
        row.textAz ? (
          <Highlighter text={row.textAz} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Açıqlama (EN)',
      accessor: 'textEn',
      cell: row =>
        row.textEn ? (
          <Highlighter text={row.textEn} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
  ];

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/haqqimizda/tarix-xronologiya/create"
        onRefresh={getData}
        dataLoading={loading}
      />
      <DeleteModal endpoint="Chronology" />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={loading}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/haqqimizda/tarix-xronologiya/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={getData}
      />
    </VStack>
  );
};

export default ChronologyShow;
