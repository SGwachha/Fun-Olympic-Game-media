import {
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  const CardDesign = ({image, title, description}) => {
    return (
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: 'full' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={image}
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center">
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {title}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              {description}
            </Text>
          </Stack>
        </Stack>
      </Center>
    );
  }
  export default CardDesign;