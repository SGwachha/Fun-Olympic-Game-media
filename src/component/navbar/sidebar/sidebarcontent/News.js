import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../../SearchBar";
import Sidebar from "../Sidebar";

const News = () => {
  return (
    <>
      <SearchBar />
      <Flex justify={"flex-start"} w="100%" pl={"5%"}>
        <Sidebar />
        <Flex w="100%">
          <SimpleGrid columns={1} spacing={5} w="100%">
            <Box boxShadow={"lg"} height="100%" p="2%" w="90%">
              <Text>Title</Text>
              <Text>description</Text>
            </Box>
            <Box boxShadow={"xl"} height="100%" p="2%" w="90%">
              <Text>Title</Text>
              <Text>description</Text>
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
};

export default News;
