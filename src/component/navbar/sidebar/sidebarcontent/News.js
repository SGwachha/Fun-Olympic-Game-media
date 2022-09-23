import { Flex, SimpleGrid, Box, Text, Image, VStack } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../../SearchBar";
import Sidebar from "../Sidebar";
import data from "./NewsData";

const News = () => {
  return (
    <>
      <SearchBar />
      <Flex justify={"flex-start"} w="100%" pl={"2%"}>
        <Sidebar />
        <Flex w="100%">
          <SimpleGrid columns={1} spacing={5} w="100%" pb={10}>
            {data.map((data) => {
              return (
                <>
                  <Flex
                    w="90%"
                    h="100%"
                    boxShadow="md"
                    p={4}
                    rounded="md"
                    gap={5}
                  >
                    <Box>
                      <Image src={data.image} />
                    </Box>
                    <VStack>
                      <Text fontSize="xl" fontWeight="bold">
                        {data.title}
                      </Text>
                      <Text fontSize="md" fontWeight="normal">
                        {data.description}
                      </Text>
                    </VStack>
                  </Flex>
                </>
              );
            })}
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
};

export default News;
