import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';

export default function SignUp() {
  return (
    <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }} boxShadow="lg" borderRadius={"lg"} mt="2%">
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign Up to your account</Heading>
          <FormControl id="fName">
            <Input type="text" placeholder="Full Name"/>
          </FormControl>
          <FormControl id="uName">
            <Input type="text" placeholder="UserName" />
          </FormControl>
          <FormControl id="email">
            <Input type="email" placeholder="Email Address" />
          </FormControl>
          <FormControl id="password">
            <Input type="password" placeholder="Password"/>
          </FormControl>
          <FormControl id="cPassword">
            <Input type="password" placeholder="Confirm Password"/>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'}>
              <Link href="/dashboard" textDecoration={"none"}>Next</Link>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          height="70%"
          width="100%"
          mt="10%"
          mr="5%"
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}