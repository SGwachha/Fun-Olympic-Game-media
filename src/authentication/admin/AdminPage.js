import { Box, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import AdminSidebar from './AdminSidebar'

const AdminPage = () => {
  return (
    <Flex w="100%" padding={"2%"}>
      <Box w="20%" pl="2%">
        <AdminSidebar />
      </Box>
    <Box w="80%">
    <TableContainer>
  <Table>
    <Thead>
      <Tr>
        <Th textAlign={"center"}>heading</Th>
        <Th textAlign={"center"}>heading</Th>
        <Th textAlign={"center"}>heading</Th>
        <Th textAlign={"center"}>heading</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td textAlign={"center"}>Text</Td>
        <Td textAlign={"center"}>Text</Td>
        <Td textAlign={"center"}>Text</Td>
        <Td textAlign={"center"}>Text</Td>
      </Tr>
      <Tr>
        <Td textAlign={"center"}>Text</Td>
        <Td textAlign={"center"}>Text</Td>
        <Td textAlign={"center"}>Text</Td>
        <Td textAlign={"center"}>Text</Td>
      </Tr>
      <Tr>
        <Td textAlign={"center"}>Text</Td>
        <Td textAlign={"center"}>Text</Td>
        <Td textAlign={"center"}>Text</Td>
        <Td textAlign={"center"}>Text</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </Box>
    </Flex>
  )
}

export default AdminPage