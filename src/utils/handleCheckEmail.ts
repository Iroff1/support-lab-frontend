import { authCheckEmail } from '@api/auth';
import { Dispatch, SetStateAction } from 'react';

/** 이메일 조회 함수 */
const handleCheckEmail = async (
  email: string,
  setter: Dispatch<SetStateAction<boolean>>,
) => {
  try {
    const res = await authCheckEmail(email);
    if (res.data.email) email === res.data.email && setter(true);
  } catch (e) {
    console.log(e);
    email === 'example@naver.com' && setter(true); // 테스트 코드
  }
};

export default handleCheckEmail;
