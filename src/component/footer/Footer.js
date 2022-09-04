import {
  Box,
  Flex,
  Container,
  Text,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { SiFacebook } from "react-icons/si"
import { AiFillLinkedin } from "react-icons/ai"
import { FaInstagramSquare } from "react-icons/fa"

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text textAlign="center">© 2022 Fun Olympics Games. All rights reserved</Text>
      </Container>
      <Flex w="100%" justify={"center"} align="center">
      <IconButton icon={<SiFacebook />} fontSize="20px" bg="none" _hover={"none"} _active="none" />
      <IconButton icon={<AiFillLinkedin />} fontSize="22px" bg="none" _hover={"none"} _active="none" />
      <IconButton icon={<FaInstagramSquare />} fontSize="22px" bg="none" _hover={"none"} _active="none" />
      </Flex>
    </Box>
  );
}