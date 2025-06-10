import { SerializedError } from '@reduxjs/toolkit';
import { IBooleanObj } from './common.model';

export interface IAuth {
  token: string | null;
  auth: ILocalAuth | null;
  authError: SerializedError | null;
}
/** 사용자 권한 데이터 인터페이스 */
export interface ILocalAuth {
  email: string;
  name: string;
  phone: string;
}
/** 서버에 전송할 login 데이터 인터페이스 */
export interface ILogin {
  email: string;
  password: string;
}
/** register 입력 데이터 인터페이스 */
export interface IRegister extends ILogin {
  name: string;
  phone: string;
}
/** 서버에 전송할 register 선택 데이터 인터페이스 */
export interface ITerms {
  termsOfServiceAgreed: boolean; // true 필수
  privacyPolicyAgreed: boolean; // true 필수
  marketingAgreed: boolean;
}
/** 서버에 전송할 register 데이터 인터페이스 */
export interface IRegisterRequest extends IRegister, ITerms {}

/** 코드레벨에서 필요한 register 상태 데이터를 위한 인터페이스 */
export interface IRegisterState extends IRegister {
  passwordConfirm: string;
  authConfirm: string;
}
export interface IRegisterCheck extends IBooleanObj<IRegisterState> {
  /** 이메일 중복 체크 : true 중복 아님, false 중복 */
  emailConfirm: boolean;
}

export interface INewPassword {
  newPassword: string;
  newPasswordConfirm: string;
}

export interface IConfirm {
  authCode: string;
  authConfirm: string;
}
