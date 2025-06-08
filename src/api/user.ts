import { ILocalAuth, IRegisterRequest } from '@models/auth.model';
import client from './client';

/** POST /api/users/sign-up 회원가입 요청 */
export const usersSignUp = async (formData: IRegisterRequest) => {
  console.log('회원가입 요청');
  console.log(formData);
  const res = client.post<{ code: string }>('/users/sign-up', formData);
  return res;
};

/** GET /api/users/email 아이디 찾기 */
export const usersFindEmail = async (name: string, phone: string) => {
  console.log('이메일 찾기');
  const res = await client.get<{ email: string }>('/users/email', {
    params: { name: name, phone: phone },
  });
  return res;
};

/** POST /api/users/password 비밀번호 변경 요청
 *
 * 비밀번호 변경을 위한 토큰을 발급받음
 *
 * 휴대폰 인증이 완료된 상태일 때 사용바람
 */
export const userModifyPasswordReq = async (auth: ILocalAuth) => {
  console.log('비밀번호 찾기');
  const res = await client.post<{ token: string }>('/users/password', {
    email: auth.email,
    phone: auth.phone,
    name: auth.name,
  });
  return res;
};

/** PATCH /api/users/password 비밀번호 변경 적용
 *
 * 발급받은 토큰을 토대로 비밀번호 변경
 */
export const usersModifyPassword = async (token: string, newPw: string) => {
  console.log('비밀번호 찾기');
  const res = await client.patch('/users/password', {
    token: token,
    password: newPw,
  });
  return res;
};

/** GET/auth 토큰 복호화 요청 */
export const authDecryptToken = async (token: string) => {
  console.log('토큰 복호화');
  const res = await client.get<ILocalAuth>('/auth/decrypt', {
    params: { token: token },
  });
  return res;
};
