import React from 'react'
import CardsData from "../../component/cards/CardsData.js";
import AdminSidebar from "./AdminSidebar";
import { Flex, Box, Button, Text} from '@chakra-ui/react';
import { RiVideoUploadFill } from "react-icons/ri";

const UploadVides = () => {

  return (
    <>
    <Flex w="100%" padding={"2%"} gap={10} pb="5%">
      <Box w="20%">
        <AdminSidebar />
      </Box>
    <Box w="80%">
      <Flex justify={"space-between"}>
      <Text fontWeight={600} fontSize="24px">Uploaded Videos</Text>
      <Button
      leftIcon={<RiVideoUploadFill />}
      colorScheme="blue"
          variant="solid"
      >
        Upload Video
      </Button>
      </Flex>
        <CardsData />
    </Box>
    </Flex>
    </>
  )
}

export default UploadVides