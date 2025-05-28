import AuthTermsOfUse from '@components/auth/AuthTermsOfUse';
import { ITermsOfUse } from '@models/auth.model';
import { useAppDispatch, useAppSelector } from '@store/index';
import { termsActions } from '@store/terms';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthTermsOfUseContainer = () => {
  const terms = useAppSelector(({ terms }) => terms);
  const dispatch = useAppDispatch();
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  /** 한개 항목에 대해서 토글하는 핸들러 함수 */
  const handleToggleOne = (name: keyof ITermsOfUse) => {
    dispatch(termsActions.toggleOne(name));
  };

  /** 전체 항목에 대해서 토글하는 핸들러 함수 */
  const handleToggleAll = () => {
    setToggle((prev) => !prev); // toggle 값만 변경
  };

  useEffect(() => {
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
