import React, { useEffect, useState, useMemo } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { apiRequest } from '../../../../../config/apiRequest';
import DataTable, { type Column } from '../../../../../helpers/DataTable';
import Highlighter from '../../../../../helpers/Highlighter';
import UserManagement from '../../../uitils/UserManagement';

interface DataInterface {
  id: number;
  titleAz: string | null;
  titleEn: string | null;
  descriptionAz: string | null;
  descriptionEn: string | null;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'StructureCaption', method: 'get' });
  return Array.isArray(res) ? res : [res];
};

const StructureCaptionsShow: React.FC = () => {
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
      accessor: 'descriptionAz',
      cell: row =>
        row.descriptionAz ? (
          <Highlighter text={row.descriptionAz} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Açıqlama (AZ)',
      accessor: 'descriptionEn',
      cell: row =>
        row.descriptionEn ? (
          <Highlighter text={row.descriptionEn} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
  ];

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/haqqimizda/teskilati-struktur/create"
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

export default StructureCaptionsShow;
