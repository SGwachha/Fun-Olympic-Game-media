import { Flex, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import SearchBar from '../component/navbar/SearchBar'
import Cards from "../component/cards/Cards";
import Data from './HomeData';

const Home = () => {
  return (
   <>
    <Flex w="100%" align={"center"} justify={"center"}>
        <SearchBar />
    </Flex>
    <SimpleGrid columns={2} w="100%">
    {Data.map((data) => {
        return (
          <>
            <Cards image={data.image} title={data.title}/>
          </>
        );
      })}
    </SimpleGrid>
   </>
  )
}

export default Home