import { ILogin } from '@models/auth.model';
import client from './client';
import { IResponse } from '@models/common.model';

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
  const res = await client.post<IResponse<{ status: string }>>(
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
  const res = await client.post<IResponse<{ accessToken: string }>>(
    '/auth/login',
    {
      email: email,
      password: password,
    },
  );
  return res;
};

/** POST /api/auth/email-check 이메일 중복 확인 요청
 *
 * 중복인 경우 true, 중복 아닌 경우 false
 */
export const authEmailCheckDuplication = async (email: string) => {
  console.log('이메일 중복 확인');
  const res = await client.post<IResponse<{ value: boolean }>>(
    '/auth/email-check',
    {
      email: email,
    },
  );
  return res;
};
