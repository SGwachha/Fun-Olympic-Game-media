import React from 'react'
import Sidebar from '../Sidebar'
import SearchBar from '../../SearchBar'
import { Flex } from '@chakra-ui/react';

const Trending = () => {
  return (
    <>
    <SearchBar />
      <Flex justify={"flex-start"} w="100%" pl={"2%"}>
        <Sidebar />
        <Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default Trending