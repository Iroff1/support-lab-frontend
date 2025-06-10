import AuthFindPassword from '@components/auth/AuthFindPassword';
import useCheckList from '@hooks/useCheckList';
import React, { useEffect, useState } from 'react';
import checkValidation from '@utils/checkValidation';
import handleChangeField from '@utils/handleChangeField';
import handleGetAuthCode from '@utils/handleGetAuthCode';
import { IRegister } from '@models/auth.model';
import { usersModifyPasswordReq, usersFindEmail } from '@api/user';
import handleAuthCheck from '@utils/handleAuthCheck';

export interface IFindPassword {
  email: string;
  name: string;
  phone: string;
  authConfirm: string;
}

interface IProp {
  handleEmail: (email: string) => void;
}

const AuthFindPasswordContainer: React.FC<IProp> = ({ handleEmail }) => {
  const [findForm, setFindForm] = useState<IFindPassword>({
    email: '',
    name: '',
    phone: '',
    authConfirm: '',
  });
  const { checkList, modifyCheckList, checkResult } =
    useCheckList<IFindPassword>({
      email: false,
      name: false,
      phone: false,
      authConfirm: false,
    });
  const [confirmEmail, setConfirmEmail] = useState(false);

  /** InputForValidation[name="authConfirm"] 컴포넌트의 onClick에 할당할 콜백 함수 */
  const handleAuthConfirm = async () => {
    handleAuthCheck(findForm.phone, findForm.authConfirm, modifyCheckList);
  };

  /** 유효성 체크 함수 */
  const handleValidCheck = (key: keyof IFindPassword) => {
    const result = checkValidation(findForm[key], key as keyof IRegister);
    modifyCheckList(key, result);
  };

  /** 이메일 조회 함수 */
  const handleCheckEmail = async () => {
    try {
      const res = await usersFindEmail(findForm.email, findForm.phone);
      if (res.data.data.email)
        findForm.email === res.data.data.email && setConfirmEmail(true);
    } catch (e) {
      console.log(e);
      findForm.email === 'example@naver.com' && setConfirmEmail(true); // 테스트 코드
    }
  };

  /** SubmitButton에 할당할 onClick 핸들러 함수 */
  const handleFindPassword = async () => {
    if (!(checkResult && confirmEmail)) return;
    try {
      // TODO) GET auth/password 비밀번호 정보 요청 비동기 처리 후 이메일 상태 초기화
      const res = await usersModifyPasswordReq({
        email: findForm.email,
        phone: findForm.phone,
        name: findForm.name,
      });
      if (res.status === 200) {
        alert('비밀번호 찾기 완료!');
        handleEmail(findForm.email);
      }
    } catch (e) {
      e;

      console.log(findForm); // test code
      handleEmail(findForm.email);
    }
  };

  useEffect(() => {
    if (checkList.email) handleCheckEmail();
  }, [checkList.email]);
  useEffect(() => {
    handleValidCheck('name');
  }, [findForm.name]);

  return (
    <AuthFindPassword
      findForm={findForm}
      confirmEmail={confirmEmail}
      checkList={checkList}
      handleChangeField={(e, reg, max) => {
        handleChangeField<IFindPassword>(e, setFindForm, reg, max);
      }}
      handleAuthStart={async () => {
        await handleGetAuthCode(findForm.phone);
      }}
      handleAuthConfirm={handleAuthConfirm}
      handleFindPassword={handleFindPassword}
      handleCheckEmail={handleCheckEmail}
      handleValidCheck={handleValidCheck}
    />
  );
};

export default React.memo(AuthFindPasswordContainer);
