import { SerializedError } from '@reduxjs/toolkit';

export type IAuthChecker<T> = {
  [K in keyof T]: boolean;
};

export interface IAuth {
  login: ILogin;
  register: IRegisterState;
  auth: ILogin | IRegisterRequest | {};
  authError: SerializedError;
}

/** 서버에 전송할 login 데이터 인터페이스 */
export interface ILogin {
  email: string;
  password: string;
}

/** 유효성 검사를 위한 login 상태 데이터 인터페이스 */
export interface ILoginState extends ILogin {
  error: SerializedError | null;
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
export interface IRegisterAgreement {
  personalInfoAgreement: boolean; // 필수 체크 항목
  marketingAgreement: boolean;
}

/** 서버에 전송할 register 데이터 인터페이스 */
export interface IRegisterRequest extends IRegister, IRegisterAgreement {}

/** 코드레벨에서 필요한 register 상태 데이터를 위한 인터페이스 */
export interface IRegisterState extends IRegister, IRegisterAgreement {
  passwordConfirm: string;
  authCode: string;
  authConfirm: string;
  error: SerializedError | null;
  isValid: IAuthChecker<IRegister>;
}
