export interface IAuthError {
  [key: string]: string;
}

export interface ILogin {
  email: string;
  password: string;
  error: IAuthError;
}

export interface IRegisterReq extends ILogin {
  username: string;
  contact: string;
  personalInfoAgreement: boolean;
  marketingAgreement: boolean;
}

export interface IRegisterForm extends IRegisterReq {
  passwordConfirm: string;
  contactAuth: boolean;
  error: IAuthError;
}
