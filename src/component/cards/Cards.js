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
import {MdOutlineReportProblem } from "react-icons/md";

export default function Cards({image, title, desc}){

  

  return (
    <Center w="100%" py={6} cursor="pointer">
      <Box
        maxW={"445px"}
        w={"full"}
        h="100%"
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
        >Thumbnail</Box>
        <Flex align={"center"} justify="center">
          <Stack w="100%">
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
              cursor={"pointer"}
            >
              {title}
            </Heading>
            <Text color={"gray.500"}>
              {desc}
            </Text>
          </Stack>
          <Flex justify={"flex-end"} mt={4}>
            <Popover placement="bottom">
              <PopoverTrigger>
                <IconButton
                  aria-label="More server options"
                  icon={<BsThreeDotsVertical />}
                  variant="solid"
                  bg="none"
                  _hover={"none"}
                  _active={"none"}
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
                      fontSize="sm"
                      bg={"none"}
                      _hover={"none"}
                      _active={"none"}
                    >
                      Report
                    </Button>
                    <Button
                      w="194px"
                      variant="ghost"
                      rightIcon={<RiShareForwardLine />}
                      justifyContent="space-between"
                      fontWeight="normal"
                      fontSize="sm"
                      bg={"none"}
                      _hover={"none"}
                      _active={"none"}
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
