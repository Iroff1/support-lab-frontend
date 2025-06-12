import AuthRegisterForm from '@components/auth/AuthRegisterForm';
import useCheckList from '@hooks/useCheckList';
import useInit from '@hooks/useInit';
import { IRegister, IRegisterCheck, IRegisterState } from '@models/auth.model';
import { TChangeEventHandler, TMouseEventHandler } from '@models/input.model';
import { useAppDispatch, useAppSelector } from '@store/index';
import { termsActions } from '@store/terms';
import checkValidation from '@utils/checkValidation';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import handleChangeField from '@utils/handleChangeField';
import handleGetAuthCode from '@utils/handleGetAuthCode';
import { usersCheckEmail, usersSignUp } from '@api/user';
import { IBooleanObj, IResponse } from '@models/common.model';
import handleAuthCheck from '@utils/handleAuthCheck';
import translateAxiosError from '@utils/translateAxiosError';
import { StatusCodes } from 'http-status-codes';

export interface IAuthRegisterForm {
  registerState: IRegisterState;
  checkList: IBooleanObj<IRegisterCheck>;
  isReady: boolean;

  handleChange: TChangeEventHandler<HTMLInputElement>;
  handleAuthStart: () => Promise<void>;
  handleAuthConfirm: () => Promise<void>;
  handleSubmit: TMouseEventHandler<HTMLButtonElement>;
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

  /**
   * @description 입력 필드 별 checkList 유효성 갱신 함수
   * @param key 입력 필드 키
   * @returns 유효성 결과
   */
  const handleValidCheck = (key: keyof IRegister) => {
    const result = checkValidation(registerForm[key], key);
    modifyCheckList(key, result);
  };
  /**
   * @description 이메일 조회 함수
   * @returns 이메일 중복 여부
   */
  const handleCheckEmail = async () => {
    if (checkList.emailConfirm) return; // 이미 체크된 이메일인 경우 조회 안함
    try {
      // TODO) 비동기 요청 (POST auth/email-check)
      const res = await usersCheckEmail(registerForm.email);
      modifyCheckList('emailConfirm', !res.data.body.exists);
    } catch (e) {
      translateAxiosError(e);
    }
  };

  /** 본인인증 시작 함수 */
  const handleAuthStart = async () => {
    if (registerForm.phone.length !== 11 || checkList.phone) return;
    try {
      setRegisterForm({
        ...registerForm,
        authConfirm: '',
      });
      await handleGetAuthCode('SIGN_UP_CODE', registerForm.phone);
    } catch (e) {
      // translateAxiosError(e);
    }
  };
  /** authConfirm에 할당할 콜백 함수 */
  const handleAuthConfirm = async () => {
    if (registerForm.authConfirm.length < 6 || checkList.authConfirm) return;
    try {
      await handleAuthCheck(
        'SIGN_UP_CODE',
        registerForm.phone,
        registerForm.authConfirm,
        modifyCheckList,
      );
    } catch (e) {
      e;
    }
  };

  /** register 입력 폼 submit 이벤트 핸들러 */
  const handleSubmit: TMouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    if (!isReady) return;
    try {
      // TODO) 비동기 요청 (POST auth/register)
      const res = await usersSignUp({
        ...registerForm,
        ...terms,
      });
      if (res.data.code === '200') {
        alert('회원가입 완료.');
        navigate('/');
      }
    } catch (e) {
      translateAxiosError(e, (resData) => {
        if (resData.code === StatusCodes.CONFLICT + '') {
          alert('회원가입 실패. 이미 존재하는 명의(전화번호)입니다');
          setRegisterForm({
            ...registerForm,
            phone: '',
            authConfirm: '',
          });
          modifyCheckList('phone', false);
          modifyCheckList('authConfirm', false);
        } else {
          alert('회원가입 실패. 고객센터로 문의 부탁드립니다.'); // test code
        }
      });
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
    if (
      registerForm.password === registerForm.passwordConfirm &&
      registerForm.password.length > 0
    ) {
      modifyCheckList('passwordConfirm', true);
    } else {
      modifyCheckList('passwordConfirm', false);
    }
  }, [registerForm.password, registerForm.passwordConfirm]);
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
