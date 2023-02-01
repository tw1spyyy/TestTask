import React from "react";
import { FormInt } from "../Utils/Types";
import { StrengthSections } from "./StrengthSections";
import styled from "styled-components";
import { useTestPasswordStrength } from "../Hooks/useTestPasswordStrength";
import { useGetBgColor } from "../Hooks/useGetBgColor";

const FormInner = styled.div`
  padding: 20px 10px;
  border-radius: 10px;
  margin: -300px 10px 0px 10px;

  -webkit-box-shadow: 1px 2px 9px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 2px 9px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 2px 9px -1px rgba(0, 0, 0, 0.75);

  width: 500px;
`;
const FormTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;
const FormInput = styled.input`
  outline: none;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid #ced6e0;
  transition: all 0.3s ease-in-out;
  font-size: 15px;
  padding: 5px 45px 5px 15px;
  background: none;
  margin-bottom: 10px;
  :hover {
    border-color: #3d9cff;
  }
  :focus {
    border-color: #3d9cff;
  }
`;
const PasswordLevelDiv = styled.div`
  color: ${(props) => props.color};
  text-align: right;
  margin-top: -6px;
  font-weight: 600;
`;
const PasswordEyeImg = styled.img`
  position: absolute;
  width: 25px;
  height: 25px;
  right: 9px;
  top: 8px;
  cursor: pointer;
`;

export const Form = ({
  password,
  onChangePassword,
  isPasswordValid,
}: FormInt) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const passwordLevel = useTestPasswordStrength(isPasswordValid, password);

  return (
    <FormInner>
      <FormTitle>Test Password Strength</FormTitle>
      <div className="form" style={{ position: "relative" }}>
        <FormInput
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => onChangePassword(e.target.value)}
          placeholder="Password"
        />
        <PasswordEyeImg
          src={showPassword ? "eye.png" : "hide.png"}
          onMouseDown={() => setShowPassword(true)}
          onMouseUp={() => setShowPassword(false)}
        />
        <StrengthSections passwordLevel={passwordLevel} />
        <PasswordLevelDiv color={useGetBgColor(passwordLevel)}>
          {passwordLevel}
        </PasswordLevelDiv>
      </div>
    </FormInner>
  );
};
