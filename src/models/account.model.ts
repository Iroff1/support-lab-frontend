export interface IAuthError {
  [key: string]: string;
}

export interface ILogin {
  email: string;
  password: string;
  error: IAuthError;
}

export interface IRegister extends ILogin {
  username: string;
  passwordConfirm: string;
  contact: string;
  personalInfoAgreement: boolean;
  marketingAgreement: boolean;
  error: IAuthError;
}
