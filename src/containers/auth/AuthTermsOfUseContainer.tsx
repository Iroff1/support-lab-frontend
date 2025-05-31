import AuthTermsOfUse from '@components/auth/AuthTermsOfUse';
import useInit from '@hooks/useInit';
import { ITerms } from '@models/auth.model';
import { useAppDispatch, useAppSelector } from '@store/index';
import { termsActions } from '@store/terms';
import React, { use, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthTermsOfUseContainer = () => {
  const terms = useAppSelector(({ terms }) => terms);
  const dispatch = useAppDispatch();
  const [toggle, setToggle] = useState(false);
  const { isInit, startInit } = useInit();
  const navigate = useNavigate();

  /** 한개 항목에 대해서 토글하는 핸들러 함수 */
  const handleToggleOne = (name: keyof ITerms) => {
    dispatch(termsActions.toggleOne(name));
  };

  /** 전체 항목에 대해서 토글하는 핸들러 함수 */
  const handleToggleAll = () => {
    setToggle((prev) => !prev); // toggle 값만 변경
  };

  useEffect(() => {
    startInit();
    dispatch(termsActions.initialState());
  }, []);

  useEffect(() => {
    if (!isInit) return;
    dispatch(termsActions.toggleAll(toggle));
  }, [toggle]);

  return (
    <AuthTermsOfUse
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
