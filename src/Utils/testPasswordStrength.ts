import { isPasswordValid, PasswordLevelEnum } from "./Types";

export const testPasswordStrength = (isPasswordValid: isPasswordValid, password: string): string => {
    if (
      isPasswordValid.includesSymbols &&
      isPasswordValid.includesNumbers &&
      isPasswordValid.minChar &&
      isPasswordValid.includesLetters
    ) {
      return PasswordLevelEnum.strong;
    } else if (
      isPasswordValid.minChar && (((isPasswordValid.includesSymbols && isPasswordValid.includesNumbers)) ||
      ((isPasswordValid.includesSymbols && isPasswordValid.includesLetters)) || 
      ((isPasswordValid.includesLetters && isPasswordValid.includesNumbers)))
      
    ) {
      return PasswordLevelEnum.medium;
    } else if (isPasswordValid.minChar) {
      return PasswordLevelEnum.easy;
    } else if (password.length) {
      return PasswordLevelEnum.none;
    } else {
        return ''
    }
  };