import styled from "styled-components";

export const Half = styled.div`
  width: 50%;
  display: flex;
`;

export default function HalfContainer(content: string) {
  return <Half>{content}</Half>;
}
