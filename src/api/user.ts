import {
  ILocalAuth,
  IRegisterRequest,
  IRegisterResponce,
} from '@models/auth.model';
import client from './client';
import { AxiosRequestConfig } from 'axios';
import { IResponse } from '@models/common.model';

// GET 3
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
/** GET /api/users/me 토큰 복호화 요청 */
export const usersGetAuth = async (token: string) => {
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

// POST 2
/**
 * POST /api/users/sign-up 회원가입 요청
 * @param {IRegisterRequest} formData: 회원가입 폼 데이터
 */
export const usersSignUp = async (formData: IRegisterRequest) => {
  console.log('회원가입 요청');
  const res = await client.post<IResponse<IRegisterResponce>>(
    '/users/sign-up',
    formData,
  );
  return res;
};
/**
 * POST /api/users/password 비밀번호 변경 요청
 * @description 비밀번호 변경을 위한 토큰을 발급받음 (휴대폰 인증이 완료된 상태일 때만 작동)
 * @param {string} email 사용자 이메일
 * @param {string} phone 사용자 전화번호
 * @param {string} name 사용자 이름(닉네임)
 * @returns {string} 비밀번호 변경 요청 토큰
 */
export const usersModifyPasswordReq = async (
  email: string,
  phone: string,
  name: string,
) => {
  console.log('비밀번호 찾기');
  const res = await client.post<IResponse<{ token: string }>>(
    '/users/password',
    {
      email: email,
      phone: phone,
      name: name,
    },
  );
  return res;
};

// PATCH 1
/**
 * PATCH /api/users/password 비밀번호 변경 적용
 * @description 발급받은 토큰을 토대로 비밀번호 변경
 * @param {string} token 비밀번호 변경 요청을 통해 발급받은 토큰
 * @param {string} newPw 새로 변경할 비밀번호
 */
export const usersModifyPassword = async (token: string, newPw: string) => {
  console.log('비밀번호 변경');
  const res = await client.patch<IResponse>('/users/password', {
    token: token,
    password: newPw,
  });
  return res;
};

// DELETE 1
/**
 * DELETE /api/users/me 회원 탈퇴
 * @description 발급된 액세스 토큰을 통하여 회원 탈퇴를 진행 (성공 시 200)
 * @param {string} accessToken 상태에서 유지중인 액세스 토큰
 * @param {string} password 사용자 비밀번호
 */
export const usersDeleteAuth = async (
  accessToken: string,
  password: string,
) => {
  console.log('회원 삭제');
  const res = await client.delete<IResponse>('/users/me', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      withCredentials: true,
    },
    data: { accessToken: accessToken, password: password },
  });
  return res;
};
