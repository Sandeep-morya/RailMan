import {
  Box,
  Heading,
  Image,
  Center,
  Text,
  Button,
  Switch,
  HStack,
} from "@chakra-ui/react";
import SearchBox from "../Components/SearchBox";
import React, { useContext, useState } from "react";
import logo from "../Assets/my_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";

import {
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "@chakra-ui/react";
import Login from "./Login";

import { useColorMode } from "@chakra-ui/react";
import { MyTheme } from "../Context/ThemeContext";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {colorMode, toggleColorMode } = useColorMode();
  const theme = useContext(MyTheme);
  const handleCheck = () => {
    toggleColorMode();
  };
  return (
    <Center
      display="flex"
      justifyContent="space-between"
      direction="row"
      w="full"
      p=".5rem"
    >
      <NavLink to="/">
        <Center display="flex" gap=".5rem">
          <Image borderRadius="1.1rem" boxSize="4rem" src={logo} alt="logo" />
          <Heading size="xl">RAILMAN</Heading>
        </Center>
      </NavLink>
      <Box>
        <SearchBox />
      </Box>

      <HStack>
        <Heading size="sm" cursor="pointer">
          Dark Mode
        </Heading>
        <Switch
          isChecked={colorMode === 'light'? false : true}
          onChange={handleCheck}
          colorScheme={theme.dimSchema}
        />
      </HStack>
      <Button
        rightIcon={<FontAwesomeIcon icon={faUser} />}
        bg={theme.primary}
        variant="solid"
        onClick={onOpen}
      >
        Login
      </Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Login />
          </ModalBody>

          <ModalFooter>
            <Button bg={theme.primary} mr={3}>
              Login
            </Button>
            <Button onClick={onClose} colorScheme={theme.dimSchema}>
              Register
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default Header;
