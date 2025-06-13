import AuthFindPassword from '@components/auth/AuthFindPassword';
import useCheckList from '@hooks/useCheckList';
import React, { useEffect, useState } from 'react';
import checkValidation from '@utils/checkValidation';
import handleChangeField from '@utils/handleChangeField';
import handleGetAuthCode from '@utils/handleGetAuthCode';
import { IRegister } from '@models/auth.model';
import { usersModifyPasswordReq, usersCheckEmail } from '@api/user';
import handleAuthCheck from '@utils/handleAuthCheck';
import { StatusCodes } from 'http-status-codes';

export interface IFindPassword {
  email: string;
  name: string;
  phone: string;
  authConfirm: string;
}

interface IProp {
  handlePasswordToken: (token: string) => void;
}

const AuthFindPasswordContainer: React.FC<IProp> = ({
  handlePasswordToken,
}) => {
  const [findForm, setFindForm] = useState<IFindPassword>({
    email: '',
    name: '',
    phone: '',
    authConfirm: '',
  });
  const { checkList, modifyCheckList, checkResult } = useCheckList<
    IFindPassword & { emailConfirm: boolean }
  >({
    email: false,
    emailConfirm: false,
    name: false,
    phone: false,
    authConfirm: false,
  });

  /** InputForValidation[name="authConfirm"] 컴포넌트의 onClick에 할당할 콜백 함수 */
  const handleAuthConfirm = async () => {
    try {
      await handleAuthCheck(
        'FIND_PASSWORD_CODE',
        findForm.phone,
        findForm.authConfirm,
        modifyCheckList,
      );
    } catch (e) {
      console.log(e);
    }
  };

  /** 유효성 체크 함수 */
  const handleValidCheck = (key: keyof IFindPassword) => {
    const result = checkValidation(findForm[key], key as keyof IRegister);
    modifyCheckList(key, result);
  };

  /** 이메일 조회 함수 */
  const handleCheckEmail = async () => {
    try {
      const res = await usersCheckEmail(findForm.email);
      modifyCheckList('emailConfirm', res.data.body.exists);
    } catch (e) {
      console.log(e);
    }
  };

  /** SubmitButton에 할당할 onClick 핸들러 함수 */
  const handleFindPassword = async () => {
    if (!checkResult) return;
    try {
      // TODO) GET auth/password 비밀번호 정보 요청 비동기 처리 후 이메일 상태 초기화
      const res = await usersModifyPasswordReq(
        findForm.email,
        findForm.name,
        findForm.phone,
      );
      if (res.data.code === StatusCodes.OK + '') {
        handlePasswordToken(res.data.body.token);
      } else throw res;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    handleValidCheck('email');
  }, [findForm.email]);
  useEffect(() => {
    handleValidCheck('name');
  }, [findForm.name]);
  useEffect(() => {
    if (checkList.authConfirm) handleValidCheck('phone');
  }, [checkList.authConfirm]);

  return (
    <AuthFindPassword
      findForm={findForm}
      checkList={checkList}
      checkResult={checkResult}
      handleChangeField={(e, reg, max) => {
        handleChangeField<IFindPassword>(e, setFindForm, reg, max);
      }}
      handleAuthStart={async () => {
        await handleGetAuthCode('FIND_PASSWORD_CODE', findForm.phone);
      }}
      handleAuthConfirm={handleAuthConfirm}
      handleFindPassword={handleFindPassword}
      handleCheckEmail={handleCheckEmail}
      handleValidCheck={handleValidCheck}
    />
  );
};

export default React.memo(AuthFindPasswordContainer);
