import { Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../navbar/SearchBar";
import Sidebar from "../navbar/sidebar/Sidebar";
import CardsData from "../cards/CardsData";

const Dashboard = () => {
  return (
    <>
      <SearchBar />
      <Flex justify={"flex-start"} w="100%" pl={"2%"}>
        <Sidebar />
        <SimpleGrid w="100%" pb="5%">
          <CardsData />
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Dashboard;
