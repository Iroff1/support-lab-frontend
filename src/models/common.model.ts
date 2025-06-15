export type IBooleanObj<T> = {
  [K in keyof T]: boolean;
};

export type IStringObj<T> = {
  [K in keyof T]: string;
};

/**
 * @description API측에서 지정한 res.data의 객체 타입
 * @property {string} code 상태 코드
 * @property {string} status 상태 코드 타입
 * @property {string} message 상태 메세지
 * @property {T} body 응답 데이터 객체 타입(제네릭)
 */
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
