import React from "react";
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  IconButton,
} from "@chakra-ui/react";
import {
  FiHome,
  FiSettings,
} from "react-icons/fi";
import { RiVideoUploadFill, RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const AdminSidebar = ({ onClose, ...rest }) => {
  const navigate = useNavigate();

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60}}
      pos="fixed"
      h="600px"
      {...rest}
    >
      <Flex h="20" alignItems="center" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Fun Olympic Games
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Flex direction={"column"} gap={5} cursor="pointer">
        <Flex
          justify={"flex-start"}
          align={"center"}
          gap={5}
          onClick={() => navigate("/admin")}
        >
          <IconButton
            icon={<FiHome />}
            bg="none"
            _hover="none"
            _active="none"
            cursor={"pointer"}
          />
          <Text fontWeight={700} fontSize="20px">
            Home
          </Text>
        </Flex>
        <Flex
          justify={"flex-start"}
          align={"center"}
          gap={5}
          onClick={() => navigate("/reset")}
        >
          <IconButton
            icon={<RiLockPasswordFill />}
            bg="none"
            _hover="none"
            _active="none"
            cursor={"pointer"}
          />
          <Text fontWeight={700} fontSize="20px">
            Reset Password
          </Text>
        </Flex>
        <Flex
          justify={"flex-start"}
          align={"center"}
          gap={5}
          onClick={() => navigate("/upload")}
        >
          <IconButton
            icon={<RiVideoUploadFill />}
            bg="none"
            _hover="none"
            _active="none"
            cursor={"pointer"}
          />
          <Text fontWeight={700} fontSize="20px">
            Upload Videos
          </Text>
        </Flex>
        <Flex justify={"flex-start"} align={"center"} gap={5}
            onClick={() => navigate("/dashboard")}
            >
          <IconButton
            icon={<FiSettings />}
            bg="none"
            _hover="none"
            _active="none"
            cursor={"pointer"}
          />
          <Text fontWeight={700} fontSize="20px">
            Go Back
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AdminSidebar;