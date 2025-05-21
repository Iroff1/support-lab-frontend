import { ILogin, IRegisterRequest } from '@models/auth.model';
import client from './client';

export const authGetCode = async (contact: string) => {
  return client.get<{ text: string }>('/api/auth', {
    params: { contact: contact },
  });
};

export const authLoginUser = async (formData: ILogin) => {
  console.log('로그인 요청');
  return client.post('/api/auth/login', { ...formData });
};

export const authRegisterUser = async (formData: IRegisterRequest) => {
  console.log('회원가입 요청');
  return client.post('/api/auth/register', { ...formData });
};
