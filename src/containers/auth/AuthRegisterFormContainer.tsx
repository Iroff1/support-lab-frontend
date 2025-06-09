import AuthRegisterForm from '@components/auth/AuthRegisterForm';
import useCheckList from '@hooks/useCheckList';
import useInit from '@hooks/useInit';
import { IRegister, IRegisterCheck, IRegisterState } from '@models/auth.model';
import {
  TChangeEventHandler,
  TFormEventHandler,
  TMouseEventHandler,
} from '@models/input.model';
import { useAppDispatch, useAppSelector } from '@store/index';
import { termsActions } from '@store/terms';
import checkValidation from '@utils/checkValidation';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import handleChangeField from '@utils/handleChangeField';
import handleGetAuthCode from '@utils/handleGetAuthCode';
import { usersSignUp } from '@api/user';
import { authVerifyCode, authEmailCheckDuplication } from '@api/auth';
import { IAuthChecker } from '@models/common.model';
import translateAxiosError from '@utils/translateAxiosError';

export interface IAuthRegisterForm {
  registerState: IRegisterState;
  checkList: IAuthChecker<IRegisterCheck>;
  isReady: boolean;

  handleChange: TChangeEventHandler<HTMLInputElement>;
  handleAuthStart: () => Promise<void>;
  handleAuthConfirm: TMouseEventHandler<HTMLButtonElement>;
  handleSubmit: TFormEventHandler;
  handleCheckEmail: () => Promise<void>;
}

const AuthRegisterFormContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const terms = useAppSelector(({ terms }) => terms);
  const [registerForm, setRegisterForm] = useState<IRegisterState>({
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    phone: '',
    authConfirm: '',
  });
  const { checkList, modifyCheckList, checkResult } =
    useCheckList<IRegisterCheck>({
      email: false,
      emailConfirm: false,
      password: false,
      passwordConfirm: false,
      name: false,
      phone: false,
      authConfirm: false,
    }); // 입력 필드 유효성 체크 리스트
  const { isInit, startInit } = useInit();
  const [isReady, setIsReady] = useState(false); // 모든 정규표현식 통과 + 본인인증 완료 + 약관 동의

  /** 입력 필드 별 checkList 유효성 갱신 함수 */
  const handleValidCheck = (key: keyof IRegister) => {
    const result = checkValidation(registerForm[key], key);
    modifyCheckList(key, result);
  };
  /** 이메일 조회 함수 */
  const handleCheckEmail = async () => {
    if (checkList.emailConfirm) return; // 이미 체크된 이메일인 경우 조회 안함
    try {
      // TODO) 비동기 요청 (POST auth/email-check)
      const res = await authEmailCheckDuplication(registerForm.email);
      if (res.data.data.value) {
        modifyCheckList('emailConfirm', false);
      } else {
        modifyCheckList('emailConfirm', true);
      }
    } catch (e) {
      translateAxiosError(e);
      if (registerForm.email === 'example@naver.com') {
        modifyCheckList('emailConfirm', false);
      } else {
        modifyCheckList('emailConfirm', true);
      }
    }
    console.log(checkList.email, checkList.emailConfirm);
  };
  /** 본인인증 시작 함수 */
  const handleAuthStart = async () => {
    await handleGetAuthCode(registerForm.phone);
  };
  /** authConfirm에 할당할 콜백 함수 */
  const handleAuthConfirm: TMouseEventHandler<HTMLButtonElement> = async () => {
    try {
      const res = await authVerifyCode(
        registerForm.phone,
        registerForm.authConfirm,
      );
      if (res.data.data.status === 'SUCCESS')
        modifyCheckList('authConfirm', true);
      else modifyCheckList('authConfirm', false);
    } catch (e) {
      translateAxiosError(e);
    }
  };

  /** register 입력 폼 submit 이벤트 핸들러 */
  const handleSubmit: TFormEventHandler = async (e) => {
    e.preventDefault();
    if (!isReady) return;
    try {
      // TODO) 비동기 요청 (POST auth/register)
      const res = await usersSignUp({
        ...registerForm,
        ...terms,
      });
      if (res.data.code === '200') {
        alert('회원가입 완료!');
        navigate('/');
      }
    } catch (e) {
      translateAxiosError(e);
      alert('회원가입 실패!'); // test code
    }
  };

  useEffect(() => {
    startInit();
    if (!(terms.termsOfServiceAgreed && terms.privacyPolicyAgreed))
      navigate('../termsOfUse'); // 필수 약관 상태 false인 경우, 다시 약관페이지로 리다이렉트
  }, []);
  useEffect(() => {
    if (!isInit) return;
    return () => {
      dispatch(termsActions.initialState()); // 컴포넌트 렌더링 종료 시
    };
  }, [isInit]);

  useEffect(() => {
    handleValidCheck('email');
  }, [registerForm.email]);
  useEffect(() => {
    handleValidCheck('password');
  }, [registerForm.password]);
  useEffect(() => {
    if (registerForm.password === registerForm.passwordConfirm) {
      modifyCheckList('passwordConfirm', true);
    } else {
      modifyCheckList('passwordConfirm', false);
    }
  }, [registerForm.passwordConfirm]);
  useEffect(() => {
    handleValidCheck('name');
  }, [registerForm.name]);
  useEffect(() => {
    if (checkList.authConfirm) handleValidCheck('phone');
  }, [checkList.authConfirm]);
  useEffect(() => {
    setIsReady(
      checkResult && terms.termsOfServiceAgreed && terms.privacyPolicyAgreed,
    );
  }, [checkResult, terms.termsOfServiceAgreed, terms.privacyPolicyAgreed]);
  useEffect(() => {
    console.log(checkList);
  }, [checkList]);

  return (
    <AuthRegisterForm
      registerState={registerForm}
      checkList={checkList}
      isReady={isReady}
      handleChange={(e, reg, max) => {
        handleChangeField<IRegisterState>(e, setRegisterForm, reg, max);
      }}
      handleCheckEmail={handleCheckEmail}
      handleAuthStart={handleAuthStart}
      handleAuthConfirm={handleAuthConfirm}
      handleSubmit={handleSubmit}
    />
  );
};

export default React.memo(AuthRegisterFormContainer);
