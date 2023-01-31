export interface StrengthProps {
    passwordLevel: string
}
export interface isPasswordValid {
    minChar: boolean,
    includesNumbers: boolean,
    includesSymbols: boolean,
    includesLetters: boolean
}

export enum PasswordLevelEnum {
    none = 'enter at least 8 characters',
    easy = 'easy',
    medium = 'medium',
    strong = 'strong',
}
export interface StrengthLineInt {
    passwordLevel: string,
    id:string
}

export interface useBgColorTypes {
    passwordLevel: string,
    id:string,
    lineBg: string
}
export interface FormInt {
    password: string,
    onChangePassword :(password: string) => void ,
    isPasswordValid : isPasswordValid
}