import React from "react";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain, faXmark } from "@fortawesome/free-solid-svg-icons";
import { MyTheme } from "../Context/ThemeContext";
const FullSearchBox = ({type, len, placeholder, val, handleQuery }) => {
  const handleText = (data) => {
    handleQuery(data);
  };
  const theme = React.useContext(MyTheme);
  return (
    <InputGroup w={len ? len : ['full',"25rem"]}>
      <InputLeftElement
        pointerEvents="none"
        color={theme.primary}
        children={<FontAwesomeIcon icon={faTrain} />}
      />
      <Input
        focusBorderColor={theme.primary}
        type={type || "text"}
        value={val}
        onChange={(e) => handleText(e.target.value)}
        placeholder={placeholder}
      />
      <InputRightElement
        onClick={() => handleText("")}
        color={theme.primary}
        children={<FontAwesomeIcon icon={faXmark} />}
      />
    </InputGroup>
  );
};

export default FullSearchBox;
