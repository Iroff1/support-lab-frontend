import { ILogin, IAuth } from '@models/auth.model';
import client from './client';

// POST /auth/send-code 본인인증 코드 요청
export const authSendCode = async (phone: string) => {
  const res = await client.post<{ authCode: string }>('/api/auth/send-code', {
    type: 'SIGN_UP_CODE',
    phone: phone,
  });
  return res;
};

// POST /auth/verify-code 본인인증 코드 검증
export const authVerifyCode = async (phone: string, code: string) => {
  const res = await client.post<{ authCode: string }>('/api/auth/verify-code', {
    type: 'SIGN_UP_CODE',
    phone: phone,
    code: code,
  });
  return res;
};

// POST/auth/login 로그인 요청
export const authLoginUser = async ({ email, password }: ILogin) => {
  console.log('로그인 요청');
  const res = await client.post<{ accessToken: string }>('/api/auth/login', {
    email: email,
    password: password,
  });
  return res;
};
