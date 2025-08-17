import React, { useEffect, useState, useMemo } from 'react';
import { VStack, Text, Link } from '@chakra-ui/react';
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
  pdfFile: string | null;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'Interview', method: 'get' });

  return res.map(
    (item: any): DataInterface => ({
      id: item?.id ?? 1,
      titleAz: item?.titleAz ?? null,
      titleEn: item?.titleEn ?? null,
      pdfFile: item?.pdfFile ?? null,
    }),
  );
};

const InterviewShow: React.FC = () => {
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
      header: 'PDF Faylı',
      accessor: 'pdfFile',
      cell: row =>
        row.pdfFile ? (
          <Link
            href={
              row.pdfFile.startsWith('http') ? row.pdfFile : `${baseImageUrl}${row.pdfFile}`
            }
            isExternal
            color="blue.500"
            textDecoration="underline"
          >
            Faylı Aç
          </Link>
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
  ];

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/musahibeler-ve-cixislar/create"
        onRefresh={getData}
        dataLoading={loading}
      />
      <DeleteModal endpoint='Interview' />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={loading}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/musahibeler-ve-cixislar/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={getData}
      />
    </VStack>
  );
};

export default InterviewShow;
