import React from "react";
import { Form } from "./components/Form";
import { isPasswordValid } from "./Utils/Types";

const NumbersReg = /\d/;
const LettersReg = /[A-Za-z]/;
const SymbolsReg = /[ !@#$%^&*()_+\[\]{};':"\\|,.<>\/?]/;

export const App = () => {
  const [password, setPassword] = React.useState("");
  const [isPasswordValid, setIsPasswordValid] = React.useState<isPasswordValid>(
    {
      minChar: false,
      includesNumbers: false,
      includesSymbols: false,
      includesLetters: false,
    }
  );

  const onChangePassword = (password: string) => {
    setPassword(password);
    setIsPasswordValid({
      minChar: password.length >= 8,
      includesNumbers: NumbersReg.test(password),
      includesSymbols: SymbolsReg.test(password),
      includesLetters: LettersReg.test(password),
    });
  };

  return (
    <Form
      password={password}
      onChangePassword={onChangePassword}
      isPasswordValid={isPasswordValid}
    />
  );
};
