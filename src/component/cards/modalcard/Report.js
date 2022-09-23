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
  Stack,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const Report = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} bg="none" _hover={"none"} _active={"none"}>
        Report
      </Button>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reson for Reportting</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack spacing={5} direction="row">
              <Checkbox>Sexual Content</Checkbox>
              <Checkbox>Body shaming</Checkbox>
              <Checkbox>Copy Right</Checkbox>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Report
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Report;
