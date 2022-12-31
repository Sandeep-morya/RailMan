import React from "react";
import { VStack } from "@chakra-ui/react";
import SetBg from "../Components/SetBg";
import LiveStationImage from '../Assets/live_station.jpg'
const StationStatusComp = () => {
  return (
    <VStack position="relative">
      <SetBg url={LiveStationImage} altText={"LiveStationImage"} />
    </VStack>
  );
};

export default StationStatusComp;
