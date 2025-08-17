import React, { useEffect, useState, useMemo } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { apiRequest } from '../../../../../config/apiRequest';
import DataTable, { type Column } from '../../../../../helpers/DataTable';
import Highlighter from '../../../../../helpers/Highlighter';
import DeleteModal from '../../../../../ui/modals/DeleteModal';
import UserManagement from '../../../uitils/UserManagement';

interface DataInterface {
  id: number;
  titleAz: string | null;
  titleEn: string | null;
  subTitleAz: string | null;
  subTitleEn: string | null;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'DigitalPortalCaption', method: 'get' });
  return [
    {
      id: res.id ?? 1,
      titleAz: res.titleAz,
      titleEn: res.titleEn,
      subTitleAz: res.subTitleAz,
      subTitleEn: res.subTitleEn,
    },
  ];
};

const DigitalPortalCaptionsShow: React.FC = () => {
  const [data, setData] = useState<DataInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const getData = async () => {
    setLoading(true);
    try {
      const result = await fetchData();
      setData(result);
    } catch (error) {
      console.error('fetch error:', error);
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
      header: 'Mətn (AZ)',
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
        createButtonLocation="/digital-portal-texts/create"
        onRefresh={getData}
        dataLoading={loading}
      />
      <DeleteModal endpoint="DigitalPortalCaption" />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={loading}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/digital-portal-texts/edit/${item.id}`}
      />
    </VStack>
  );
};

export default DigitalPortalCaptionsShow;
