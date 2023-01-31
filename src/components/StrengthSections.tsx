import { StrengthProps } from "../Utils/Types";
import { StrengthLine } from "./StrengthLine";

export const StrengthSections = ({ passwordLevel }: StrengthProps) => {
  return (
    <div className="strength ">
      <StrengthLine passwordLevel={passwordLevel} id="1" />
      <StrengthLine passwordLevel={passwordLevel} id="2" />
      <StrengthLine passwordLevel={passwordLevel} id="3" />
    </div>
  );
};
