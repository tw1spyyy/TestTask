import React from "react";
import { getBgColor } from "../Utils/getBgColor";
import { testPasswordStrength } from "../Utils/testPasswordStrength";
import { PasswordLevelEnum, StrengthProps } from "../Utils/Types";
import { StrengthLine } from "./StrengthLine";

export const StrengthSections = ({
  password,
  isPasswordValid,
}: StrengthProps) => {
  const passwordLevel = testPasswordStrength(isPasswordValid, password);
  console.log(passwordLevel);

  const lineBg = getBgColor(passwordLevel);

  const getFirstLineBg = () => {
    if (passwordLevel === PasswordLevelEnum.none) {
      return "red";
    } else if (passwordLevel !== PasswordLevelEnum.none) {
      return lineBg;
    } else {
      return "grey";
    }
  };

  const getSecondLineBg = () => {
    if (passwordLevel === PasswordLevelEnum.none) {
      return "red";
    } else if (
      passwordLevel !== PasswordLevelEnum.none &&
      passwordLevel !== PasswordLevelEnum.easy
    ) {
      return lineBg;
    } else {
      return "grey";
    }
  };

  const getThirdLineBg = () => {
    if (passwordLevel === PasswordLevelEnum.none) {
      return "red";
    } else if (passwordLevel === PasswordLevelEnum.strong) {
      return lineBg;
    } else {
      return "grey";
    }
  };

  return (
    <div className="strength ">
      <div className="strength__item">
        {/* <div
          className={`strength__line ${
            passwordLevel === PasswordLevelEnum.none ? "strength__line-red" : ""
          }`}
          style={{
            backgroundColor: `${
              passwordLevel !== PasswordLevelEnum.none ? lineBg : "grey"
            }`,
          }}
        ></div> */}
        <StrengthLine color={getFirstLineBg()} />
        {/* <div className="strength__state">{passwordLevel}</div> */}
      </div>
      <div className="strength__item">
        {/* <div
          className={`strength__line ${
            passwordLevel === PasswordLevelEnum.none ? "strength__line-red" : ""
          }`}
          style={{
            backgroundColor: `${
              passwordLevel !== PasswordLevelEnum.none &&
              passwordLevel !== PasswordLevelEnum.easy
                ? lineBg
                : "grey"
            }`,
          }}
        ></div>
        <div className="strength__state">{passwordLevel}</div> */}
        <StrengthLine color={getSecondLineBg()} />
      </div>
      <div className="strength__item">
        {/* <div
          className={`strength__line ${
            passwordLevel === PasswordLevelEnum.none ? "strength__line-red" : ""
          }`}
          style={{
            backgroundColor: `${
              passwordLevel === PasswordLevelEnum.strong ? lineBg : "grey"
            }`,
          }}
        ></div>
        <div className="strength__state">{passwordLevel}</div> */}
        <StrengthLine color={getThirdLineBg()} />
      </div>
    </div>
  );
};
