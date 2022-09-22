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
import Football from "../../images/football.jpg";

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={{ base: "column", md: "row" }} w="100%">
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
              <Input type="email" {...register( "email", {pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/ })} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register("password", {pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/})} />
            </FormControl>
            <FormControl id="cpassword" isRequired>
              <FormLabel>Confirm Number</FormLabel>
              <Input type="password" {...register("cpassword", {pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/})} />
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
        <Flex flex={1} justify="flex-start">
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            mt="2%"
            h="100%"
            w={"80%"}
            src={Football}
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
