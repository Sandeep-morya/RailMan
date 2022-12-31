import React from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  useColorMode,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { MyTheme } from "../Context/ThemeContext";
import { Link } from "react-router-dom";
import PnrEnquiry from "../Pages/PnrEnquiry";
const SearchBox = () => {
  const { colorMode } = useColorMode();
  const theme = React.useContext(MyTheme);
  const [err, setErr] = React.useState(false);
  const status = (text) => {
    if (text.length === 10) {
      setErr(false);
    } else {
      setErr(true);
      console.log("Invalid pnr number" + !err);
    }
  };

 

  return (
    <Popover isOpen={err ? true : false}>
      <PopoverTrigger>
        <InputGroup>
          <InputRightElement
            margin=".25rem"
            children={<Link to="/pnr"><SearchIcon  /></Link>}
          />
          <Input
            focusBorderColor="rgb(238,175,0)"
            w={['full','lg']}
            size="lg"
            fontSize="1.1rem"
            variant={colorMode === "light" ? "filled" : "outline"}
            borderRadius="2rem"
            type="text"
            placeholder="Search 'PNR Status' "
            value={theme.pnr}
            color={
              err ? "red" : colorMode === "light" ? theme.dark : theme.light
            }
            onChange={(e) => theme.handleText(e.target.value)}
          />
        </InputGroup>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton onClick={() => setErr(false)} />
        <PopoverBody>Enter a valid Pnr Number</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default SearchBox;
