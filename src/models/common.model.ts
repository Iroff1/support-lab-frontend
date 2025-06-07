export type IAuthChecker<T> = {
  [K in keyof T]: boolean;
};
