import React from "react";
import { StrengthSections } from "./components/StrengthSections";
import "./css/form.css";
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
  console.log(isPasswordValid);

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
    <div className="form__inner">
      <h2 className="form__title">Test Password Strength</h2>
      <div className="form">
        <input
          type="password"
          value={password}
          onChange={(e) => onChangePassword(e.target.value)}
          className="form__input"
          placeholder="Password"
        />
        <StrengthSections
          isPasswordValid={isPasswordValid}
          password={password}
        />
      </div>
    </div>
  );
};
