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
    if (res.data.body.email) email === res.data.body.email && setter(true);
    else setter(false);
  } catch (e) {
    console.log(e);
    setter(false);
  }
};

export default handleCheckEmail;
