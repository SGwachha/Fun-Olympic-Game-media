import {
  Flex,
  Button,
  Box,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { MdOutlineReportProblem } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import SearchBar from "../../navbar/SearchBar";
import { useNavigate } from "react-router-dom";
import CardDetails from "./suggested/CardDetails";

const Description = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex w="100%" align={"center"} justify="space-evenly" ml="-26%">
        <Button mt="1%" onClick={() => navigate("/dashboard")}>
          Go Back
        </Button>
        <SearchBar />
      </Flex>
      <Stack
        w="90%"
        gap={10}
        h="100%"
        justify="center"
        align={"center"}
        display={"flex"}
        flexDirection="row"
      >
        <Box w="80%" pos={"relative"}>
          <Box
            h={"100vh"}
            w="100%"
            bg={"gray.100"}
            pos={"relative"}
            cursor="pointer"
          >
            video
          </Box>
          <Flex mt="3%" justify={"space-between"} w="100%">
            <Box w="50%">
              <Heading fontSize={"24px"}>Football</Heading>
              <Text>Messi vs Ronaldo</Text>
            </Box>
            <Flex display={"flex"} w="60%" justify="flex-end">
              <Button
                w="80px"
                leftIcon={<AiOutlineLike />}
                justifyContent="space-between"
                fontSize="16px"
                bg={"none"}
                _hover={"none"}
                _active={"none"}
              >
                Like
              </Button>
              <Button
                w="100px"
                leftIcon={<AiOutlineDislike />}
                justifyContent="space-between"
                fontSize="16px"
                bg={"none"}
                _hover={"none"}
                _active={"none"}
              >
                Dislike
              </Button>
              <Button
                w="120px"
                leftIcon={<BiComment />}
                justifyContent="space-between"
                fontSize="16px"
                bg={"none"}
                _hover={"none"}
                _active={"none"}
              >
                Comments
              </Button>
              <Button
                w="100px"
                leftIcon={<RiShareForwardLine />}
                justifyContent="space-between"
                fontSize="16px"
                bg={"none"}
                _hover={"none"}
                _active={"none"}
              >
                Share
              </Button>
              <Button
                w="100px"
                leftIcon={<MdOutlineReportProblem />}
                justifyContent="space-between"
                fontSize="16px"
                bg={"none"}
                _hover={"none"}
                _active={"none"}
              >
                Report
              </Button>
            </Flex>
          </Flex>
        </Box>
        <Box cursor={"pointer"} h={"100vh"} w="30%">
          <Text>Suggested Video</Text>
          <CardDetails />
        </Box>
      </Stack>
    </>
  );
};

export default Description;
