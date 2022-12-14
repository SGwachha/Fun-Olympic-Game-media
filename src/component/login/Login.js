import {
  Flex,
  Box,
  FormControl,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Text,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { validateEmail } from "../../utils/Validation";

export default function Login() {
  const navigate = useNavigate();
  const [storeData, setStoreData] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
    //validate email
    if (!validateEmail(data.email)) {
      toast.dismiss();
      toast.error("Please enter a valid email address", {
        position: "top-right",
      });
      return;
    }
    if (data.password !== data.cpassword) {
      toast.success("Login Successful");
    }
    setStoreData(data);
    setIsLoading(false);
    onOpen();
  };

  return (
    <Flex
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      width={"100%"}
    >
        <Stack spacing={3} mx={"auto"} maxW={"lg"} py={4}>
          <Stack align={"center"}>
            <Heading fontSize={"2xl"}>Log in to your account</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            w="100%"
            p={8}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
             <Stack spacing={5}>
                <FormControl id="email" isRequired>
                  <Input
                    type="email"
                    {...register("email", {pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, required: true})}
                    placeholder="Enter Your Email"
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <Input
                    type="password"
                    {...register("password", {pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, required: true})}
                    placeholder="Enter Your Password"
                  />
                </FormControl>
                <FormControl id="cpassword" isRequired>
                  <Input
                    type="password"
                    {...register("cpassword", {pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, required: true})}
                    placeholder="Confirm Password"
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link
                      color={"blue.400"}
                      onClick={() => navigate("/forget")}
                    >
                      Forgot password?
                    </Link>
                  </Stack>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    type="submit"
                    isLoading={isSubmitting}
                    onClick= {() => navigate("/dashboard")}
                  >
                    Next
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"} onClick={() => navigate("/signup")}>
                    Not a User? <Link color={"blue.400"}>Register</Link>
                  </Text>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
    </Flex>
  );
}
