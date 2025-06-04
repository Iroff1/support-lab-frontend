import AuthTermsOfUse from '@components/auth/AuthTermsOfUse';
import useInit from '@hooks/useInit';
import { ITerms } from '@models/auth.model';
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
  const handleToggleOne = (name: keyof ITerms) => {
    dispatch(termsActions.toggleOne(name));
  };

  /** 전체 항목에 대해서 토글하는 핸들러 함수 */
  const handleToggleAll = () => {
    dispatch(termsActions.toggleAll(!toggleAll));
  };

  useEffect(() => {
    startInit();
  }, []);
  useEffect(() => {
    if (!isInit) return;
    dispatch(termsActions.initialState());
  }, [isInit]);
  useEffect(() => {
    if (Object.keys(terms).every((key) => terms[key as keyof ITerms])) {
      setToggleAll(true);
    } else if (!Object.keys(terms).every((key) => terms[key as keyof ITerms])) {
      setToggleAll(false);
    }
  }, [terms]);

  return (
    <AuthTermsOfUse
      toggleAll={toggleAll}
      termsOfUses={terms}
      handleToggleOne={handleToggleOne}
      handleToggleAll={handleToggleAll}
      handleSubmit={() => {
        navigate('../register');
      }}
    />
  );
};
export default React.memo(AuthTermsOfUseContainer);
