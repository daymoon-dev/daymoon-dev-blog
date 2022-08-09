interface breakpointProps {
  mobile: number;
  tablet: number;
  desktop: number;
  [index: string]: any;
}

const breakpoint: breakpointProps = {
  mobile: 576,
  tablet: 900,
  desktop: 1280,
};

const mediaQuery = (
  Object.keys(breakpoint) as Array<keyof typeof breakpoint>
).reduce((acc, key) => {
  acc[key] = (style: string) =>
    `@media only screen and (max-width: ${breakpoint[key]}px) { ${style} }`;
  return acc;
}, {} as { [index: string]: Function });

export default mediaQuery;
