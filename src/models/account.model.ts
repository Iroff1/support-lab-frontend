export type IAuthChecker<T> = {
  [K in keyof T]: boolean;
};

export interface ILogin {
  email: string;
  password: string;
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
}
