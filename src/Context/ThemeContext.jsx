import { useColorMode } from "@chakra-ui/react";
import React, { createContext, useState } from "react";
import { getNextDay } from "../JS/functions";
export const MyTheme = createContext();
const ThemeContextProvider = ({ children }) => {
  const [pnr, setPnr] = useState("");

  const [bookigQuery, setBookingQuery] = useState({
    origin: "",
    destination: "",
    date: getNextDay(0),
  });
  const [runningQuery, setRunningQuery] = useState("");
  const [coachQuery, setCoachQuery] = useState("");
  const theme = {
    dark: "rgba(0,0,0,0.95)",
    light: "rgb(255,255,255)",
    primary: "rgb(238, 175, 0)",
    dimPrimary: "rgba(238,175,0,0.7)",
    schema: "yellow",
    dimSchema: "gray",
    fixedWhite: "rgb(255,255,255)",
    fixedGray: "gray",
    btnGrayBg:'rgba(192, 186, 186, 0.2)',
    pnr,
    handleText: (e) => setPnr(e),
    bookigQuery,
    handleBookingQuery: (e) => setBookingQuery(e),
    runningQuery,
    handleRunningQuery: (e) => setRunningQuery(e),
    coachQuery,
    handleCoachQuery: (e) => setCoachQuery(e),
  };
  return <MyTheme.Provider value={theme}>{children}</MyTheme.Provider>;
};

export default ThemeContextProvider;
