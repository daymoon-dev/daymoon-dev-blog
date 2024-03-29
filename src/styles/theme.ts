import { DefaultTheme } from "styled-components";
import mediaQuery from "./mediaQuery";

const light: DefaultTheme = {
  colors: {
    primary: "#F0EEE9",
    second: "#253148",
    third: "#ffffff",
    navElements: "#787878",
  },
};

const dark = {
  colors: {
    primary: "#253148",
    second: "#F0EEE9",
    third: "#000000",
    navElements: "#F0EEE9",
  },
};

const theme = { light, dark, mediaQuery };

export default theme;
