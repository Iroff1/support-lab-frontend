export type IAuthChecker<T> = {
  [K in keyof T]: boolean;
};

export type IResponse<T = null> = {
  code: string;
  status: string;
  message: string;
  body: T;
};
