import { ILogin } from '@models/auth.model';
import client from './client';
import { IResponse } from '@models/common.model';

export type TRequestCode =
  | 'SIGN_UP_CODE'
  | 'FIND_EMAIL_CODE'
  | 'FIND_PASSWORD_CODE';

// POST /auth/send-code 본인인증 코드 요청
export const authSendCode = async (type: TRequestCode, phone: string) => {
  console.log('본인인증 코드 요청');
  const res = await client.post<{ code: string }>('/auth/send-code', {
    type: type,
    phone: phone,
  });
  return res;
};

// POST /auth/verify-code 본인인증 코드 검증
export const authVerifyCode = async (
  type: TRequestCode,
  phone: string,
  code: string,
) => {
  console.log('본인인증 코드 검증');
  const res = await client.post<IResponse<{ status: string }>>(
    '/auth/verify-code',
    {
      type: type,
      phone: phone,
      code: code,
    },
  );
  return res;
};

// POST/auth/login 로그인 요청
export const authLoginUser = async ({ email, password }: ILogin) => {
  console.log('로그인 요청');
  const res = await client.post<IResponse<{ accessToken: string }>>(
    '/auth/login',
    {
      email: email,
      password: password,
    },
  );
  return res;
};
