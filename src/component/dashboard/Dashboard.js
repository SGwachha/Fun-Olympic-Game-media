import { Flex } from "@chakra-ui/react";
import React from "react";
import CardsData from "../cards/CardsData";
import SearchBar from "../navbar/SearchBar";
import Sidebar from "../navbar/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <SearchBar />
      <Flex justify={"flex-start"} w="100%" pl={"2%"}>
        <Sidebar />
        <Flex>
          <CardsData />
        </Flex>
      </Flex>
    </>
  );
};

export default Dashboard;
