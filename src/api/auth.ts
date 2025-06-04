import {
  ILogin,
  IRegisterRequest,
  IAuth,
  ILocalAuth,
} from '@models/auth.model';
import client from './client';

// GET/auth 본인인증 코드 요청
export const authGetCode = async (contact: string) => {
  const res = await client.get<{ authCode: string }>('/api/auth', {
    params: { contact: contact },
  });

  return res;
};

// POST/auth 로그인 요청
export const authLoginUser = async (formData: ILogin) => {
  console.log('로그인 요청');
  const res = await client.post<IAuth>('/api/auth/login', {
    ...formData,
  });
  return res;
};

/** POST/auth 회원가입 요청 */
export const authRegisterUser = async (formData: IRegisterRequest) => {
  console.log('회원가입 요청');
  const res = client.post('/api/auth/register', { ...formData });
  return res;
};

/** GET/auth 아이디 찾기 */
export const authGetEmail = async (username: string, contact: string) => {
  console.log('이메일 찾기');
  const res = await client.get<{ email: string }>('/api/auth/find/email', {
    params: { username: username, contact: contact },
  });
  return res;
};

/** GET/auth 아이디 체크 */
export const authCheckEmail = async (email: string) => {
  console.log('이메일 체크');
  const res = await client.get<{ email: string }>('/api/auth/check/email', {
    params: { email: email },
  });
  return res;
};

/** GET/auth 비밀번호 찾기 */
export const authFindPassword = async (email: string) => {
  console.log('비밀번호 찾기');
  const res = await client.get<{ password: string }>(
    '/api/auth/find/password',
    {
      params: { email: email },
    },
  );
  return res;
};

/** PUT/auth 비밀번호 재설정 요청 */
export const authUpdatePassword = async (email: string, password: string) => {
  console.log('비밀번호 재설정');
  const res = await client.put('/api/auth/find/password', { email, password });
  return res;
};

/** GET/auth 토큰 복호화 요청 */
export const authDecryptToken = async (token: string) => {
  console.log('토큰 복호화');
  const res = await client.get<ILocalAuth>('/api/auth/decrypt', {
    params: { token: token },
  });
  return res;
};
