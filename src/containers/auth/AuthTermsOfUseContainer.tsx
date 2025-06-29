import AuthTermsOfUse from '@components/auth/AuthTermsOfUse';
import useInit from '@hooks/useInit';
import { ITermsForRegitster } from '@models/auth.model';
import { TMouseEventHandler } from '@models/input.model';
import { useAppDispatch, useAppSelector } from '@store/index';
import { termsActions } from '@store/terms';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthTermsOfUseContainer = () => {
  const terms = useAppSelector(({ terms }) => terms);
  const dispatch = useAppDispatch();
  const [toggleAll, setToggleAll] = useState(false);
  const { isInit, startInit } = useInit();
  const navigate = useNavigate();

  /** 한개 항목에 대해서 토글하는 핸들러 함수 */
  const handleToggleOne: TMouseEventHandler<HTMLInputElement> = (e) => {
    const name = e.currentTarget.name as keyof ITermsForRegitster;
    dispatch(termsActions.toggleOne(name));
  };

  /** 전체 항목에 대해서 토글하는 핸들러 함수 */
  const handleToggleAll = () => {
    dispatch(termsActions.toggleAll(!toggleAll));
  };

  /** 회원가입 입력 란으로 넘기는 핸들러 함수 */
  const handleSubmit = () => {
    if (terms.termsOfServiceAgreed && terms.privacyPolicyAgreed)
      navigate('../register');
  };

  useEffect(() => {
    startInit();
  }, []);
  useEffect(() => {
    if (!isInit) return;
    dispatch(termsActions.initialState());
  }, [isInit]);
  useEffect(() => {
    if (
      Object.keys(terms).every((key) => terms[key as keyof ITermsForRegitster])
    ) {
      setToggleAll(true);
    } else if (
      !Object.keys(terms).every((key) => terms[key as keyof ITermsForRegitster])
    ) {
      setToggleAll(false);
    }
  }, [terms]);

  return (
    <AuthTermsOfUse
      toggleAll={toggleAll}
      termsToRegister={terms}
      handleToggleOne={handleToggleOne}
      handleToggleAll={handleToggleAll}
      handleSubmit={handleSubmit}
    />
  );
};
export default React.memo(AuthTermsOfUseContainer);
