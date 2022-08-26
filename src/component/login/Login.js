import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { validateEmail } from "../../utils/Validation";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
    if (!validateEmail(data.email)) {
      toast.dismiss();
      toast.error("Please enter a valid email address", {
        position: "top-right",
      });
      return;
    }
    toast.success("Login Successful");
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
          w="30vw"
          p={8}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={5}>
              <FormControl id="email" isRequired>
                <Input type="email" {...register("email")} placeholder="Enter Your Email"/>
              </FormControl>
              <FormControl id="password" isRequired>
                <Input type="password" {...register("password")} placeholder="Enter Your Password"/>
              </FormControl>
              <FormControl id="cpassword" isRequired>
                <Input type="password" {...register("cpassword")} placeholder="Confirm Password"/>
              </FormControl>
              <FormControl id="petname" isRequired>
                <Input type="text" {...register("petname")} placeholder="Enter Your Pet Name"/>
              </FormControl>
              <FormControl id="cnumber" isRequired>
                <Input type="tel" {...register("cnumber")} placeholder="Enter Your Contact Number"/>
              </FormControl>
              <FormControl id="country" isRequired>
                <Input type="text" {...register("contry")} placeholder="Enter Your Country"/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"} onClick={() => navigate("/forget")}>
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
                  onClick={() => navigate("/dashboard")}
                >
                  Sign in
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
