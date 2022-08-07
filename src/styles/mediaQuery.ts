interface breakpointProps {
  mobile: number;
  tablet: number;
  desktop: number;
  [index: string]: any;
}

const breakpoint: breakpointProps = {
  mobile: 576,
  tablet: 900,
  desktop: 1080,
};

export const mediaQeury = (
  Object.keys(breakpoint) as Array<keyof typeof breakpoint>
).reduce((acc, key) => {
  acc[key] = (style: string) =>
    `@media (max-width: ${breakpoint[key]}px) { ${style} }`;
  return acc;
}, {} as { [index: string]: Function });
