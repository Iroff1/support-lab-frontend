export type IBooleanObj<T> = {
  [K in keyof T]: boolean;
};

export type IStringObj<T> = {
  [K in keyof T]: string;
};

export interface IResponse<T = any> {
  code: string;
  status: string;
  message: string;
  body: T;
}

export interface IResError {
  code: string;
  desc: string;
  message: string;
  timestamp: string;
}
