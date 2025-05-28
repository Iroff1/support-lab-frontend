import { authGetEmail } from '@api/auth';
import AuthFindEmail from '@components/auth/AuthFindEmail';
import AuthShowEmail from '@components/auth/AuthShowEmail';
import useCheckList from '@hooks/useCheckList';
import { TChangeEventHandler } from '@models/input.model';
import checkValidation from '@utils/checkValidation';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface IFindEmailFormState {
  username: string;
  contact: string;
}

const AuthFindEmailContainer = () => {
  const navigate = useNavigate();
  const [findForm, setFindForm] = useState<IFindEmailFormState>({
    username: '',
    contact: '',
  });
  const [userEmail, setUserEmail] = useState('');
  //   const [userEmail, setUserEmail] = useState('example@naver.com'); // test state;
  const { checkResult, handleCheckList } = useCheckList<IFindEmailFormState>({
    username: false,
    contact: false,
  });

  const handleChangeField: TChangeEventHandler<HTMLInputElement> = (
    e,
    reg,
    max,
  ) => {
    const userInputKey = e.target.name as keyof IFindEmailFormState;
    const userInputValue = !reg
      ? e.target.value
      : max
      ? e.target.value.replace(reg, '').slice(0, max)
      : e.target.value.replace(reg, '');

    // state에 적용
    setFindForm((prev) => ({ ...prev, [userInputKey]: userInputValue }));
  };

  const handleFind = async () => {
    if (!checkResult) return;
    try {
      // TODO) GET auth/email 이메일 정보 요청 비동기 처리 후 이메일 상태 초기화
      const res = await authGetEmail(findForm.username, findForm.contact);
      // setUserEmail(res.data.email);
      // test codes
      alert(res.data);
    } catch (e) {
      console.error(e);
      // test codes
      alert(e);
      setUserEmail('example@naver.com');
    }
  };

  // 유효성 추적
  useEffect(() => {
    handleCheckList('username', checkValidation(findForm.username, 'username'));
  }, [findForm.username]);
  useEffect(() => {
    handleCheckList('contact', checkValidation(findForm.contact, 'contact'));
  }, [findForm.contact]);

  return userEmail.length === 0 ? (
    <AuthFindEmail
      findForm={findForm}
      checkResult={checkResult}
      handleChangeField={handleChangeField}
      handleFind={handleFind}
    />
  ) : (
    <AuthShowEmail
      email={userEmail}
      handleLogin={() => {
        navigate('/auth');
      }}
      handleFindPw={() => {
        navigate('../password');
      }}
    />
  );
};
export default React.memo(AuthFindEmailContainer);
