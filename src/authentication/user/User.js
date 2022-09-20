import React, {useState, useRef} from 'react'
import { Button, Flex, FormLabel, Input, InputGroup, InputRightElement, WrapItem, Image, Box, Spacer, Avatar,  Stack, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  //react-hook-form
  const { register, handleSubmit, setValue } = useForm();

  //for profile picture
  const [profilePhoto, setProfilePhoto] = useState("");
  const fileUpload = useRef();
  const handleFile = () => {
    fileUpload.current.click();
  };
  const fileInputHandler = (e) => {
    if (e.target.files) {
      setProfilePhoto(e.target.files[0]);
    }
  };

  return (
    <Flex
    direction={"row"}
    border="2px solid #F4F4F5"
    borderRadius={"20px"}
    w="50%"
    my={5}
    p={2}>
      <form onsubmit = {handleSubmit()}>
      <Stack
            boxSize={"350px"}
            height="100%"
            w={"100%"}
            spacing="3%"
            p={5}
          >
            <Text
              fontSize={{ sm: "1.5vw", md: "2vw", lg: "1vw", xl: "1.25vw" }}
              fontWeight={"700"}
              alignItems="start"
              justifyContent={"start"}
              mb="15px"
              color="#363434"
            >
              User Settings
            </Text>
            {/* first name section start  */}
            <FormLabel
              fontSize={{ sm: "1vw", md: "1vw", lg: "1vw", xl: "0.93vw" }}
              fontWeight="600"
            >
              First Name
            </FormLabel>
            <InputGroup w="350px">
              <Input
                fontSize={"16px"}
                placeholder="Enter your first name"
                border="1px solid #A3A0A1"
                focusBorderColor="#A3A0A1"
                color="#A3A0A1"
                {...register("firstName")}
              />
              <InputRightElement
                color="gray.300"
                fontSize="1.2em"
                width="4.5rem"
              >
                <Button variant={"unstyled"} color="#A3A0A1" fontSize={"0.8vw"}>
                  Edit
                </Button>
              </InputRightElement>
            </InputGroup>
            {/* first name section end */}

            {/* Last name section start */}
            <FormLabel
              fontSize={{ sm: "1vw", md: "1vw", lg: "1vw", xl: "0.93vw" }}
              fontWeight="600"
            >
              Last Name
            </FormLabel>
            <InputGroup w="350px">
              <Input
                placeholder="Enter your last name"
                border="1px solid #A3A0A1"
                focusBorderColor="#A3A0A1"
                color="#A3A0A1"
                {...register("lastName")}
                fontSize={{ md: "2vw", lg: "1vw", xl: "1vw" }}
              />
              <InputRightElement color="gray.300" fontSize="1.2em" w="70px">
                <Button variant={"unstyled"} color="#A3A0A1" fontSize={"0.8vw"}>
                  Edit
                </Button>
              </InputRightElement>
            </InputGroup>
            {/*Last name section end */}

             {/* Email Address section start */}
             <FormLabel
              fontSize={{ sm: "1vw", md: "1vw", lg: "1vw", xl: "0.93vw" }}
              fontWeight="600"
            >
              Email Address
            </FormLabel>
            <InputGroup w="350px">
              <Input
                color="#A3A0A1"
                type="tel"
                fontSize={{ md: "2vw", lg: "1vw", xl: "1vw" }}
                placeholder="Email Address"
                focusBorderColor="grey"
                {...register("Email")}
              />
              <InputRightElement color="gray.300" fontSize="1em" width="4.5rem">
                <Button variant={"unstyled"} color="#A3A0A1" fontSize={"0.8vw"}>
                  Change
                </Button>
              </InputRightElement>
            </InputGroup>
            {/* Email Address section  end here */}

             {/*password change request section start */}
            <Button _hover={"none"} isActive={"none"} onClick={() => navigate("/forget")}>
              <Text>Request Password Change</Text>
            </Button>
            {/*password change request section end */}

            <Button
              h="50px"
              p="20px"
              fontWeight={"800"}
              borderRadius={"15px"}
              type="submit"
              mt={"5%"}
              w={{ sm: "15vw", md: "15vw", lg: "15vw", xl: "15vw" }}
              fontSize={{ sm: "1vw", md: "1vw", lg: "1vw", xl: "1vw" }}
            >
              Save Changes
            </Button>
          </Stack>
      </form>
            <Spacer />
      {/* box containing avatar image */}
      <Box
        p={1}
        w={{ base: "30%", md: "15%", lg: "15%", xl: "25%" }}
        alignItems="center"
        justifyContent={"center"}
      >
        <WrapItem
          justifyContent={"start"}
          alignItems="center"
          mt={{ md: "70%", lg: "50%" }}
        >
          {profilePhoto === "" ? (
            <Avatar boxSize={"80%"} src={"https://bit.ly/broken-link"} />
          ) : (
            <Image src={URL.createObjectURL(profilePhoto)} />
          )}
        </WrapItem>

        {/* profile update section */}
        <Input
          ref={fileUpload}
          display="none"
          type={"file"}
          onChange={fileInputHandler}
        />
        <Button
          border={{
            base: "none",
            md: "2px solid #F4F4F5",
            lg: "2px solid #F4F4F5",
            xl: "2px solid #F4F4F5",
          }}
          borderRadius={"20px"}
          mt="15px"
          bg="white"
          width={{ md: "10vw", lg: "7vw", xl: "8vw" }}
          _hover={"none"}
          isActive={"none"}
          onClick={handleFile}
          type="submit"
          w={{ sm: "10vw", md: "9vw", lg: "10vw", xl: "9vw" }}
          fontSize={{ sm: "0.25vw", md: "1vw", lg: "1vw", xl: "1vw" }}
        >
          Change Photo
        </Button>
        </Box>
    </Flex>
  )
}

export default User;