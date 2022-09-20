import { Box, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const AdminPage = () => {
  return (
    <Flex w="100%" padding={"2%"}>
      <Box>
      </Box>
    <TableContainer w={"100%"}>
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
    </Flex>
  )
}

export default AdminPage