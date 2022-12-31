import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ThemeContextProvider from "./Context/ThemeContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ThemeContextProvider>
  </BrowserRouter>
);
