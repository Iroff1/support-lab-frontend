import { ILogin, IRegisterRequest, ILocalAuth } from '@models/auth.model';
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
  const res = await client.post<{ auth: ILocalAuth }>('/api/auth/login', {
    ...formData,
  });
  return res;
};

// POST/auth 회원가입 요청
export const authRegisterUser = async (formData: IRegisterRequest) => {
  console.log('회원가입 요청');
  const res = client.post('/api/auth/register', { ...formData });
  return res;
};

// GET/auth 아이디 찾기
export const authGetEmail = async (username: string, contact: string) => {
  console.log('이메일 찾기');
  const res = await client.get<{ email: string }>('/api/auth/find/email', {
    params: { username: username, contact: contact },
  });
  return res;
};
