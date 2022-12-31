import React, { useContext } from 'react'
import { Heading,Stack, useColorMode } from '@chakra-ui/react'
import { MyTheme } from '../Context/ThemeContext';
const Suggestion = ({hidden,list,setterFuc}) => {
    const {colorMode}=useColorMode();
    const theme=useContext(MyTheme)
  return (
    <Stack
            position="absolute"
            w="80%"
            p="1rem"
            top="120%"
            left="10%"
            borderRadius=".5rem"
            hidden={hidden}
            zIndex='2'
            boxShadow="0 0 5px grey"
            bg={colorMode === "light" ? theme.light : theme.dark}
          >
            {list?.map((e,i)=><a onClick={()=>setterFuc(e.join(' - '))} href='#' key={i+Math.random()}>
                {e.join(' - ')}
            </a>)}
          </Stack>
  )
}

export default Suggestion