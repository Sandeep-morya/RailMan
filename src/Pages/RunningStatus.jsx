import React, { useContext, useEffect, useState, useRef } from "react";
import {
  VStack,
  Flex,
  Spacer,
  Button,
  useColorMode,
  Container,
  TableContainer,
  Table,
  Th,
  Tr,
  Td,
  Thead,
  Tbody,
  Spinner,
} from "@chakra-ui/react";
import SetBg from "../Components/SetBg";
import runnig_status from "../Assets/running_status.jpg";
import FullSearchBox from "../Components/FullSearchBox";
import { dummyArray } from "../JS/functions";
import { MyTheme } from "../Context/ThemeContext";
import axios from "axios";
const RunningStatus = () => {
  const { colorMode } = useColorMode();
  const theme = useContext(MyTheme);
  const [list, setList] = useState([]);
  const [err, setErr] = useState(true);
  const [loader, setLoader] = useState(false);
  const getClasses=(val)=>{
    if(Array.isArray(val)){
      return val;
    }
    return [val];
  }
  const getRunnigDays = (obj) => {
    let arr = [];
    for (let key in obj) {
      if (obj[key] === 1) {
        arr.push(key);
      }
    }
    return arr.length===7?['Daily']:arr;
  };
  let id = useRef();
  useEffect(() => {
    setLoader(true);
    const options = {
      method: "POST",
      url: "https://trains.p.rapidapi.com/",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "25a08ff1ecmshb0e013342682ff5p1df7bbjsn9bf370586ba4",
        "X-RapidAPI-Host": "trains.p.rapidapi.com",
      },
      data: `{"search":"${theme.runningQuery}"}`,
    };
    id.current = setTimeout(() => {
      if (id) {
        clearTimeout(id);
      }
      axios
        .request(options)
        .then((e) => {
          if (e.data.length > 0) {
            setList(e.data);
            setErr(false);
            setLoader(false);
            console.log(e.data);
          } else {
            setErr(true);
          }
        })
        .catch(() => {
          setErr(true);
          setLoader(false);
        });
    }, 500);
  }, [theme.runningQuery]);
  return (
    <VStack position="relative">
      <SetBg url={runnig_status} altText={"runnig"} />
      <Flex
        w="90%"
        p="1rem"
        direction="column"
        borderRadius=".3rem"
        bg={colorMode === "light" ? theme.light : theme.dark}
      >
        <FullSearchBox
          len={"full"}
          placeholder="Enter Train Name or Number (minimum 5 characters)"
          val={theme.runningQuery}
          handleQuery={(e) => theme.handleRunningQuery(e)}
        />
        <TableContainer marginTop="1rem">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Train Number</Th>
                <Th>Train Name</Th>
                <Th>From</Th>
                <Th>To</Th>
                <Th>Classes</Th>
                <Th>Runs on</Th>
              </Tr>
            </Thead>
            <Tbody>
              {!err ? (
                list.map((e) => (
                  <Tr key={e.data.id}>
                    <Td>{e.train_num}</Td>
                    <Td>{e.name}</Td>
                    <Td>
                      {e.data?.departTime}-{e.train_from}
                    </Td>
                    <Td>
                      {e.data?.arriveTime?.slice(0, 5)}-{e.train_to}
                    </Td>
                    <Td>{getClasses(e.data.classes).join('-')}</Td>
                    <Td>{getRunnigDays(e.data.days).join("-")}</Td>
                  </Tr>
                ))
              ) : (
                <Tr>
                  <Td colSpan="6" textAlign="center">
                    {loader ?(
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color={theme.primary}
                        size="xl"
                      />
                    ) : (
                      "No Results Found"
                    )}
                  </Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </VStack>
  );
};

export default RunningStatus;
