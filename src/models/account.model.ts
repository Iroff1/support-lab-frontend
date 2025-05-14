export interface IAccount {
  login: ILogin;
  register: IRegister;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
  contact: string;
  personalInfoAgreement: boolean;
  marketingAgreement: boolean;
}
