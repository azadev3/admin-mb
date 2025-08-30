import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Center,
  Icon,
} from '@chakra-ui/react';
import { MdOutlineDangerous } from 'react-icons/md';
import { apiRequest } from '../../config/apiRequest';
import { toastdev } from '@azadev/react-toastdev';
import Loader from '../Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDeleteModalItem,
  setDeleteModalVisible,
  setLoading,
} from '../../store/features/uiSlice';
import type { RootState } from '../../store/store';

interface DeleteModalProps {
  endpoint?: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ endpoint }) => {
  const dispatch = useDispatch();
  const visible = useSelector(
    (state: RootState) => state.ui.deleteModalVisible,
  );
  const item = useSelector((state: RootState) => state.ui.deleteModalItem);
  const loading = useSelector((state: RootState) => state.ui.loading);

  const handleDelete = async () => {
    if (!item) return;

    dispatch(setLoading({ key: 'delete_loading', value: true }));

    try {
      await apiRequest({
        endpoint: `${endpoint}/${item.id}`,
        method: 'delete',
      });
      toastdev.success('Məlumat silindi', { sound: true });

      dispatch(setDeleteModalVisible(false));
      dispatch(setDeleteModalItem(null));

      if (typeof item.refetch === 'function') item.refetch();
    } catch (err: any) {
      const msg = err?.message || JSON.stringify(err);
      toastdev.error(msg, { sound: true });
    } finally {
      dispatch(setLoading({ key: 'delete_loading', value: false }));
    }
  };

  return (
    <Modal
      isOpen={visible && !!item}
      onClose={() => dispatch(setDeleteModalVisible(false))}
      isCentered
    >
      <ModalOverlay bg="rgba(8,19,32,0.14)" backdropFilter="blur(1px)" />
      <ModalContent maxW="400px" borderRadius="md" p={6}>
        <Center flexDirection="column" gap={4}>
          <Icon as={MdOutlineDangerous} w={10} h={10} color="red.500" />
          <ModalHeader textAlign="center" p={0}>
            <Text fontSize="xl" fontWeight="bold" color="blue.600">
              Məlumat silinsin?
            </Text>
          </ModalHeader>
          <ModalBody w="full" p={0}>
            <Text
              fontSize="sm"
              textAlign="center"
              fontWeight={500}
              color="blue.600"
            >
              Zəhmət olmasa, seçili məlumatı silmək istədiyinizi təsdiqləyin.
            </Text>
          </ModalBody>
          <ModalFooter w="full" flexDirection="column" gap={2} p={0} mt={4}>
            {loading['delete_loading'] ? (
              <Loader />
            ) : (
              <>
                <Button
                  w="100%"
                  bg="red.400"
                  color="white"
                  _hover={{ bg: 'red.600' }}
                  onClick={handleDelete}
                >
                  Bəli, sil
                </Button>
                <Button
                  w="100%"
                  bg="gray.100"
                  color="blue.600"
                  _hover={{ bg: 'gray.200' }}
                  onClick={() => dispatch(setDeleteModalVisible(false))}
                >
                  Ləğv et
                </Button>
              </>
            )}
          </ModalFooter>
        </Center>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
