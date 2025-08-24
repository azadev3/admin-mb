import React, { useEffect, useState, useMemo } from 'react';
import { VStack, Text, Image } from '@chakra-ui/react';
import { apiRequest } from '../../../../../../config/apiRequest';
import DataTable, { type Column } from '../../../../../../helpers/DataTable';
import Highlighter from '../../../../../../helpers/Highlighter';
import DeleteModal from '../../../../../../ui/modals/DeleteModal';
import UserManagement from '../../../../uitils/UserManagement';
import { baseImageUrl } from '../../../../../../config/baseURL';

interface DataInterface {
  id: number;
  image: string | null;
  fullNameAz: string;
  fullNameEn: string;
  slugAz: string;
  slugEn: string;
  positionAz: string;
  positionEn: string;
  birthdayAz: string;
  birthdayEn: string;
  receptionDaysAz: string;
  receptionDaysEn: string;
  educationAz: string;
  educationEn: string;
  careerAz: string;
  careerEn: string;
  familyAz: string;
  familyEn: string;
  phone: string;
  type: number;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'Director', method: 'get' });
  return Array.isArray(res) ? res : [res];
};

const DirectorShow: React.FC = () => {
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
      header: 'Profil Şəkli',
      accessor: 'image',
      cell: row =>
        row.image ? (
          <Image
            objectFit="cover"
            src={`${baseImageUrl}${row.image}`}
            boxSize="50px"
            borderRadius="full"
          />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Ad / Soyad (AZ)',
      accessor: 'fullNameAz',
      cell: row =>
        row.fullNameAz ? (
          <Highlighter text={row.fullNameAz} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Ad / Soyad (EN)',
      accessor: 'fullNameEn',
      cell: row =>
        row.fullNameEn ? (
          <Highlighter text={row.fullNameEn} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Slug (AZ)',
      accessor: 'slugAz',
      cell: row => <Text>{row.slugAz || 'Yoxdur'}</Text>,
    },
    {
      header: 'Slug (EN)',
      accessor: 'slugEn',
      cell: row => <Text>{row.slugEn || 'Yoxdur'}</Text>,
    },
    {
      header: 'Pozisiya (AZ)',
      accessor: 'positionAz',
      cell: row =>
        row.positionAz ? (
          <Highlighter text={row.positionAz} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Pozisiya (EN)',
      accessor: 'positionEn',
      cell: row =>
        row.positionEn ? (
          <Highlighter text={row.positionEn} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Doğum Tarixi (AZ)',
      accessor: 'birthdayAz',
      cell: row => (
        <Text as="div" dangerouslySetInnerHTML={{ __html: row.birthdayAz }} />
      ),
    },
    {
      header: 'Doğum Tarixi (EN)',
      accessor: 'birthdayEn',
      cell: row => (
        <Text as="div" dangerouslySetInnerHTML={{ __html: row.birthdayEn }} />
      ),
    },
    {
      header: 'Qəbul Günləri (AZ)',
      accessor: 'receptionDaysAz',
      cell: row => <Text>{row.receptionDaysAz || 'Yoxdur'}</Text>,
    },
    {
      header: 'Qəbul Günləri (EN)',
      accessor: 'receptionDaysEn',
      cell: row => <Text>{row.receptionDaysEn || 'Yoxdur'}</Text>,
    },
    {
      header: 'Təhsil (AZ)',
      accessor: 'educationAz',
      cell: row => (
        <Text as="div" dangerouslySetInnerHTML={{ __html: row.educationAz }} />
      ),
    },
    {
      header: 'Təhsil (EN)',
      accessor: 'educationEn',
      cell: row => (
        <Text as="div" dangerouslySetInnerHTML={{ __html: row.educationEn }} />
      ),
    },
    {
      header: 'Karyera (AZ)',
      accessor: 'careerAz',
      cell: row => <Text as="div" dangerouslySetInnerHTML={{ __html: row.careerAz }} />,
    },
    {
      header: 'Karyera (EN)',
      accessor: 'careerEn',
      cell: row => <Text as="div" dangerouslySetInnerHTML={{ __html: row.careerEn }} />,
    },
    {
      header: 'Ailə Həyatı (AZ)',
      accessor: 'familyAz',
      cell: row => <Text as="div" dangerouslySetInnerHTML={{ __html: row.familyAz }} />,
    },
    {
      header: 'Ailə Həyatı (EN)',
      accessor: 'familyEn',
      cell: row => <Text as="div" dangerouslySetInnerHTML={{ __html: row.familyEn }} />,
    },
    {
      header: 'Telefon',
      accessor: 'phone',
      cell: row => <Text>{row.phone || 'Yoxdur'}</Text>,
    },
    {
      header: 'Vəzifə Tipi',
      accessor: 'type',
      cell: row => <Text>{row.type || '-'}</Text>,
    },
  ];

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/haqqimizda/idareetme-direktorlar/create"
        onRefresh={getData}
        dataLoading={loading}
      />
      <DeleteModal endpoint="Director" />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={loading}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/haqqimizda/idareetme-direktorlar/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={getData}
      />
    </VStack>
  );
};

export default DirectorShow;
