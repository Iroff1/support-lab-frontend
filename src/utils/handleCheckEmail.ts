import { usersFindEmail } from '@api/user';
import { Dispatch, SetStateAction } from 'react';

/** 이메일 조회 함수 */
const handleCheckEmail = async (
  email: string,
  phone: string,
  setter: Dispatch<SetStateAction<boolean>>,
) => {
  try {
    const res = await usersFindEmail(email, phone);
    if (res.data.email) email === res.data.email && setter(true);
    else setter(false);
  } catch (e) {
    console.log(e);
    setter(false);
    // email === 'example@naver.com' && setter(true); // 테스트 코드
  }
};

export default handleCheckEmail;
