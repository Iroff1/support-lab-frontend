import {
  ILocalAuth,
  IRegisterRequest,
  IRegisterResponce,
} from '@models/auth.model';
import client from './client';
import { AxiosRequestConfig } from 'axios';
import { IResponse } from '@models/common.model';

/** POST /api/users/sign-up 회원가입 요청
 * @param formData: 회원가입 폼 데이터 (email, pw, name, phone, terms)
 * @returns 회원가입한 유저 데이터
 */
export const usersSignUp = async (formData: IRegisterRequest) => {
  console.log('회원가입 요청');
  const res = await client.post<IResponse<IRegisterResponce>>(
    '/users/sign-up',
    formData,
  );
  return res;
};

/** GET /api/users/email 아이디 찾기
 * @param name : 회원 명
 * @param phone : 회원 전화 번호
 * @returns 회원 이메일
 */
export const usersFindEmail = async (name: string, phone: string) => {
  console.log('이메일 찾기');
  const res = await client.get<IResponse<{ email: string }>>('/users/email', {
    params: { name: name, phone: phone },
  } as AxiosRequestConfig);
  return res;
};

/** POST /api/users/password 비밀번호 변경 요청
 * @description 비밀번호 변경을 위한 토큰을 발급받음
 * @description 휴대폰 인증이 완료된 상태일 때 사용바람
 */
export const usersModifyPasswordReq = async (auth: ILocalAuth) => {
  console.log('비밀번호 찾기');
  const res = await client.post<{ token: string }>('/users/password', {
    email: auth.email,
    phone: auth.phone,
    name: auth.name,
  });
  return res;
};

/** PATCH /api/users/password 비밀번호 변경 적용
 * @description 발급받은 토큰을 토대로 비밀번호 변경
 */
export const usersModifyPassword = async (token: string, newPw: string) => {
  console.log('비밀번호 변경');
  const res = await client.patch('/users/password', {
    token: token,
    password: newPw,
  });
  return res;
};

/** GET /api/users/me 토큰 복호화 요청 */
export const usersDecryptToken = async (token: string) => {
  console.log('토큰 복호화');
  const res = await client.get<IResponse<ILocalAuth>>('/users/me', {
    headers: {
      Authorization: `Bearer ${token}`,
      withCredentials: true,
    },
  });
  return res;
};

/** GET /api/users/existence 이메일 중복 체크 */
export const usersCheckEmail = async (email: string) => {
  console.log('이메일 중복 체크');
  const res = await client.get<IResponse<{ exists: boolean }>>(
    '/users/existence',
    {
      params: { email: email },
    },
  );
  return res;
};
