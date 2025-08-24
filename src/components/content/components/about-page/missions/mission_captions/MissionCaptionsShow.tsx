import React, { useEffect, useState, useMemo } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { apiRequest } from '../../../../../../config/apiRequest';
import DataTable, { type Column } from '../../../../../../helpers/DataTable';
import Highlighter from '../../../../../../helpers/Highlighter';
import UserManagement from '../../../../uitils/UserManagement';

interface DataInterface {
  id: number;
  titleAz: string | null;
  titleEn: string | null;
  textAz: string | null;
  textEn: string | null;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'MissionCaption', method: 'get' });
  return Array.isArray(res) ? res : [res];
};

const MissionCaptionsShow: React.FC = () => {
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
      accessor: 'textAz',
      cell: row =>
        row.textAz ? (
          <Highlighter text={row.textAz} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Açıqlama (AZ)',
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
        createButtonLocation="/haqqimizda/missiya-ve-deyerler/create"
        onRefresh={getData}
        dataLoading={loading}
      />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={loading}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={(val: any) => setSearchTerm(val)}
        refetch={getData}
      />
    </VStack>
  );
};

export default MissionCaptionsShow;
