import React from "react";
import {
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import {
  FiHome,
  FiStar,
  FiSettings,
} from "react-icons/fi";
import { BsNewspaper } from "react-icons/bs";	
import { useNavigate } from "react-router-dom";

export default function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box h="100%" w="25%">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 80 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60}}
      pos="fixed"
      h="500px"
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
          onClick={() => navigate("/dashboard")}
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
        <Flex justify={"flex-start"} align={"center"} gap={5}
            onClick={() => navigate("/favourites")}
            >
          <IconButton
            icon={<FiStar />}
            bg="none"
            _hover="none"
            _active="none"
            cursor={"pointer"}
          />
          <Text fontWeight={700} fontSize="20px">
            Favourites
          </Text>
        </Flex>
        <Flex justify={"flex-start"} align={"center"} gap={5}
            onClick={() => navigate("/news")}
            >
          <IconButton
            icon={<BsNewspaper />}
            bg="none"
            _hover="none"
            _active="none"
            cursor={"pointer"}
          />
          <Text fontWeight={700} fontSize="20px">
            News
          </Text>
        </Flex>
        <Flex justify={"flex-start"} align={"center"} gap={5}
            onClick={() => navigate("/user")}
            >
          <IconButton
            icon={<FiSettings />}
            bg="none"
            _hover="none"
            _active="none"
            cursor={"pointer"}
          />
          <Text fontWeight={700} fontSize="20px">
            Settings
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
