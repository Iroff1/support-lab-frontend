import { usersFindEmail } from '@api/user';
import AuthFindEmail from '@components/auth/AuthFindEmail';
import AuthShowEmail from '@components/auth/AuthShowEmail';
import useCheckList from '@hooks/useCheckList';
import useInit from '@hooks/useInit';
import { IRegister } from '@models/auth.model';
import { IBooleanObj } from '@models/common.model';
import { TChangeEventHandler } from '@models/input.model';
import checkValidation from '@utils/checkValidation';
import handleAuthCheck from '@utils/handleAuthCheck';
import handleChangeField from '@utils/handleChangeField';
import handleGetAuthCode from '@utils/handleGetAuthCode';
import translateAxiosError from '@utils/translateAxiosError';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IFindEmailFormState {
  name: string;
  phone: string;
  authConfirm: string;
}

export interface IAuthFindForm {
  findForm: IFindEmailFormState;
  checkList: IBooleanObj<IFindEmailFormState>;
  checkResult: boolean;
  handleChangeField: TChangeEventHandler<HTMLInputElement>;
  handleFindEmail: () => Promise<void>;
  handleAuthStart: () => Promise<void>;
  handleAuthConfirm: () => Promise<void>;
}

const AuthFindEmailContainer = () => {
  const navigate = useNavigate();
  const [findForm, setFindForm] = useState<IFindEmailFormState>({
    name: '',
    phone: '',
    authConfirm: '',
  });
  const { checkList, modifyCheckList, checkResult } =
    useCheckList<IFindEmailFormState>({
      name: false,
      phone: false,
      authConfirm: false,
    });
  const { isInit, startInit } = useInit();
  const [userEmail, setUserEmail] = useState('');

  /** SubmitButton에 할당할 onClick 핸들러 함수 */
  const handleFindEmail = async () => {
    if (!checkList.name || !checkList.phone) return;
    try {
      // TODO) GET auth/email 이메일 정보 요청 비동기 처리 후 이메일 상태 초기화
      const res = await usersFindEmail(findForm.name, findForm.phone);
      res.data.body.email !== null && setUserEmail(res.data.body.email);
    } catch (e) {
      translateAxiosError(e);
    }
    startInit();
  };

  /** authConfirm 입력 태그에 할당할 콜백 함수 */
  const handleAuthConfirm = async () => {
    try {
      await handleAuthCheck(
        'FIND_EMAIL_CODE',
        findForm.phone,
        findForm.authConfirm,
        modifyCheckList,
      );
    } catch (e) {
      console.log(e);
    }
  };

  /** checkList 유효성 갱신 함수 */
  const handleCheckValid = (key: keyof IFindEmailFormState) => {
    const result = checkValidation(findForm[key], key as keyof IRegister);
    modifyCheckList(key, result);
  };

  // 유효성 추적
  useEffect(() => {
    handleCheckValid('name');
  }, [findForm.name]);
  useEffect(() => {
    if (checkList.authConfirm) handleCheckValid('phone');
  }, [checkList.authConfirm]);

  return !isInit ? (
    <AuthFindEmail
      findForm={findForm}
      checkList={checkList}
      checkResult={checkResult}
      handleChangeField={(e, reg, max) => {
        handleChangeField<IFindEmailFormState>(e, setFindForm, reg, max);
      }}
      handleAuthStart={async () => {
        await handleGetAuthCode('FIND_EMAIL_CODE', findForm.phone);
      }}
      handleAuthConfirm={handleAuthConfirm}
      handleFindEmail={handleFindEmail}
    />
  ) : userEmail.length !== 0 ? (
    <AuthShowEmail
      email={userEmail}
      handleLeftBtn={() => {
        navigate('/auth');
      }}
      handleRightBtn={() => {
        navigate('/auth/find/password');
      }}
    />
  ) : (
    <AuthShowEmail
      email={userEmail}
      handleLeftBtn={() => {
        navigate('/auth/register');
      }}
      handleRightBtn={() => {
        navigate('/');
      }}
    />
  );
};
export default React.memo(AuthFindEmailContainer);
