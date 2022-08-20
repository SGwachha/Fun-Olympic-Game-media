import { Button,Drawer, DrawerOverlay, DrawerContent,DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter } from "@chakra-ui/react"

const ModalComponent = ({title,children, modalOpen , modalClose }) => {
  return (
    <Drawer
    isOpen={modalOpen}
    placement='right'
    onClose={modalClose}
    size='xl'
  >
    <DrawerOverlay/>
    <DrawerContent>
      <DrawerCloseButton/>
      <DrawerHeader>
        {title}
      </DrawerHeader>

      <DrawerBody>
        {children}
      </DrawerBody>

      <DrawerFooter>
        <Button variant='outline' mr={3} onClick={modalClose}>
          Back
        </Button>
        <Button colorScheme='blue'>Confirm</Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
  )
}

export default ModalComponent