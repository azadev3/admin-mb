import React, { useEffect, useState, useMemo } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { apiRequest } from '../../../../config/apiRequest';
import DataTable, { type Column } from '../../../../helpers/DataTable';
import Highlighter from '../../../../helpers/Highlighter';
import DeleteModal from '../../../../ui/modals/DeleteModal';
import UserManagement from '../../uitils/UserManagement';

interface DataInterface {
  id: number;
  month: any;
  year: number;
  value: number;
}

const MonthsForInflationMap: Record<number, string> = {
  1: 'Yanvar',
  2: 'Fevral',
  3: 'Mart',
  4: 'Aprel',
  5: 'May',
  6: 'İyun',
  7: 'İyul',
  8: 'Avqust',
  9: 'Sentyabr',
  10: 'Oktyabr',
  11: 'Noyabr',
  12: 'Dekabr',
};

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'Inflation', method: 'get' });

  return res.map(
    (item: any): DataInterface => ({
      id: item?.id ?? 1,
      month: item?.month ?? '',
      year: item?.year ?? 0,
      value: item?.value ?? '',
    }),
  );
};

const InflationValuesShow: React.FC = () => {
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
      cell: row =>
        row?.year ? (
          <Highlighter text={String(row.year)} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Ay',
      accessor: 'month',
      cell: row =>
        row?.month ? (
          <Highlighter
            text={MonthsForInflationMap[row.month] || 'Yoxdur'}
            highlight={searchTerm}
          />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Dəyər',
      accessor: 'value',
      cell: row =>
        row?.value ? (
          <Highlighter text={String(row.value)} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
  ];

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/inflasiya/create"
        onRefresh={getData}
        dataLoading={loading}
      />
      <DeleteModal endpoint="Inflation" />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={loading}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/inflasiya/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={getData}
      />
    </VStack>
  );
};

export default InflationValuesShow;
