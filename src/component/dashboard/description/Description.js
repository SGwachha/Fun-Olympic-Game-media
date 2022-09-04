import { Flex, Button, Box, Stack, Text, Heading } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../../navbar/SearchBar";
import { useNavigate } from "react-router-dom";

const Description = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex w="100%" align={"center"} justify="space-evenly" ml="-26%">
        <Button mt="1%" onClick={()=> navigate("/dashboard")} >Go Back</Button>
        <SearchBar />
      </Flex>
      <Stack
        w="90%"
        gap={10}
        h="100%"
        justify="center"
        align={"center"}
        display={"flex"}
        flexDirection="row"
      >
        <Box
          w="80%"
          pos={"relative"}>
        <Box
          h={"650px"}
          w="100%"
          bg={"gray.100"}
          pos={"relative"}
          cursor="pointer"
        >
          video
        </Box>
        <Flex mt="3%" justify={"space-between"} w="100%" bg="black">
          <Box bg="red" w="50%">
          <Heading fontSize={"24px"}>
            Football
          </Heading>
          <Text>
            Messi vs Ronaldo
          </Text>
          </Box>
          <Box display={"flex"} gap="10%" w="50%">
          <Text fontSize={"18px"} cursor="pointer">
            Like
            </Text>
            <Text fontSize={"18px"} cursor="pointer">
            Dislike
            </Text>
            <Text fontSize={"18px"} cursor="pointer">
            Comment
            </Text>
            <Text fontSize={"18px"} cursor="pointer">
            Share
            </Text>
            <Text fontSize={"18px"} cursor="pointer">
            Report
            </Text>
          </Box>
        </Flex>
        </Box>
        <Box cursor={"pointer"} h={"750px"} w="30%" bg={"gray.100"}>
          Suggested
        </Box>
      </Stack>
    </>
  );
};

export default Description;
