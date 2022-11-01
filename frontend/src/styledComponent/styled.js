import styled from "styled-components";

export const Boxe = styled.div`
  border-radius: ${(props) => props.br || "5px"};
  border: ${(props) => props.border || "1px solid gray"};
  padding: ${(props) => props.padding || "10px"};
  margin-top: ${(props) => props.margin || "2px"};
  width: ${(props) => props.width || "75vw"};
`;

export const FocusedText = styled.p`
  font-weight: ${(props) => props.fw || "600"};
  font-weight: ${(props) => props.fs || "15px"};
  margin: ${(props) => props.m || "0"};
  @media (max-width: 500px) {
  }
`;
export const RowFlexBox = styled.div`
  display: ${"flex"};
  flex-direction: ${(props) => props.fd || "row"};
  align-items: ${"center"};
  justify-content: ${(props) => props.jc || "none"};
  gap: ${"5px"};
  margin: ${(props) => props.m || "0px"};
  @media (max-width: 500px) {
    flex-direction: ${(props) => props.fd || "column"};
  }
`;
