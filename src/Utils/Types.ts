export interface StrengthProps {
    password : string
    isPasswordValid: isPasswordValid
}
export interface isPasswordValid {
    minChar: boolean,
    includesNumbers: boolean,
    includesSymbols: boolean,
    includesLetters: boolean
}

export enum PasswordLevelEnum {
    none = 'none',
    easy = 'easy',
    medium = 'medium',
    strong = 'strong',
}