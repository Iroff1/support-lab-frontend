export type IBooleanObj<T> = {
  [K in keyof T]: boolean;
};

export type IStringObj<T> = {
  [K in keyof T]: string;
};

export type IResponse<T = any> = {
  code: string;
  status: string;
  message: string;
  body: T;
};
