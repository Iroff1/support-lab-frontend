import { ILogin } from '@models/auth.model';
import client from './client';

// POST /auth/send-code 본인인증 코드 요청
export const authSendCode = async (phone: string) => {
  console.log('본인인증 코드 요청');
  const res = await client.post<{ code: string }>('/auth/send-code', {
    type: 'SIGN_UP_CODE',
    phone: phone,
  });
  return res;
};

// POST /auth/verify-code 본인인증 코드 검증
export const authVerifyCode = async (phone: string, code: string) => {
  console.log('본인인증 코드 검증');
  const res = await client.post<{ data: { status: string } }>(
    '/auth/verify-code',
    {
      type: 'SIGN_UP_CODE',
      phone: phone,
      code: code,
    },
  );
  return res;
};

// POST/auth/login 로그인 요청
export const authLoginUser = async ({ email, password }: ILogin) => {
  console.log('로그인 요청');
  const res = await client.post<{ data: { accessToken: string } }>(
    '/auth/login',
    {
      email: email,
      password: password,
    },
  );
  return res;
};
