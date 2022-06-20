import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      second: string;
      third: string;
      navElements: string;
    };
  }

  export interface dark {
    colors: {
      primary: string;
      second: string;
      third: string;
      navElements: string;
    };
  }
}
