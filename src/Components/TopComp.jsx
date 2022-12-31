import React, { useContext } from "react";
import { Container,Box, Divider, useColorMode } from "@chakra-ui/react";
import Header from "./Header";
import Navbar from "./Navbar";
import { MyTheme } from "../Context/ThemeContext";
const TopComp = () => {
 const {colorMode}=useColorMode()
 const theme = useContext(MyTheme);
  return (
    <Container maxW="100%" bg={colorMode === 'light' ? theme.light : theme.dark}>
      <Box w={['full','90%']} m="auto">
        <Header />
        <Divider />
        <Navbar />
      </Box>
    </Container>
  );
};

export default TopComp;
