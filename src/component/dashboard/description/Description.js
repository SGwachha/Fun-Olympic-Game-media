import { Flex, Button } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../../navbar/SearchBar";

const Description = () => {
  return (
    <Flex w="100%" align={"center"} justify="space-evenly" ml="-26%">
      <Button mt="1%">Go Back</Button>
      <SearchBar />
    </Flex>
  );
};

export default Description;
