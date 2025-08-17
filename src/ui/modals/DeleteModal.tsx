import React from 'react';
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import { DeleteModalItem, DeleteModalVisible, LoadingState } from '../../atoms/atoms';
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

interface DeleteModalProps {
  endpoint?: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ endpoint }) => {
  const [visible, setVisible] = useRecoilState(DeleteModalVisible);
  const item = useRecoilValue(DeleteModalItem);
  const resetItem = useResetRecoilState(DeleteModalItem);
  const loading = useRecoilValue(LoadingState);
  const setLoading = useSetRecoilState(LoadingState);

  const handleDelete = async () => {
    setLoading(prev => ({ ...prev, ['delete_loading']: true }));
    if (!item) return;

    try {
      await apiRequest({ endpoint: `${endpoint}/${item.id}`, method: 'delete' });
      toastdev.success('Məlumat silindi', { sound: true });

      setVisible(false);
      resetItem();

      if (typeof item.refetch === 'function') item.refetch?.();
    } catch (err: any) {
      const msg = err?.message || JSON.stringify(err);
      toastdev.error(msg, { sound: true });
    } finally {
      setLoading(prev => ({ ...prev, ['delete_loading']: false }));
    }
  };

  return (
    <Modal isOpen={visible && !!item} onClose={() => setVisible(false)} isCentered>
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
            <Text fontSize="sm" textAlign="center" fontWeight={500} color="blue.600">
              Zəhmət olmasa, seçili məlumatı silmək istədiyinizi təsdiqləyin.
            </Text>
          </ModalBody>
          <ModalFooter w="full" flexDirection="column" gap={2} p={0} mt={4}>
            {loading['delete_loading'] ? (
              <Loader />
            ) : (
              <React.Fragment>
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
                  onClick={() => setVisible(false)}
                >
                  Ləğv et
                </Button>
              </React.Fragment>
            )}
          </ModalFooter>
        </Center>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
