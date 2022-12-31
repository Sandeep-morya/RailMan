import React, { useContext, useEffect, useState } from "react";
import {
  VStack,
  Center,
  Input,
  Button,
  useColorMode,
  Stack,
  Box,
} from "@chakra-ui/react";
import SetBg from "../Components/SetBg";
import trainBetween from "../Assets/train_between.jpg";
import FullSearchBox from "../Components/FullSearchBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightLeft,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { swichQuery, switchBetween } from "../JS/functions";
import { MyTheme } from "../Context/ThemeContext";
import { getNextDay } from "../JS/functions";
import { getStaions } from "../JS/api";
import Suggestion from "../Components/Suggestion";
import CommingSoon from "../Components/CommingSoon";

const TrainBetween = () => {
  const { colorMode } = useColorMode();
  const theme = useContext(MyTheme);

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [qDate, setQdate] = useState(getNextDay(0));
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);

  const [rotate, setRotate] = useState(false);
  const [err1, setErr1] = useState(true);
  const [err2, setErr2] = useState(true);

  const handleClick = () => {
    console.log({
      origin: origin.split(" - "),
      destination: destination.split(" - "),
      date: qDate,
    });
  };
  const setData = (setErr, setList, setFunc, data) => {
    setFunc(data);
    setList([]);
    setErr(false);
  };

  useEffect(() => {
    setList2([]);
    if (origin.length > 1 && err1) {
      getStaions(origin)
        .then((e) => setList1(e.data))
        .catch((e) => console.log(e));
    }
    if (origin.length < 2) {
      setErr1(true);
      setList1([]);
    }
  }, [origin]);
  useEffect(() => {
    setList1([]);
    if (destination.length > 1 && err2) {
      getStaions(destination)
        .then((e) => setList2(e.data))
        .catch((e) => console.log(e));
    }
    if (destination.length < 2) {
      setErr2(true);
      setList2([]);
    }
  }, [destination]);
  return (
    <VStack position="relative">
      <SetBg url={trainBetween} altText={"lalkila"} />
      <Stack
        padding="1rem"
        borderRadius=".5rem"
        bg={colorMode === "light" ? theme.light : theme.dark}
        direction={['column','row']}
        w={['95%','80%']}
      >
        <Box position="relative">
          <FullSearchBox
            val={origin}
            handleQuery={(e) => setOrigin(e)}
            placeholder="Enter Origin"
          />
          <Suggestion
            hidden={!list1.length > 0}
            list={list1}
            setterFuc={(e) => setData(setErr1, setList1, setOrigin, e)}
          />
        </Box>
        <Center p=".5rem" bg={theme.btnGrayBg} borderRadius="2rem">
          <FontAwesomeIcon
            onClick={(e) =>
              switchBetween(
                e,
                origin,
                destination,
                rotate,
                setOrigin,
                setDestination,
                setRotate,
                "Y"
              )
            }
            color={theme.primary}
            icon={faRightLeft}
          />
        </Center>

        <Box position="relative">
          <FullSearchBox
            val={destination}
            handleQuery={(e) => setDestination(e)}
            placeholder="Enter Destination"
          />
          <Suggestion
            hidden={!list2.length > 0}
            list={list2}
            setterFuc={(e) => setData(setErr2, setList2, setDestination, e)}
          />
        </Box>
        <Input
          colorScheme={theme.schema}
          focusBorderColor={theme.primary}
          w="min-content"
          size="md"
          type="date"
          value={qDate}
          onChange={(e) => setQdate(e.target.value)}
        />
        <Button
          leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          bg={theme.primary}
          variant="solid"
          onClick={handleClick}
        >
          Search
        </Button>
      </Stack>
      <CommingSoon />
    </VStack>
  );
};

export default TrainBetween;
