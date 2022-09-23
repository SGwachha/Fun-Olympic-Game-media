import React from "react";
import { Flex, SimpleGrid, Box, Text, VStack, Image } from "@chakra-ui/react";
import SearchBar from "../../SearchBar";
import Sidebar from "../Sidebar";
import data from "./FavouritesData";

const Favourites = () => {
  return (
    <>
      <SearchBar />
      <Flex justify={"flex-start"} w="100%" pl={"2%"}>
        <Sidebar />
        <Flex w="100%" direction={"column"}>
          <Text fontSize={"24px"} fontWeight={700}>
            Favourites
          </Text>
          <SimpleGrid columns={1} spacing={5} w="100%" pb={10}>
            {data.map((data) => {
              return (
                <>
                  <Flex
                    w="70%"
                    h="100%"
                    boxShadow="md"
                    p={4}
                    rounded="md"
                    gap={5}
                  >
                    <Box>
                      <Image src={data.image} w="250px" />
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

export default Favourites;
