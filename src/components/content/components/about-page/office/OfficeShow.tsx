import React, { useMemo, useState } from 'react';
import { VStack, Text, Image, Link } from '@chakra-ui/react';
import UserManagement from '../../../uitils/UserManagement';
import DeleteModal from '../../../../../ui/modals/DeleteModal';
import { apiRequest } from '../../../../../config/apiRequest';
import Highlighter from '../../../../../shared/Highlighter';
import DataTable from '../../../../../shared/ui/DataTable';
import type { Column } from '../../../../../shared/ui/model';
import { useQuery } from '@tanstack/react-query';
import type { LanguagePayloadShowData } from '../../../../../auth/api/model';

interface DataInterface {
  id: number;
  statute: string;
  image: string;
  phone: string;
  titles: LanguagePayloadShowData;
  chairmen: LanguagePayloadShowData;
  addresses?: LanguagePayloadShowData;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({
    endpoint: 'office',
    method: 'get',
  });
  return res.map(
    (item: any): DataInterface => ({
      id: item?.id ?? 1,
      image: item?.image ?? '',
      phone: item?.phone ?? '',
      statute: item?.statute ?? '',
      titles: item?.titles ?? {},
      chairmen: item?.chairmen ?? {},
      addresses: item?.addresses ?? {},
    }),
  );
};

const OfficeShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['office'],
    queryFn: fetchData,
    retry: 2,
    refetchOnWindowFocus: false,
  });

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    const lower = searchTerm.toLocaleLowerCase('az');

    const containsSearch = (val: any): boolean => {
      if (val === null || val === undefined) return false;
      if (typeof val === 'string' || typeof val === 'number') {
        return String(val).toLocaleLowerCase('az').includes(lower);
      }
      if (typeof val === 'object') {
        return Object.values(val).some(containsSearch);
      }
      return false;
    };

    return data.filter(item => containsSearch(item));
  }, [searchTerm, data]);

  if (error) return <Text color="red.500">Xəta baş verdi: {error.message}</Text>;

  const dynamicColumns: Column<DataInterface>[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Telefon', accessor: 'phone' },
    {
      header: 'Şəkil',
      accessor: 'image',
      cell: row =>
        row.image ? <Image src={row.image} boxSize={100} /> : <Text>Yoxdur</Text>,
    },
    {
      header: 'Statute Fayl',
      accessor: 'statute',
      cell: row =>
        row.statute ? (
          <Link isExternal href={row.statute} color="blue.500">
            <Highlighter highlight={searchTerm} text={row.statute} />
          </Link>
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
  ];

  const allLangs = new Set<string>();
  data.forEach(item => {
    Object.keys(item.titles).forEach(lang => allLangs.add(lang));
    Object.keys(item.chairmen).forEach(lang => allLangs.add(lang));
    if (item.addresses) Object.keys(item.addresses).forEach(lang => allLangs.add(lang));
  });

  allLangs.forEach(lang => {
    dynamicColumns.push({
      header: `Başlıq (${lang.toUpperCase()})`,
      accessor: `titles.${lang}`,
      cell: row =>
        row.titles[lang] ? (
          <Highlighter text={row.titles[lang]} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    });
    dynamicColumns.push({
      header: `Sədr (${lang.toUpperCase()})`,
      accessor: `chairmen.${lang}`,
      cell: row =>
        row.chairmen[lang] ? (
          <Highlighter text={row.chairmen[lang]} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    });
    dynamicColumns.push({
      header: `Adres (${lang.toUpperCase()})`,
      accessor: `addresses.${lang}`,
      cell: row =>
        row.addresses?.[lang] ? (
          <Highlighter text={row.addresses[lang]} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    });
  });

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/office/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal endpoint="office" />
      <DataTable
        columns={dynamicColumns}
        data={filteredData}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/office/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={refetch}
      />
    </VStack>
  );
};

export default OfficeShow;
