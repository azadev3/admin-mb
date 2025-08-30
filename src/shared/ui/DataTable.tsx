// DataTable.tsx
import {
  VStack,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  Text,
  IconButton,
  Box,
} from '@chakra-ui/react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import type { Column } from './model';
import DeleteButton from '../../components/content/uitils/uitils/DeleteButton';
import EditButton from '../../components/content/uitils/uitils/EditButton';
import Loader from '../../ui/Loader';

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  searchTerm?: string;
  onSearch?: (val: string) => void;
  onPageChange?: (page: number) => void;
  currentPage?: number;
  totalPages?: number;
  onDelete?: (item: T) => void;
  onEdit?: (item: T) => void;
  onEditLocation?: (item: T) => string;
  refetch?: () => void;
}

function DataTable<T>({
  columns,
  data,
  loading = false,
  searchTerm,
  onSearch,
  onPageChange,
  currentPage = 1,
  totalPages = 1,
  onDelete,
  onEdit,
  onEditLocation,
  refetch,
}: DataTableProps<T>) {
  return (
    <VStack w="100%" spacing={4} align="stretch">
      {/* Search */}
      <Input
        placeholder="Axtar..."
        value={searchTerm}
        onChange={e => (onSearch ? onSearch(e.target.value) : () => {})}
        bg="#f3f3f3"
        borderRadius="8px"
        border="2px solid #dcdcdc"
        _focus={{
          borderColor: '#094160',
          boxShadow: '0 0 0 4px rgba(89, 120, 204, 0.2)',
          bg: 'white',
        }}
      />

      {/* Table or Loader */}
      {loading ? (
        <Box w="full" py={20} display="flex" justifyContent="center">
          <Loader />
        </Box>
      ) : (
        <Box overflowX="auto" borderRadius="8px" border="1px solid #dcdcdc">
          <Table variant="simple" size="md" minW="800px">
            <Thead bg="#f5f5f5">
              <Tr>
                {columns.map(col => (
                  <Th
                    key={String(col.accessor)}
                    whiteSpace="nowrap"
                    textAlign="left"
                    px={4}
                  >
                    {col.header}
                  </Th>
                ))}
                <Th whiteSpace="nowrap" px={4}>
                  Əməliyyatlar
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item, i) => (
                <Tr key={i} _hover={{ bg: '#f9f9f9' }}>
                  {columns.map(col => (
                    <Td
                      key={String(col.accessor)}
                      maxW="200px"
                      whiteSpace="nowrap"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      px={4}
                    >
                      {col.cell ? col.cell(item) : String(item[col.accessor])}
                    </Td>
                  ))}

                  <Td px={4}>
                    {onEdit || onDelete ? (
                      <HStack spacing={2}>
                        {onEdit && (
                          <EditButton
                            editButtonLocation={onEditLocation}
                            onEdit={onEdit}
                            item={item}
                          />
                        )}
                        {onDelete && (
                          <DeleteButton
                            refetch={refetch}
                            item={item}
                            onDelete={onDelete}
                          />
                        )}
                      </HStack>
                    ) : (
                      <Text>-</Text>
                    )}
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
