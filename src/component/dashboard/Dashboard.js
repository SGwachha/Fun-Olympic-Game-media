import { Flex } from "@chakra-ui/react";
import React from "react";
import CardsData from "../cards/CardsData";
import SearchBar from "../navbar/SearchBar";
import Sidebar from "../navbar/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <SearchBar />
      <Flex>
        <Sidebar />
        <Flex>
          <CardsData />
        </Flex>
      </Flex>
    </>
  );
};

export default Dashboard;
