import UserModifyInfo from '@components/user/UserModifyInfo';
import useCheckList from '@hooks/useCheckList';
import useInit from '@hooks/useInit';
import {
  IConfirm,
  INewPassword,
  IRegister,
  IRegisterCheck,
} from '@models/auth.model';
import { IAuthChecker } from '@models/common.model';
import { TChangeEventHandler } from '@models/input.model';
import { useAppSelector } from '@store/index';
import checkValidation from '@utils/checkValidation';
import handleAuthCheck from '@utils/handleAuthCheck';
import handleChangeField from '@utils/handleChangeField';
import handleGetAuthCode from '@utils/handleGetAuthCode';
import handleModifyPw from '@utils/handleModifyPw';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IUserModifyInfoState extends IRegister, IConfirm, INewPassword {}

export interface IUserModifyInfoProps {
  formState: IUserModifyInfoState;
  checkList: IAuthChecker<IRegisterCheck & INewPassword>;
  marketingState: boolean;
  handleAuthConfirm: () => void;
  handleChange: TChangeEventHandler<HTMLInputElement>;
  handleMarketing: () => void;
  handleAuthStart: () => Promise<void>;
  handleModifyPassword: () => Promise<void>;
  handleModifyname: () => Promise<void>;
  handleModifyphone: () => Promise<void>;
  handleSecession: () => Promise<void>;
}

const UserModifyInfoContainer = () => {
  // 변수 부
  const navigate = useNavigate();
  const auth = useAppSelector(({ auth }) => auth.auth);
  const [formState, setFormState] = useState<IUserModifyInfoState>({
    email: '',
    password: '',
    name: '',
    phone: '',
    authCode: '',
    authConfirm: '',
    newPassword: '',
    newPasswordConfirm: '',
  });
  const { checkList, modifyCheckList } = useCheckList<
    IRegisterCheck & INewPassword
  >({
    email: false,
    emailConfirm: false,
    password: false,
    passwordConfirm: false,
    name: false,
    phone: false,
    authConfirm: false,
    newPassword: false,
    newPasswordConfirm: false,
  });
  const { isInit, startInit } = useInit();
  const [marketingState, setMarketingState] = useState(false);

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
  const handleModifyname = async () => {
    try {
    } catch (e) {
      console.error(e);
    }
  };
  const handleModifyphone = async () => {
    try {
    } catch (e) {
      console.error(e);
    }
  };
  const handleAuthConfirm = async () => {
    handleAuthCheck(formState.authCode, formState.authConfirm, () => {
      modifyCheckList('authConfirm', true);
      modifyCheckList('phone', true);
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
        name: auth?.name || '',
        phone: auth?.phone || '',
      }));
    } else {
      alert('잘못된 접근입니다.');
      navigate('/auth');
    }
  }, [isInit]);

  useEffect(() => {
    modifyCheckList('name', checkValidation(formState.name, 'name'));
    modifyCheckList(
      'newPassword',
      checkValidation(formState.newPassword, 'password'),
    );
    modifyCheckList(
      'newPasswordConfirm',
      formState.newPassword === formState.newPasswordConfirm,
    );
    console.log(formState.newPassword, formState.newPasswordConfirm);
  }, [formState.name, formState.newPassword, formState.newPasswordConfirm]);

  return (
    <UserModifyInfo
      formState={formState}
      checkList={checkList}
      marketingState={marketingState}
      handleAuthConfirm={handleAuthConfirm}
      handleChange={handleChange}
      handleMarketing={handleMarketing}
      handleAuthStart={async () => {
        await handleGetAuthCode(formState.phone);
      }}
      handleModifyPassword={handleModifyPassword}
      handleModifyname={handleModifyname}
      handleModifyphone={handleModifyphone}
      handleSecession={handleSecession}
    />
  );
};

export default React.memo(UserModifyInfoContainer);
