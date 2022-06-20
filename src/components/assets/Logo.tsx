import styled from "styled-components";

export default function Logo({ children }: any) {
  const LogoContainer = styled.span`
    font-size: 20px;
    padding: 0;
    margin: 0;
    flex: 1;

    font-family: "Inter", sans-serif;
    font-weight: 400;

    a {
      color: ${(props) => props.theme.colors.second};
    }
  `;
  return <LogoContainer>{children}</LogoContainer>;
}
