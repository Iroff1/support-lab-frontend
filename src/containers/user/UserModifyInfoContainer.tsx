import UserModifyInfo from '@components/user/UserModifyInfo';
import useCheckList from '@hooks/useCheckList';
import useInit from '@hooks/useInit';
import {
  IAuthChecker,
  IConfirm,
  INewPassword,
  IRegister,
} from '@models/auth.model';
import { TChangeEventHandler } from '@models/input.model';
import { useAppSelector } from '@store/index';
import checkValidation from '@utils/checkValidation';
import handleAuthCheck from '@utils/handleAuthCheck';
import handleChangeField from '@utils/handleChangeField';
import handleAuthStart from '@utils/handleGetAuthCode';
import handleModifyPw from '@utils/handleModifyPw';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IUserModifyInfoState extends IRegister, IConfirm, INewPassword {}

export interface IUserModifyInfoProps {
  formState: IUserModifyInfoState;
  checkList: IAuthChecker<IRegister & INewPassword>;
  confirmAuth: boolean;
  marketingState: boolean;
  handleAuthConfirm: () => void;
  handleChange: TChangeEventHandler<HTMLInputElement>;
  handleMarketing: () => void;
  handleAuthStart: () => Promise<void>;
  handleModifyPassword: () => Promise<void>;
  handleModifyUsername: () => Promise<void>;
  handleModifyContact: () => Promise<void>;
  handleSecession: () => Promise<void>;
}

const UserModifyInfoContainer = () => {
  // 변수 부
  const navigate = useNavigate();
  const auth = useAppSelector(({ auth }) => auth.auth);
  const [formState, setFormState] = useState<IUserModifyInfoState>({
    email: '',
    password: '',
    username: '',
    contact: '',
    authCode: '',
    authConfirm: '',
    newPassword: '',
    newPasswordConfirm: '',
  });
  const { checkList, modifyCheckList } = useCheckList<IRegister & INewPassword>(
    {
      email: false,
      password: false,
      username: false,
      contact: false,
      newPassword: false,
      newPasswordConfirm: false,
    },
  );
  const { isInit, startInit } = useInit();
  const [marketingState, setMarketingState] = useState(false);
  const [confirmAuth, setConfirmAuth] = useState(false);

  // 핸들러 함수들
  const handleChange: TChangeEventHandler<HTMLInputElement> = (e, reg, max) => {
    console.log(e.target.name);
    handleChangeField<IUserModifyInfoState>(e, setFormState, reg, max);
  };
  const handleMarketing = () => {
    setMarketingState((prev) => !prev);
  };
  const handleModifyPassword = async () => {
    try {
      await handleModifyPw(formState.email, formState.password);
    } catch (e) {
      // console.error(e);
    }
    navigate('/');
  };
  const handleModifyUsername = async () => {
    try {
    } catch (e) {
      console.error(e);
    }
  };
  const handleModifyContact = async () => {
    try {
    } catch (e) {
      console.error(e);
    }
  };
  const handleAuthConfirm = async () => {
    handleAuthCheck(formState.authCode, formState.authConfirm, () => {
      setConfirmAuth(true);
      modifyCheckList('contact', true);
    });
  };
  const handleSecession = async () => {
    try {
    } catch (e) {
      console.error(e);
    }
  };

  // 모니터링
  useEffect(() => {
    startInit();
  }, []);

  useEffect(() => {
    if (!isInit) return;
    if (auth) {
      setFormState((prev) => ({
        ...prev,
        email: auth?.email || '',
        username: auth?.username || '',
        contact: auth?.contact || '',
      }));
    } else {
      alert('잘못된 접근입니다.');
      navigate('/auth');
    }
  }, [isInit]);

  useEffect(() => {
    modifyCheckList(
      'username',
      checkValidation(formState.username, 'username'),
    );
    modifyCheckList(
      'newPassword',
      checkValidation(formState.newPassword, 'password'),
    );
    modifyCheckList(
      'newPasswordConfirm',
      formState.newPassword === formState.newPasswordConfirm,
    );
    console.log(formState.newPassword, formState.newPasswordConfirm);
  }, [formState.username, formState.newPassword, formState.newPasswordConfirm]);

  return (
    <UserModifyInfo
      formState={formState}
      checkList={checkList}
      confirmAuth={confirmAuth}
      marketingState={marketingState}
      handleAuthConfirm={handleAuthConfirm}
      handleChange={handleChange}
      handleMarketing={handleMarketing}
      handleAuthStart={async () => {
        await handleAuthStart<IUserModifyInfoState>(
          formState.contact,
          setFormState,
        );
      }}
      handleModifyPassword={handleModifyPassword}
      handleModifyUsername={handleModifyUsername}
      handleModifyContact={handleModifyContact}
      handleSecession={handleSecession}
    />
  );
};

export default React.memo(UserModifyInfoContainer);
