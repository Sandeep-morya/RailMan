import { Stack } from "@chakra-ui/react";
import React from "react";
import TopComp from "./Components/TopComp";
import AllRoutes from "./Routes/AllRoutes";


const App = () => {
  return (
    <Stack>
      <TopComp />
      <AllRoutes />
    </Stack>
  );
};

export default App;
