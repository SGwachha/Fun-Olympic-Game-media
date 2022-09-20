import React from 'react'
import Sidebar from '../Sidebar'
import SearchBar from '../../SearchBar'
import CardsData from "../../../cards/CardsData";
import { Flex } from '@chakra-ui/react';

const Setting = () => {
  return (
    <>
    <SearchBar />
      <Flex justify={"flex-start"} w="100%" pl={"5%"}>
        <Sidebar />
        <Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default Setting