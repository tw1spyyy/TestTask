import { PasswordLevelEnum, StrengthLineInt, useBgColorTypes } from "../Utils/Types";
import React from 'react'

export const useBgColor = ({ passwordLevel, id, lineBg }: useBgColorTypes) : string =>{

    return React.useMemo(() => {
        if (passwordLevel === PasswordLevelEnum.none) {
            return "red";
        } else if (id === "1" && passwordLevel !== PasswordLevelEnum.none) {
            return lineBg;
        } else if (id === "2" &&
            passwordLevel !== PasswordLevelEnum.none &&
            passwordLevel !== PasswordLevelEnum.easy) {
            return lineBg;
        } else if (id === "3" && passwordLevel === PasswordLevelEnum.strong) {
            return lineBg;
        } else {
            return "grey";
        }
        
    }, [passwordLevel, id]);

}