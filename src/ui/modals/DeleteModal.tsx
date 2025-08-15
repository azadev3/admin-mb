import React from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { DeleteModalItem, DeleteModalVisible } from '../../atoms/atoms';
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

const DeleteModal: React.FC = () => {
  const [visible, setVisible] = useRecoilState(DeleteModalVisible);
  const item = useRecoilValue(DeleteModalItem);
  const resetItem = useResetRecoilState(DeleteModalItem);

  const handleDelete = () => {
    setVisible(false);
    resetItem();
  };

  return (
    <Modal
      isOpen={visible && !!item}
      onClose={() => setVisible(false)}
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
          </ModalFooter>
        </Center>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
