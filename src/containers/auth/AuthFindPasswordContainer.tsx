import { authGetPassword } from '@api/auth';
import AuthFindPassword from '@components/auth/AuthFindPassword';
import useCheckList from '@hooks/useCheckList';
import { TChangeEventHandler } from '@models/input.model';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface IFindPasswordFormState {
  email: string;
  username: string;
  contact: string;
  authConfirm: string;
}

const AuthFindPasswordContainer = () => {
  const navigate = useNavigate();
  const [findForm, setFindForm] = useState<IFindPasswordFormState>({
    email: '',
    username: '',
    contact: '',
    authConfirm: '',
  });
  const [userPw, setUserPw] = useState('');
  const { checkResult, handleCheckList } = useCheckList<IFindPasswordFormState>(
    {
      email: false,
      username: false,
      contact: false,
      authConfirm: false,
    },
  );

  /** input 컴포넌트들에 할당할 onChange 핸들러 함수 */
  const handleChangeField: TChangeEventHandler<HTMLInputElement> = (
    e,
    reg,
    max,
  ) => {
    const userInputKey = e.target.name as keyof IFindPasswordFormState;
    const userInputValue = !reg
      ? e.target.value
      : max
      ? e.target.value.replace(reg, '').slice(0, max)
      : e.target.value.replace(reg, '');
    // state에 적용
    setFindForm((prev) => ({ ...prev, [userInputKey]: userInputValue }));
  };

  /** SubmitButton에 할당할 onClick 핸들러 함수 */
  const handleFindPassword = async () => {
    if (!checkResult) return;
    try {
      // TODO) GET auth/password 비밀번호 정보 요청 비동기 처리 후 이메일 상태 초기화
      const res = await authGetPassword(findForm.email);
      //   setUserPw(res.data.password);
      // test codes
      alert(res.data);
    } catch (e) {
      console.error(e);
      // test codes
      alert(e);
      setUserPw('aa1234');
    }
  };

  useEffect(() => {});

  return (
    <AuthFindPassword
      findForm={findForm}
      checkResult={checkResult}
      handleChangeField={handleChangeField}
      handleFindPassword={handleFindPassword}
    />
  );
};

export default React.memo(AuthFindPasswordContainer);
