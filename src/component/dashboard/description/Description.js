import { Flex, Button, Box, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
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
        gap={20}
        justify="center"
        align={"center"}
        display={"flex"}
        flexDirection="row"
      >
        <Box
          h={"650px"}
          w="70%"
          bg={"gray.100"}
          pos={"relative"}
          cursor="pointer"
        >
          video
        </Box>
        <Box cursor={"pointer"} h={"650px"} w="30%" bg={"gray.100"}>
          Suggested
        </Box>
      </Stack>
    </>
  );
};

export default Description;
