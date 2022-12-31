import { VStack, Image, HStack, Heading, Spacer } from "@chakra-ui/react";
import TajMahal from "../Assets/tajmahal.jpg";
import TabComp from "../Components/TabComp";
import SetBg from "../Components/SetBg";
import { useContext } from "react";
import { MyTheme } from "../Context/ThemeContext";

const Home = () => {
  const theme = useContext(MyTheme);
  return (
    <VStack position="relative">
      <SetBg url={TajMahal} altText="tajMahalImage" />
      <HStack p="1rem" m="1rem auto">
        <Image
          boxSize="5rem"
          src="https://www.trainman.in/assets/logos/irctc.png"
          alt="irctc_logo"
        />
        <Spacer />
        <Spacer />
        <Heading size={['sm','lg']} color={theme.fixedWhite}>
          IRCTC Authorized Parnter
        </Heading>
      </HStack>
      <Heading p="2rem 0" paddingTop="0" size={['lg','3xl']} color={theme.fixedWhite}>
        EASY TRAIN TICKET BOOKING
      </Heading>
      <TabComp />
    </VStack>
  );
};

export default Home;
