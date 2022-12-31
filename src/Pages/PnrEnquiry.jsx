import {
  VStack,
  Flex,
  Button,
  Heading,
  Spacer,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useColorMode,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import SetBg from "../Components/SetBg";
import PnrStatusImage from "../Assets/pnr_status.jpg";
import { dummyArray } from "../JS/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullSearchBox from "../Components/FullSearchBox";
import { faTrain, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { MyTheme } from "../Context/ThemeContext";
import { getPnrStaus } from "../JS/api";
import PnrResult from "../Components/PnrResult";

const PnrEnquiry = () => {
  const { colorMode } = useColorMode();
  const theme = useContext(MyTheme);
  const [err, setErr] = React.useState(false);
  const [hidden, setHidden] = React.useState(true);
  const [pnrInfo, setPnrInfo] = React.useState({});

  const handleClick = (pnr) => {
    if (pnr.length === 10) {
      getPnrStaus(pnr)
        .then((e) => {
            setHidden(false);
            setErr(false);
            setPnrInfo(e.data.data);
        })
        .catch((e) => {
          setErr(true);
          setHidden(true);
        });
    } else {
      setErr(true);
      setHidden(true);
    }
  };
  useEffect(() => {
    handleClick(theme.pnr);
  }, []);

  return (
    <VStack position="relative">
      <SetBg url={PnrStatusImage} altText={"PnrStatusImage"} />
      {err ? (
        <Alert
          bg={colorMode === "light" ? theme.light : theme.dark}
          borderRadius=".5rem"
          w="25%"
          status="warning"
        >
          <AlertIcon />
          <AlertTitle m=".75rem 0">Provide a Valid PNR Number !</AlertTitle>
          <CloseButton onClick={() => setErr(false)} />
        </Alert>
      ) : (
        dummyArray(10, "spacer").map((e, i) => <Spacer key={e + i} />)
      )}
      <Flex
        w="80%"
        p="1rem"
        borderRadius=".3rem"
        bg={colorMode === "light" ? theme.light : theme.dark}
      >
        <FullSearchBox
          len={"85%"}
          placeholder="Enter Your 10 Digit PNR Number"
          val={theme.pnr}
          handleQuery={(e) => theme.handleText(e)}
          type="number"
        />
        <Spacer />
        <Button
          leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          colorScheme={theme.schema}
          variant="solid"
          onClick={() => handleClick(theme.pnr)}
        >
          Search
        </Button>
      </Flex>

      {dummyArray(5, "spacer").map((e, i) => (
        <Spacer key={e + i} />
      ))}

      <Alert
        status="warning"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="300px"
        w="60%"
        borderRadius=".5rem"
        hidden={!hidden}
        bg={colorMode === "light" ? theme.light : theme.dark}
      >
        <FontAwesomeIcon icon={faTrain} fontSize="5rem" />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Enter Your 10 Digit PNR Number
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          In order to check your <br /> PNR or Reservation status,
          <br /> Please ! Enter your PNR number.
        </AlertDescription>
      </Alert>

      <VStack
        borderRadius=".3rem"
        maxW="80%"
        bg={colorMode === "light" ? theme.light : theme.dark}
        boxShadow="0 0 1rem black"
        overflow="hidden"
        hidden={hidden}
      >
        <Spacer />
        <Heading
          p="1rem"
          size="md"
          w="full"
          textAlign="center"
          // bg="rgba(238,175,0,0.8)"
          color={theme.fixedGray}
        >
          Passanger's Current PNR Status Enquiry For : {theme.pnr}
        </Heading>

        <PnrResult data={pnrInfo}/>
      </VStack>
    </VStack>
  );
};

export default PnrEnquiry;
