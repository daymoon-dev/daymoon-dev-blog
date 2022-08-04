import { css, CSSProp } from "styled-components";

interface breakpointProps {
  mobile: number;
  tablet: number;
  desktop: number;
}

const breakpoint: breakpointProps = {
  mobile: 540,
  tablet: 768,
  desktop: 1080,
};

const mediaQuery = {
  mobile: (literals: TemplateStringsArray, ...args: string[]): CSSProp =>
    css`
      @media only screen and (max-width: ${breakpoint.mobile}px) {
        ${css(literals, ...args)}
      }
    `,

  tablet: (literals: TemplateStringsArray, ...args: string[]): CSSProp =>
    css`
      @media only screen and (max-width: ${breakpoint.tablet}px) {
        ${css(literals, ...args)}
      }
    `,

  desktop: (literals: TemplateStringsArray, ...args: string[]): CSSProp =>
    css`
      @media only screen and (max-width: ${breakpoint.desktop}px) {
        ${css(literals, ...args)}
      }
    `,
};

export default mediaQuery;
