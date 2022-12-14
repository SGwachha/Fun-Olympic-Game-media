import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  return (
    <InputGroup w="30%" mt="3%" mb="2%">
      <Input pr="4.5rem" type="text" placeholder="Search" />
      <InputRightElement width="4.5rem">
        <IconButton
          bg={"none"}
          _hover="none"
          pl="30%"
          _active={"none"}
          aria-label="Search database"
          icon={<SearchIcon />}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
