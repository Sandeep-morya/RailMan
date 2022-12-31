import React from "react";
import { Image } from "@chakra-ui/react";

const SetBg = ({ url, altText }) => {
  return (
    <Image
      top={[0,'-10rem']}
      zIndex="-1"
      position="absolute"
      w={['','full']}
      h={['50rem','']}
      filter="contrast(60%) brightness(70%)"
      src={url}
      alt={altText}
    />
  );
};

export default SetBg;
