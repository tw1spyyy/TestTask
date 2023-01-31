import React from "react";
import { FormInt } from "../Utils/Types";
import { StrengthSections } from "./StrengthSections";
import styled from "styled-components";
import { testPasswordStrength } from "../Utils/testPasswordStrength";
import { getBgColor } from "../Utils/getBgColor";

const FormInner = styled.div`
  margin-top: -300px;
  padding: 20px 10px;
  border-radius: 10px;

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
  font-size: 18px;
  padding: 5px 15px;
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

export const Form = ({
  password,
  onChangePassword,
  isPasswordValid,
}: FormInt) => {
  const passwordLevel = testPasswordStrength(isPasswordValid, password);

  return (
    <FormInner>
      <FormTitle>Test Password Strength</FormTitle>
      <div className="form">
        <FormInput
          type="password"
          value={password}
          onChange={(e) => onChangePassword(e.target.value)}
          placeholder="Password"
        />
        <StrengthSections passwordLevel={passwordLevel} />
        <PasswordLevelDiv color={getBgColor(passwordLevel)}>
          {passwordLevel}
        </PasswordLevelDiv>
      </div>
    </FormInner>
  );
};
