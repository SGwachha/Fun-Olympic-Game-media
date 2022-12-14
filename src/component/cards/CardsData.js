import React from "react";
import Data from "./Data";
import Cards from "./Cards";
import { SimpleGrid } from "@chakra-ui/react";

const CardsData = () => {
  return (
    <SimpleGrid columns={3} gap="2%" w="100%" ml="-5%">
      {Data.map((data) => {
        return (
          <>
            <Cards image={data.image} title={data.title} description={data.description} />
          </>
        );
      })}
    </SimpleGrid>
  );
};

export default CardsData;
