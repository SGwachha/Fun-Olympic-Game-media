import React from "react";
import Data from "./Data";
import Cards from "./Cards";
import { SimpleGrid } from "@chakra-ui/react";

const CardsData = () => {
  return (
    <SimpleGrid columns={4} gap="5%" w="90%">
      {Data.map((data) => {
        return (
          <>
            <Cards image={data.image} title={data.title} desc={data.desc} />
          </>
        );
      })}
    </SimpleGrid>
  );
};

export default CardsData;