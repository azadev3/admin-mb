import React, { useEffect, useState, useMemo } from 'react';
import { VStack, Text, Image } from '@chakra-ui/react';
import { apiRequest } from '../../../../../config/apiRequest';
import DataTable, { type Column } from '../../../../../helpers/DataTable';
import Highlighter from '../../../../../helpers/Highlighter';
import DeleteModal from '../../../../../ui/modals/DeleteModal';
import UserManagement from '../../../uitils/UserManagement';
import { baseImageUrl } from '../../../../../config/baseURL';

interface DataInterface {
  id: number;
  titleAz: string;
  titleEn: string;
  slugAz: string;
  slugEn: string;
  imageTitleAz: string;
  imageTitleEn: string;
  imageAltAz: string;
  imageAltEn: string;
  metaTitleAz: string;
  metaTitleEn: string;
  metaDescriptionAz: string;
  metaDescriptionEn: string;
  metaKeywordAz: string;
  metaKeywordEn: string;
  descriptionAz: string | null;
  descriptionEn: string | null;
  image: string;
  date: string;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'Gallery', method: 'get' });

  return res;
};

const ImagesShow: React.FC = () => {
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
          <Image src={`${baseImageUrl}${row.image}`} objectFit="contain" boxSize={12} />
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
      accessor: 'descriptionAz',
      cell: row =>
        row.descriptionAz ? (
          <Highlighter text={row.descriptionAz} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Mətn (EN)',
      accessor: 'descriptionEn',
      cell: row =>
        row.descriptionEn ? (
          <Highlighter text={row.descriptionEn} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    { header: 'Slug (AZ)', accessor: 'slugAz' },
    { header: 'Slug (EN)', accessor: 'slugEn' },
    { header: 'Tarix', accessor: 'date' },
  ];

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/sekiller/create"
        onRefresh={getData}
        dataLoading={loading}
      />
      <DeleteModal endpoint="Gallery" />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={loading}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/sekiller/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={getData}
      />
    </VStack>
  );
};

export default ImagesShow;
