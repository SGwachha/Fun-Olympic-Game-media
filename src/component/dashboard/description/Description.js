import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../../navbar/SearchBar";

const Description = () => {
  return (
    <Flex>
      <Button bg="red">Go Back</Button>
      <Box>
        <SearchBar />
      </Box>
    </Flex>
  );
};

export default Description;
