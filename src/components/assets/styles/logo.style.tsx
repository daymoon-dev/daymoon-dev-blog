import styled from "styled-components";

const LogoContainer = styled.span`
  font-size: 20px;
  padding: 0;
  margin: 0;
  flex: 1;

  font-family: "Pretendard", sans-serif;
  font-weight: 400;

  a {
    color: ${(props) => props.theme.colors.second};
  }
`;

export { LogoContainer };
