import React from 'react'
import Sidebar from '../Sidebar'
import SearchBar from '../../SearchBar'
import { Flex } from '@chakra-ui/react';

const Setting = () => {
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

export default Setting