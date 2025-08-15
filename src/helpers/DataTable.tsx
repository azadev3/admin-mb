import { useState } from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { IoSearch } from 'react-icons/io5';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import EditButton from '../components/content/uitils/uitils/EditButton';
import DeleteButton from '../components/content/uitils/uitils/DeleteButton';
import Loader from '../ui/Loader'; // <- Loader'ı import ettik

export interface Column<T> {
  header: string;
  accessor: keyof T;
  cell?: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  onSearch?: (query: string) => void;
  onPageChange?: (page: number) => void;
  currentPage?: number;
  totalPages?: number;
  onDelete: (item: T) => void;
  onEdit: (item: T) => void;
  onEditLocation: (item: T) => string;
}

function DataTable<T>({
  columns,
  data,
  loading = false,
  onSearch,
  onPageChange,
  currentPage = 1,
  totalPages = 1,
  onDelete,
  onEdit,
  onEditLocation,
}: DataTableProps<T>) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <VStack w="100%" spacing={4} align="stretch">
      {/* Search */}
      <InputGroup w="full">
        <Input
          placeholder="Axtar..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          bg="#f3f3f3"
          borderRadius="8px"
          border="2px solid #dcdcdc"
          _focus={{
            borderColor: '#094160',
            boxShadow: '0 0 0 4px rgba(89, 120, 204, 0.2)',
            bg: 'white',
          }}
        />
        <InputRightElement>
          <IconButton
            aria-label="search"
            icon={<IoSearch />}
            size="sm"
            bg="#094160"
            color="white"
            _hover={{ bg: '#254a7de5' }}
            onClick={() => onSearch?.(searchTerm)}
          />
        </InputRightElement>
      </InputGroup>

      {/* Table or Loader */}
      {loading ? (
        <Box w="full" py={20} display="flex" justifyContent="center">
          <Loader />
        </Box>
      ) : (
        <Box overflowX="auto" borderRadius="8px" border="1px solid #dcdcdc">
          <Table variant="simple" size="md">
            <Thead bg="#f5f5f5">
              <Tr>
                {columns.map(col => (
                  <Th key={String(col.accessor)}>{col.header}</Th>
                ))}
                <Th>Əməliyyatlar</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item, i) => (
                <Tr key={i} _hover={{ bg: '#f9f9f9' }}>
                  {columns.map(col => (
                    <Td key={String(col.accessor)}>
                      {col.cell ? col.cell(item) : String(item[col.accessor])}
                    </Td>
                  ))}
                  <Td>
                    <HStack spacing={2}>
                      <EditButton
                        editButtonLocation={onEditLocation}
                        onEdit={onEdit}
                        item={item}
                      />
                      <DeleteButton item={item} onDelete={onDelete} />
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}

      {/* Pagination */}
      {!loading && (
        <HStack justify="center" spacing={4}>
          <IconButton
            aria-label="previous"
            icon={<IoIosArrowBack />}
            isDisabled={currentPage === 1}
            onClick={() => onPageChange?.(currentPage - 1)}
          />
          <Text>
            Səhifə {currentPage} / {totalPages}
          </Text>
          <IconButton
            aria-label="next"
            icon={<IoIosArrowForward />}
            isDisabled={currentPage === totalPages}
            onClick={() => onPageChange?.(currentPage + 1)}
          />
        </HStack>
      )}
    </VStack>
  );
}

export default DataTable;
