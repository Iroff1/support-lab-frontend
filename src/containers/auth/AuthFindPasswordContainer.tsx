import AuthFindPassword from '@components/auth/AuthFindPassword';
import useCheckList from '@hooks/useCheckList';
import React, { useEffect, useState } from 'react';
import checkValidation from '@utils/checkValidation';
import handleChangeField from '@utils/handleChangeField';
import handleAuthStart from '@utils/handleGetAuthCode';
import { IRegister } from '@models/auth.model';
import handleAuthCheck from '@utils/handleAuthCheck';
import { userModifyPasswordReq, usersFindEmail } from '@api/user';

export interface IFindPassword {
  email: string;
  username: string;
  phone: string;
  authCode: string;
  authConfirm: string;
}

interface IProp {
  handleEmail: (email: string) => void;
}

const AuthFindPasswordContainer: React.FC<IProp> = ({ handleEmail }) => {
  // const navigate = useNavigate();
  const [findForm, setFindForm] = useState<IFindPassword>({
    email: '',
    username: '',
    phone: '',
    authCode: '',
    authConfirm: '',
  });
  const { checkList, modifyCheckList } = useCheckList<IFindPassword>({
    email: false,
    username: false,
    phone: false,
    authCode: false,
    authConfirm: false,
  });
  const [confirmEmail, setConfirmEmail] = useState(false);
  const [confirmAuth, setConfirmAuth] = useState(false);

  /** InputForValidation[name="authConfirm"] 컴포넌트의 onClick에 할당할 콜백 함수 */
  const handleAuthConfirm = () => {
    handleAuthCheck(findForm.authCode, findForm.authConfirm, () => {
      setConfirmAuth(true);
      modifyCheckList('phone', true);
    });
  };

  /** 유효성 체크 함수 */
  const handleValidCheck = (key: keyof IFindPassword) => {
    const result = checkValidation(findForm[key], key as keyof IRegister);
    modifyCheckList(key, result);
  };

  /** 이메일 조회 함수 */
  const handleCheckEmail = async () => {
    try {
      const res = await usersFindEmail(findForm.email, findForm.phone);
      if (res.data.email)
        findForm.email === res.data.email && setConfirmEmail(true);
    } catch (e) {
      console.log(e);
      findForm.email === 'example@naver.com' && setConfirmEmail(true); // 테스트 코드
    }
  };

  /** SubmitButton에 할당할 onClick 핸들러 함수 */
  const handleFindPassword = async () => {
    if (
      !(
        checkList.email &&
        checkList.username &&
        checkList.phone &&
        confirmAuth &&
        confirmEmail
      )
    )
      return;
    try {
      // TODO) GET auth/password 비밀번호 정보 요청 비동기 처리 후 이메일 상태 초기화
      const res = await userModifyPasswordReq({
        email: findForm.email,
        phone: findForm.phone,
        name: findForm.username,
      });
      if (res.status === 200) {
        alert('비밀번호 찾기 완료!');
        handleEmail(findForm.email);
      }
    } catch (e) {
      console.error(e);

      console.log(findForm); // test code
      handleEmail(findForm.email);
    }
  };

  useEffect(() => {
    if (checkList.email) handleCheckEmail();
  }, [checkList.email]);
  useEffect(() => {
    handleValidCheck('username');
  }, [findForm.username]);

  return (
    <AuthFindPassword
      findForm={findForm}
      confirmAuth={confirmAuth}
      confirmEmail={confirmEmail}
      checkList={checkList}
      handleChangeField={(e, reg, max) => {
        handleChangeField<IFindPassword>(e, setFindForm, reg, max);
      }}
      handleAuthStart={async () => {
        await handleAuthStart<IFindPassword>(findForm.phone, setFindForm);
      }}
      handleAuthConfirm={handleAuthConfirm}
      handleFindPassword={handleFindPassword}
      handleCheckEmail={handleCheckEmail}
      handleValidCheck={handleValidCheck}
    />
  );
};

export default React.memo(AuthFindPasswordContainer);
