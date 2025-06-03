import { SerializedError } from '@reduxjs/toolkit';

export type IAuthChecker<T> = {
  [K in keyof T]: boolean;
};

export interface IAuth {
  login: ILogin;
  auth: ILocalAuth | null;
  authError: SerializedError | null;
}

/** 사용자 권한 데이터 인터페이스 */
export interface ILocalAuth {
  username: string;
  token: string;
}

/** 서버에 전송할 login 데이터 인터페이스 */
export interface ILogin {
  email: string;
  password: string;
}

export interface IRegisterAuth extends IAuthChecker<IRegister> {
  passwordConfirm: boolean;
  authConfirm: boolean;
}

/** register 입력 데이터 인터페이스 */
export interface IRegister extends ILogin {
  username: string;
  contact: string;
}

/** 서버에 전송할 register 선택 데이터 인터페이스 */
export interface ITerms {
  termsOfUse: boolean; // true 필수
  personalInfo: boolean; // true 필수

  marketing: boolean;
  // otherInfo: boolean;
  // businessPlan: boolean;
}

/** 서버에 전송할 register 데이터 인터페이스 */
export interface IRegisterRequest extends IRegister, ITerms {}

/** 코드레벨에서 필요한 register 상태 데이터를 위한 인터페이스 */
export interface IRegisterState extends IRegister {
  emailDuplication: boolean;
  passwordConfirm: string;
  authCode: string;
  authConfirm: string;
}

export interface IChangePassword {
  password: string;
  passwordConfirm: string;
}
