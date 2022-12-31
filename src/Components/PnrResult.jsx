import React, { useContext } from "react";
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
} from "@chakra-ui/react";
import arrows from "../Assets/arrows.png";
import { MyTheme } from "../Context/ThemeContext";

const PnrResult = ({ data }) => {
  const theme = useContext(MyTheme);
  if (!data?.boardingInfo) {
    return <></>;
  }
  return (
    <Stack w="full">
      <SimpleGrid w="full" columns="3" placeItems="center">
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
      <Spacer />
      <Spacer />
      <Center><Heading size='sm' color={theme.fixedGray}>ALL STATIONS OF - {data.trainInfo.trainNo}{' '}{data.trainInfo.name}</Heading></Center>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>List No.</Th>
              <Th>Station Name</Th>
              <Th>Arrival Time</Th>
              <Th>Departure</Th>
              <Th>Halt</Th>
              <Th>Day No.</Th>
              <Th>Distance</Th>
              <Th>Platform</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.trainRoutes.map((e,i)=>(<Tr key={i+e.stationId}>
                <Td textAlign='center'>{i+1}</Td>
                <Td>{e.stationName}</Td>
                <Td>{i===0?'Start':e.arrivalTime.slice(0,5)}</Td>
                <Td>{i===data?.trainRoutes.length-1?'End':e.departureTime.slice(0,5)}</Td>
                <Td>{e.haltTime}</Td>
                <Td>{e.travellingDay}</Td>
                <Td>{e.distance} kms</Td>
                <Td>{e.platform}</Td>
            </Tr>))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default PnrResult;
