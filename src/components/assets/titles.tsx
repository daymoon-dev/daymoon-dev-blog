import { Main, Sub } from "./styles/titles.style";

type TitlesProps = {
  title: string;
};

export const MainTitle = ({ title }: TitlesProps) => {
  return <Main className="mainTitle">{title}</Main>;
};

export const SubTitle = ({ title }: TitlesProps) => {
  return <Sub className="subTitle">{title}</Sub>;
};
