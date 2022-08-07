import styled from "styled-components";
import { theme } from "../../styles/theme";

type TitlesProps = {
  title: string;
};

export const Main = styled.h1`
  font-size: 6.25em;
  font-weight: 400;
  margin: 0;

  ${theme.mediaQeury.mobile`
    font-size: 4em;
  `}
`;

const Sub = styled.h2`
  margin-bottom: 0.3em;
  font-size: 2.25em;
  font-family: "NanumMyeongjo";
`;

export const MainTitle = ({ title }: TitlesProps) => {
  return <Main className="mainTitle">{title}</Main>;
};

export const SubTitle = ({ title }: TitlesProps) => {
  return <Sub className="subTitle">{title}</Sub>;
};
