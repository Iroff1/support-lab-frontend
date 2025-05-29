import { authRegisterUser } from '@api/auth';
import AuthRegisterForm from '@components/auth/AuthRegisterForm';
import useCheckList from '@hooks/useCheckList';
import useInit from '@hooks/useInit';
import { IRegister, IRegisterState } from '@models/auth.model';
import { TFormEventHandler, TMouseEventHandler } from '@models/input.model';
import { useAppDispatch, useAppSelector } from '@store/index';
import { termsActions } from '@store/terms';
import checkValidation from '@utils/checkValidation';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import handleChangeField from '@utils/handleChangeField';
import handleAuthStart from '@utils/handleGetAuthCode';

const AuthRegisterFormContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const terms = useAppSelector(({ terms }) => terms);
  const [registerForm, setRegisterForm] = useState<IRegisterState>({
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
    contact: '',
    authCode: '',
    authConfirm: '',
  });
  const { checkList, modifyCheckList, checkResult } = useCheckList<IRegister>({
    email: false,
    password: false,
    username: false,
    contact: false,
  });
  const { isInit, startInit: initComponent } = useInit();
  const [confirmState, setConfirmState] = useState(false);

  /** checkList 유효성 갱신 함수 */
  const handleCheckValid = (key: keyof IRegister) => {
    const result = checkValidation(registerForm[key], key);
    modifyCheckList(key, result);
  };

  /** authConfirm 할당할 콜백 함수 */
  const handleAuthConfirm: TMouseEventHandler<HTMLButtonElement> = () => {
    if (
      registerForm.authCode.length === 6 &&
      registerForm.authCode === registerForm.authConfirm
    ) {
      setConfirmState(true);
      modifyCheckList('contact', true);
    }
  };

  /** register 입력 폼 submit 이벤트 핸들러 */
  const handleSubmit: TFormEventHandler = async (e) => {
    e.preventDefault();
    try {
      // TODO) 비동기 요청 (PUT auth/register)
      const res = await authRegisterUser({ ...registerForm, ...terms });
      if (res.status === 200) {
        alert('회원가입 완료!');
        navigate('/');
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    initComponent();
    // 필수 약관 상태 false인 경우, 다시 약관페이지로 리다이렉트
    if (!(terms.termsOfUse && terms.personalInfo)) navigate('../termsOfUse');
  }, []);
  useEffect(() => {
    if (!isInit) return;
    return () => {
      // 컴포넌트 렌더링 종료 시
      dispatch(termsActions.initialState());
    };
  }, [isInit]);
  useEffect(() => {
    handleCheckValid('password');
  }, [registerForm.password]);
  useEffect(() => {
    handleCheckValid('username');
  }, [registerForm.username]);

  return (
    <AuthRegisterForm
      registerState={registerForm}
      checkList={checkList}
      confirmAuth={confirmState}
      isReady={checkResult && confirmState} // 모든 정규표현식 통과 + 본인인증 완료
      handleChange={(e, reg, max) => {
        handleChangeField<IRegisterState>(e, setRegisterForm, reg, max);
      }}
      handleAuthStart={async () => {
        await handleAuthStart<IRegisterState>(
          registerForm.contact,
          setRegisterForm,
        );
      }}
      handleAuthConfirm={handleAuthConfirm}
      handleSubmit={handleSubmit}
      handleValidCheck={handleCheckValid}
    />
  );
};

export default React.memo(AuthRegisterFormContainer);
