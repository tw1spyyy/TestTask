import styled from "styled-components";
import { useBgColor } from "../Hooks/useBgColor";
import { useGetBgColor } from "../Hooks/useGetBgColor";
import { StrengthLineInt } from "../Utils/Types";

const StyledLine = styled.div`
  height: 5px;
  background-color: ${(props) => props.color};
  border-radius: 3px;
  width: 100%;
  margin-bottom: 10px;
`;

export const StrengthLine = ({ passwordLevel, id }: StrengthLineInt) => {
  const lineBg = useGetBgColor(passwordLevel);
  const color = useBgColor({ passwordLevel, id, lineBg });

  return <StyledLine color={color} />;
};
