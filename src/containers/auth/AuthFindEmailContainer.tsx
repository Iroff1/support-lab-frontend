import { usersFindEmail } from '@api/user';
import AuthFindEmail from '@components/auth/AuthFindEmail';
import AuthShowEmail from '@components/auth/AuthShowEmail';
import useCheckList from '@hooks/useCheckList';
import useInit from '@hooks/useInit';
import { IRegister } from '@models/auth.model';
import checkValidation from '@utils/checkValidation';
import handleChangeField from '@utils/handleChangeField';
import handleAuthStart from '@utils/handleGetAuthCode';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface IFindEmailFormState {
  name: string;
  phone: string;
  authCode: string;
  authConfirm: string;
}

const AuthFindEmailContainer = () => {
  const navigate = useNavigate();
  const [findForm, setFindForm] = useState<IFindEmailFormState>({
    name: '',
    phone: '',
    authCode: '',
    authConfirm: '',
  });
  const { checkList, modifyCheckList } = useCheckList<IFindEmailFormState>({
    name: false,
    phone: false,
    authCode: false,
    authConfirm: false,
  });
  const { isInit, startInit } = useInit();
  const [confirmAuth, setConfirmAuth] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  //   const [, setUserEmail] = useState('example@naver.com'); // test state;

  /** SubmitButton에 할당할 onClick 핸들러 함수 */
  const handleFindEmail = async () => {
    if (!checkList.name || !checkList.phone) return;
    try {
      // TODO) GET auth/email 이메일 정보 요청 비동기 처리 후 이메일 상태 초기화
      const res = await usersFindEmail(findForm.name, findForm.phone);
      setUserEmail(res.data.email);
      // test codes
      alert(res.data);
    } catch (e) {
      console.error(e);
      // test codes
      alert(e);
      // setUserEmail('example@naver.com');
    }
    startInit();
  };

  /** authConfirm 입력 태그에 할당할 콜백 함수 */
  const handleAuthConfirm = () => {
    if (
      findForm.authCode.length === 6 &&
      findForm.authCode === findForm.authConfirm
    ) {
      setConfirmAuth(true);
      modifyCheckList('phone', true);
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
    console.log(findForm.name);
  }, [findForm.name]);

  return !isInit ? (
    <AuthFindEmail
      findForm={findForm}
      checkResult={checkList.name && checkList.phone}
      checkList={checkList}
      confirmAuth={confirmAuth}
      handleChangeField={(e, reg, max) => {
        handleChangeField<IFindEmailFormState>(e, setFindForm, reg, max);
      }}
      handleFindEmail={handleFindEmail}
      handleAuthStart={async () => {
        await handleAuthStart(findForm.phone);
      }}
      handleAuthConfirm={handleAuthConfirm}
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
