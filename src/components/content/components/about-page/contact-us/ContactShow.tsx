import React, { useMemo, useState } from 'react';
import { VStack, Text, Link } from '@chakra-ui/react';
import { apiRequest } from '../../../../../config/apiRequest';
import UserManagement from '../../../uitils/UserManagement';
import type { Column } from '../../../../../shared/ui/model';
import Highlighter from '../../../../../shared/Highlighter';
import DataTable from '../../../../../shared/ui/DataTable';
import { useQuery } from '@tanstack/react-query';
import type { LanguagePayloadShowData } from '../../../../../auth/api/model';

interface DataInterface {
  id: number;
  contactMail: string;
  fileSize: string;
  receptionSchedule: string;
  map: string;
  notes: LanguagePayloadShowData;
  registrationTimes: LanguagePayloadShowData;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'contact', method: 'get' });
  return Array.isArray(res) ? res : [res];
};

const ContactShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['contactData'],
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

  const columns: Column<DataInterface>[] = [
    {
      header: 'Əlaqə Mail',
      accessor: 'contactMail',
      cell: row =>
        row.contactMail ? <Text>{row.contactMail}</Text> : <Text>Yoxdur</Text>,
    },
    {
      header: 'Fayl Ölçüsü',
      accessor: 'fileSize',
      cell: row => (row.fileSize ? <Text>{row.fileSize}</Text> : <Text>Yoxdur</Text>),
    },
    {
      header: 'Qəbul Cədvəli',
      accessor: 'receptionSchedule',
      cell: row =>
        row.receptionSchedule ? (
          <Text>{row.receptionSchedule}</Text>
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Xəritə',
      accessor: 'map',
      cell: row =>
        row.map ? (
          <Link href={row.map} color="blue.500" isExternal>
            Xəritəyə bax
          </Link>
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'PDF Fayl',
      accessor: 'receptionSchedule',
      cell: row =>
        row.receptionSchedule ? (
          <Link href={row.receptionSchedule} color="blue.500" isExternal>
            Bax
          </Link>
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
  ];

  // Notes ve RegistrationTimes için dil tabanlı dinamik kolonlar
  const allLangs = new Set<string>();
  data.forEach(item => {
    Object.keys(item.notes || {}).forEach(lang => allLangs.add(lang));
    Object.keys(item.registrationTimes || {}).forEach(lang => allLangs.add(lang));
  });

  allLangs.forEach(lang => {
    columns.push({
      header: `Qeyd (${lang.toUpperCase()})`,
      accessor: `notes.${lang}`,
      cell: row =>
        row.notes?.[lang] ? (
          <Highlighter text={row.notes[lang]} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    });
    columns.push({
      header: `Qeydiyyat Vaxtı (${lang.toUpperCase()})`,
      accessor: `registrationTimes.${lang}`,
      cell: row =>
        row.registrationTimes?.[lang] ? (
          <Highlighter text={row.registrationTimes[lang]} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    });
  });

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/haqqimizda/elaqe/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={(val: any) => setSearchTerm(val)}
        refetch={refetch}
      />
    </VStack>
  );
};

export default ContactShow;
