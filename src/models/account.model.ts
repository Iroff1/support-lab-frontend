import { SerializedError } from '@reduxjs/toolkit';

export type IAuthChecker<T> = {
  [K in keyof T]: boolean;
};

/** 서버에 전송할 login 데이터 인터페이스 */
export interface ILogin {
  email: string;
  password: string;
}

/** 유효성 검사를 위한 login 상태 데이터 인터페이스 */
export interface ILoginState extends ILogin {
  error: SerializedError | null;
}

export interface IRegisterAuth extends IAuthChecker<IRegister> {}

/** 서버에 전송할 register 데이터 인터페이스 */
export interface IRegister extends ILoginState {
  username: string;
  contact: string;
  personalInfoAgreement: boolean;
  marketingAgreement: boolean;
}

/** 유효성 검사를 위한 register 상태 데이터 인터페이스 */
export interface IRegisterState extends IRegister {
  passwordConfirm: string;
  authRes: string;
  authConfirm: string;
  authStatus: boolean;
  error: SerializedError | null;
}
