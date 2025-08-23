import React, { useEffect, useState, useMemo } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { apiRequest } from '../../../../../config/apiRequest';
import DataTable, { type Column } from '../../../../../helpers/DataTable';
import Highlighter from '../../../../../helpers/Highlighter';
import DeleteModal from '../../../../../ui/modals/DeleteModal';
import UserManagement from '../../../uitils/UserManagement';
import moment from 'moment';

interface DataInterface {
  id: number;
  date: string | null;
  value: number;
  percentCategoryTitle: string | null;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'PercentCorridor', method: 'get' });

  return res.map(
    (item: any): DataInterface => ({
      id: item?.id ?? 1,
      date: item?.date ? moment(item?.date).format('DD.MM.YYYY') : null,
      value: item?.value ?? 0,
      percentCategoryTitle: item?.percentCategoryTitle ?? '',
    }),
  );
};

const PercentValuesShow: React.FC = () => {
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
    { header: 'Tarix', accessor: 'date' },
    {
      header: 'Dəyər',
      accessor: 'value',
      cell: row => <Text>{row.value}</Text>,
    },
    {
      header: 'Başlıq',
      accessor: 'percentCategoryTitle',
      cell: row =>
        row.percentCategoryTitle ? (
          <Highlighter text={row.percentCategoryTitle} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
  ];

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/faiz-dehlizi-values/create"
        onRefresh={getData}
        dataLoading={loading}
      />
      <DeleteModal endpoint="PercentCorridor" />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={loading}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/faiz-dehlizi-values/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={getData}
      />
    </VStack>
  );
};

export default PercentValuesShow;
