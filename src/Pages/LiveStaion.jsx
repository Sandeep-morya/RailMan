import React from "react";
import { VStack } from "@chakra-ui/react";
import SetBg from "../Components/SetBg";
import LiveStationImage from '../Assets/live_station.jpg'
import CommingSoon from "../Components/CommingSoon";
const StationStatusComp = () => {
  return (
    <VStack position="relative">
      <SetBg url={LiveStationImage} altText={"LiveStationImage"} />
      <CommingSoon />
    </VStack>
  );
};

export default StationStatusComp;
