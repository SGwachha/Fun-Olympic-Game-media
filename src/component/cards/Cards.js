import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Flex,
  Popover,
  PopoverTrigger,
  IconButton,
  PopoverContent,
  Button,
  PopoverBody,
  PopoverArrow,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiShareForwardLine} from "react-icons/ri";
import {MdOutlineReportProblem } from "react-icons/md"

export default function Cards() {
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        ></Box>
        <Flex ml="3%">
          <Stack>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              Boost your conversion rate
            </Heading>
            <Text color={"gray.500"}>
              Lorem ipsum dolor sit amet, consetetur sadipscin
            </Text>
          </Stack>
          <Flex justifyContent="center" mt={4}>
            <Popover placement="bottom" isLazy>
              <PopoverTrigger>
                <IconButton
                  aria-label="More server options"
                  icon={<BsThreeDotsVertical />}
                  variant="solid"
                  w="fit-content"
                />
              </PopoverTrigger>
              <PopoverContent w="fit-content" _focus={{ boxShadow: "none" }}>
                <PopoverArrow />
                <PopoverBody>
                  <Stack>
                    <Button
                      w="194px"
                      variant="ghost"
                      rightIcon={<MdOutlineReportProblem />}
                      justifyContent="space-between"
                      fontWeight="normal"
                      colorScheme="red"
                      fontSize="sm"
                    >
                      Report
                    </Button>
                    <Button
                      w="194px"
                      variant="ghost"
                      rightIcon={<RiShareForwardLine />}
                      justifyContent="space-between"
                      fontWeight="normal"
                      colorScheme="red"
                      fontSize="sm"
                    >
                      Share
                    </Button>
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        </Flex>
      </Box>
    </Center>
  );
}
