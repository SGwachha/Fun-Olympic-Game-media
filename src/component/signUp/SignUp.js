import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import ModalComponent from "../modal/ModalComponents";
import QuestionSet from "../../authentication/questions/QuestionSet";
import { validateEmail } from "../../utils/Validation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [storeData, setStoreData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
    // validate the email
    if (!validateEmail(data.email)) {
      toast.dismiss();
      toast.error("Please enter a valid email address", {
        position: "top-right",
      });
      return;
    }
    if (data.password !== data.cpassword) {
      toast.dismiss();
      toast.error("Password and Confirm Password do not match");
      return;
    }
    setStoreData(data);
    setIsLoading(false);
    onOpen();
  };

  console.log(storeData);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex p={3} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={2} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Register your account</Heading>
            <FormControl id="fName" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input type="text" {...register("email")} />
            </FormControl>
            <FormControl id="UName" isRequired>
              <FormLabel>UserName</FormLabel>
              <Input type="text" {...register("email")} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" {...register("email")} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register("password")} />
            </FormControl>
            <FormControl id="cpassword" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" {...register("cpassword")} />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"} onClick={() => navigate("/forget")}>
                  Forgot password?
                </Link>
              </Stack>
              <Button
                colorScheme={"blue"}
                variant={"solid"}
                type="submit"
                isLoading={isSubmitting}
              >
                Next
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"} onClick={() => navigate("/login")}>
                Already a user? <Link color={"blue.400"}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            mt="2%"
            src={
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            }
          />
        </Flex>

        {/* for modal component */}
        <ModalComponent
          modalOpen={isOpen}
          modalClose={onClose}
          title="Answer the question for further process !!!"
        >
          <QuestionSet datas={storeData} />
        </ModalComponent>
      </Stack>
    </form>
  );
};

export default Signup;
