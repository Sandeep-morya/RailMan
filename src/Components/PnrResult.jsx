import React, { useContext, useEffect } from "react";
import {
  Stack,
  Flex,
  Text,
  Spacer,
  Heading,
  SimpleGrid,
  Image,
  Center,
  useColorMode,
  Table,
  Tr,
  Thead,
  Tbody,
  TableContainer,
  Th,
  Td,
  Tfoot,
  TableCaption,
  Container,
  Button,
} from "@chakra-ui/react";
import arrows from "../Assets/arrows.png";
import { MyTheme } from "../Context/ThemeContext";
import { useNavigate } from "react-router-dom";


const PnrResult = ({ data }) => {
  const theme = useContext(MyTheme);
  const navigate=useNavigate();
  
  const sendData=()=>{
    theme.handleData(data)
    setTimeout(() => {
      navigate('/trainRoute')
    }, 1000);
  }
  if (!data?.boardingInfo) {
    return <></>;
  }

  return (
    <Stack w="full">
      <SimpleGrid w="full" columns={[1,3]} placeItems="center">
        <Stack>
          <Heading color={theme.fixedGray} size="sm">
            From
          </Heading>
          <Heading color={theme.primary} size="md">
            {data.boardingInfo.stationName}-{data.boardingInfo.stationCode}
          </Heading>
          <Text>{data.boardingInfo.departureTime.slice(0, 5)}</Text>
          <Text> Platform No: {data.boardingInfo.platform}</Text>
        </Stack>
        <Center position="relative">
          <Text textAlign="center" position={"absolute"} top="20%">
            {data.trainInfo.trainNo}-{data.trainInfo.name}
          </Text>
          <Image w="full" src={arrows} alt="a" />
          <Text textAlign="center" position={"absolute"} bottom="25%">
            {data.destinationInfo.distance} Kms
          </Text>
        </Center>
        <Stack>
          <Heading color={theme.fixedGray} size="sm">
            To
          </Heading>
          <Heading color={theme.primary} size="md">
            {data.destinationInfo.stationName}-
            {data.destinationInfo.stationCode}
          </Heading>

          <Text>{data.destinationInfo.departureTime.slice(0, 5)}</Text>

          <Text> Platform No: 2</Text>
        </Stack>
      </SimpleGrid>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Passanger List</Th>
              <Th>Current Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.passengerInfo.map((e, i) => (
              <Tr key={e.currentCoach + i}>
                <Td>Passanger No.{i + 1}</Td>
                <Td>
                  {e.currentCoach}/{e.currentBerthNo}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Center>
        <Button w='full' onClick={sendData}>
          <Heading size='sm' color={theme.fixedGray}>
            ALL STATIONS OF - {data.trainInfo.trainNo} {data.trainInfo.name}
          </Heading>
        </Button>
      </Center>
    </Stack>
  );
};

export default PnrResult;
