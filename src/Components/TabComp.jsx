import React, { useContext, useState } from "react";
import {
  Tabs,
  Input,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Stack,
  Center,
  Button,
  Spacer,
  Container,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullSearchBox from "./FullSearchBox";
import {
  faRightLeft,
  faTrainTram,
  faLocationDot,
  faTrailer,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { getNextDay } from "../JS/functions";
import { MyTheme } from "../Context/ThemeContext";
import { NavLink } from "react-router-dom";
import { swichQuery } from "../JS/functions";
const tabData = [
  { icon: faTrainTram, name: "Search By Station" },
  { icon: faLocationDot, name: "Running Status" },
  { icon: faTrailer, name: "Coach Position" },
];

function TabComp() {
  const { colorMode } = useColorMode();
  const theme = useContext(MyTheme);
  const [query, setQuery] = useState(theme.bookigQuery);
  const [rotate, setRotate] = useState(false);

  
  return (
    <Tabs
      colorScheme={theme.schema}
      overflow="hidden"
      borderRadius="1rem"
      bg={colorMode === "light" ? theme.light : theme.dark}
      w="90%"
      boxShadow="0 0 1rem black"
    >
      <TabList w="full" display="grid" gridTemplateColumns={['1fr','1fr 1fr 1fr']}>
        {tabData.map((e, i) => (
          <Tab fontWeight="500" key={e + i}>
            <Container>
              <FontAwesomeIcon icon={e.icon} />
              <Spacer />
              {e.name}
            </Container>
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        <TabPanel>
          <Stack direction={['column','row']}>
            <FullSearchBox
              val={query.origin}
              handleQuery={(e) => setQuery({ ...query, origin: e })}
              placeholder="Enter Origin"
            />
            <Center p=".5rem" bg={theme.btnGrayBg} borderRadius="2rem">
            <FontAwesomeIcon
              color={theme.primary}
              onClick={(e) =>
                swichQuery(query, e, setQuery, setRotate, rotate, "Y")
              }
              icon={faRightLeft}
            />
          </Center>

            <FullSearchBox
              val={query.destination}
              handleQuery={(e) => setQuery({ ...query, destination: e })}
              placeholder="Enter Destination"
            />
            <Input
              colorScheme={theme.schema}
              focusBorderColor={theme.primary}
              w="min-content"
              size="md"
              type="date"
              value={query.date}
              onChange={(e) => setQuery({ ...query, date: e.target.value })}
            />
            <Button
              colorScheme={theme.dimSchema}
              variant="solid"
              onClick={() =>
                setQuery({ ...query, date: getNextDay(1) })
              }
            >
              Tommorrow
            </Button>
            <NavLink to="/booking">
              <Button
                leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                bg={theme.primary}
                w='full'
                variant="solid"
                onClick={() => theme.handleBookingQuery(query)}
              >
                Search
              </Button>
            </NavLink>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Flex direction={['column','row']}>
            <FullSearchBox
              len={"90%"}
              placeholder="Enter Train Name or Number"
              val={theme.runningQuery}
              handleQuery={(e) => theme.handleRunningQuery(e)}
            />
            <Spacer />
            <NavLink to="/running_status">
              <Button
                leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                colorScheme={theme.schema}
                variant="solid"
                w='full'
              >
                Search
              </Button>
            </NavLink>
          </Flex>
        </TabPanel>
        <TabPanel>
          <Flex  direction={['column','row']}>
            <FullSearchBox
              len={"90%"}
              placeholder="Enter Train Name or Number"
              val={theme.coachQuery}
              handleQuery={(e) => theme.handleCoachQuery(e)}
            />
            <Spacer />
            <NavLink to="/coach_position">
              <Button
                leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                colorScheme={theme.schema}
                variant="solid"
                w='full'
              >
                Search
              </Button>
            </NavLink>
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabComp;
