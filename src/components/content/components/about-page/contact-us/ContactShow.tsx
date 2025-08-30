import React, { useMemo, useState } from 'react';
import { VStack, Text, Box, Link } from '@chakra-ui/react';
import { apiRequest } from '../../../../../config/apiRequest';
import UserManagement from '../../../uitils/UserManagement';
import { baseImageUrl } from '../../../../../config/baseURL';
import type { Column } from '../../../../../shared/ui/model';
import Highlighter from '../../../../../shared/Highlighter';
import DataTable from '../../../../../shared/ui/DataTable';
import { useQuery } from '@tanstack/react-query';

interface DataInterface {
  id: number;
  contactMail: string;
  noteAz: string;
  noteEn: string;
  registrationTimeAz: string;
  registrationTimeEn: string;
  map: string;
  receptionSchedule: string;
  fileSize: string;
  file: File | null;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'Contact', method: 'get' });
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
    return data.filter(item =>
      Object.values(item).some(
        val => val && String(val).toLocaleLowerCase('az').includes(lower),
      ),
    );
  }, [searchTerm, data]);

  const columns: Column<DataInterface>[] = [
    {
      header: 'Reception Schedule',
      accessor: 'receptionSchedule',
      cell: row =>
        row.receptionSchedule ? (
          <Link
            href={`${baseImageUrl}${row.receptionSchedule}`}
            isExternal
            color="blue.500"
          >
            {row.fileSize || 'Faylı aç'}
          </Link>
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Map',
      accessor: 'map',
      cell: row =>
        row.map ? (
          <Box w="200px" h="150px" overflow="hidden" borderRadius="md">
            <iframe
              src={row.map.match(/src="([^"]+)"/)?.[1] || ''}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Contact Mail',
      accessor: 'contactMail',
      cell: row => row.contactMail || <Text>Yoxdur</Text>,
    },
    {
      header: 'Note (AZ)',
      accessor: 'noteAz',
      cell: row =>
        row.noteAz ? (
          <Highlighter text={row.noteAz} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Note (EN)',
      accessor: 'noteEn',
      cell: row =>
        row.noteEn ? (
          <Highlighter text={row.noteEn} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Registration Time (AZ)',
      accessor: 'registrationTimeAz',
      cell: row =>
        row.registrationTimeAz ? (
          <Text>{row.registrationTimeAz}</Text>
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Registration Time (EN)',
      accessor: 'registrationTimeEn',
      cell: row =>
        row.registrationTimeEn ? (
          <Text>{row.registrationTimeEn}</Text>
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
  ];

  if (error) {
    return <Text color="red.500">Xəta baş verdi: {error.message}</Text>;
  }

  return (
    <VStack
      w="100%"
      align="stretch"
      spacing={4}
      p={4}
      bg="gray.50"
      borderRadius="md"
    >
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
