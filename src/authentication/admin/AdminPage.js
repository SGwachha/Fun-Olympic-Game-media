import {
  Box,
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useToast } from "@chakra-ui/react";
import AdminSidebar from "./AdminSidebar";
import data from "./AdminData";

const AdminPage = () => {
  const toast = useToast();
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
                <Th textAlign={"center"}>UserName</Th>
                <Th textAlign={"center"}>Email</Th>
                <Th textAlign={"center"}>Active</Th>
                <Th textAlign={"center"}>Ban User</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((data) => {
                return (
                  <Tr>
                    <Td textAlign={"center"}>{data.username}</Td>
                    <Td textAlign={"center"}>{data.email}</Td>
                    <Td textAlign={"center"}>{data.active}</Td>
                    <Td>
                      <Flex justify={"center"} align="center">
                        <Button
                          _hover={"none"}
                          _active="none"
                          onClick={() =>
                            toast({
                              title: "User Banned",
                              position: "top-right",
                              description: "The User has been banned",
                              status: "success",
                              duration: 5000,
                              isClosable: true,
                            })
                          }
                        >
                          Ban
                        </Button>
                      </Flex>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  );
};

export default AdminPage;
