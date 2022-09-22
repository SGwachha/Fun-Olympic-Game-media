import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Olympic from "../../images/olympic.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box display="flex" justifyContent="center" gap={3}>
            <Image
              cursor={"pointer"}
              onClick={() => navigate("/")}
              h="100px"
              w="130px"
              src={Olympic}
              alt="olympic"
            />
          </Box>
          <Flex alignItems={"center"}>
            <Stack
              direction={"row"}
              spacing={5}
              align="center"
              justify={"center"}
            >
              <Button
                onClick={() => navigate("/signup")}
                bg="none"
                _hover="none"
                _active="none"
              >
                Sign up
              </Button>
              <span>/</span>
              <Button
                onClick={() => navigate("/login")}
                bg="none"
                _hover="none"
                _active="none"
              >
                Sign in
              </Button>
              <Button onClick={toggleColorMode} _hover="none" _active={"none"}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem onClick={() => navigate("/admin")}>
                    Admin Settings
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/user")}>
                    User Settings
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/")}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
