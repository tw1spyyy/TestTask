import React from "react";
import styled from "styled-components";

const StyledLine = styled.div`
  height: 5px;
  background-color: ${(props) => props.color};
  border-radius: 3px;
  width: 100%;
`;

export const StrengthLine = ({ color }: { color: string }) => {
  return <StyledLine color={color} />;
};
