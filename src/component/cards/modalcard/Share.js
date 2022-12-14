import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const Share = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} bg="none" _hover={"none"} _active={"none"}>
        Share
      </Button>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Link for Sharing</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Share
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Share;
