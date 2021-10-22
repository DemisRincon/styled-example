import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: ${({ row }) => (row ? "row" : "column")};
`;

export const Container = styled(FlexBox)`
  background-color: red;
  height: 50vh;
`;
