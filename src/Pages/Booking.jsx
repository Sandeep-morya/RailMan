import React, { useContext, useState } from "react";
import IndiaGateImage from "../Assets/pnr_status.jpg";
import SetBg from "../Components/SetBg";
import {
  Flex,
  Stack,
  useColorMode,
  VStack,
  Input,
  Center,
  Button,
  Spacer,
  Text,
  HStack,
} from "@chakra-ui/react";
import FullSearchBox from "../Components/FullSearchBox";
import { MyTheme } from "../Context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getMonthName, swichQuery } from "../JS/functions";
import { dummyArray } from "../JS/functions";
import { getNextDay } from "../JS/functions";
import { getDayName } from "../JS/functions";
import CommingSoon from "../Components/CommingSoon";

const Booking = () => {
  const { colorMode } = useColorMode();
  const theme = useContext(MyTheme);
  const [query, setQuery] = useState(theme.bookigQuery);
  const [rotate, setRotate] = useState(false);
  const handleSearch = (val) => {
    console.log(val);
  };

  return (
    <VStack position="relative" paddingTop={"2rem"}>
      <SetBg url={IndiaGateImage} altText={"indiagateImage"} />
      <Flex w="90%" justifyContent="space-between"  direction={['column','row']}>
        <Stack
          align="center"
          bg={colorMode === "light" ? theme.light : theme.dark}
          p="1rem"
          borderRadius=".5rem"
        >
          <FullSearchBox
            val={query.origin}
            handleQuery={(e) => setQuery({ ...query, origin: e })}
            placeholder="Enter Origin"
          />
          <Center p=".5rem" bg={theme.btnGrayBg} borderRadius="2rem">
            <FontAwesomeIcon
              color={theme.primary}
              onClick={(e) =>
                swichQuery(query, e, setQuery, setRotate, rotate, "X")
              }
              icon={faRepeat}
            />
          </Center>
          <FullSearchBox
            val={query.destination}
            handleQuery={(e) => setQuery({ ...query, destination: e })}
            placeholder="Enter Destination"
          />
          {dummyArray(2, "spacer").map((e, i) => (
            <Spacer key={e + i} />
          ))}
          <Flex w="full">
            <Input
              colorScheme={theme.schema}
              focusBorderColor={theme.primary}
              w="min-content"
              size="md"
              type="date"
              value={query.date}
              onChange={(e) => setQuery({ ...query, date: e.target.value })}
            />
            <Spacer />
            <Button
              // colorSchema={theme.dimSchema}
              variant="solid"
              onClick={() => setQuery({ ...query, date: getNextDay(1) })}
            >
              {getNextDay(1).slice(-2)} Tommorrow
            </Button>
          </Flex>
          {dummyArray(2, "spacer").map((e, i) => (
            <Spacer key={e + i} />
          ))}
          <Button
            leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
            bg={theme.primary}
            variant="solid"
            w="full"
            onClick={() => handleSearch(query)}
          >
            Search
          </Button>
        </Stack>
        <Spacer />
        <Stack
          bg={colorMode === "light" ? theme.light : theme.dark}
          p="1rem"
          borderRadius=".5rem"
        >
          <Stack justifyContent="space-between"  direction={['column','row']}>
            {dummyArray(6, "btn").map((e, i) => (
              <Button
                p="1.5rem"
                key={e + i}
                bg={theme.primary}
                variant="solid"
                onClick={() =>
                  handleSearch({ ...query, date: getNextDay(i + 2) })
                }
              >
                <Text>
                  {getMonthName(i + 2)} {getNextDay(i + 2).slice(-2)}
                  <br />
                  {getDayName(i + 2)}
                </Text>
              </Button>
            ))}
          </Stack>
        </Stack>
      </Flex>
      <CommingSoon />
    </VStack>
  );
};

export default Booking;
