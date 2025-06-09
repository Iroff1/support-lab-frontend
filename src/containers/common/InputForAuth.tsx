import React, { useEffect, useState } from 'react';
import { TChangeEventHandler, TMouseEventHandler } from '@models/input.model';
import { regInput } from '@consts/reg';
import palette from '@assets/colors';
import InputWithConfirm from './InputWithConfirm';
import translatePhoneNumber from '@utils/translateContact';
import useTimer from '@hooks/useTimer';
import { IRegisterState } from '@models/auth.model';
import checkValidation from '@utils/checkValidation';

interface IInputForAuth {
  phone: string;
  authConfirmText: string;
  checkList: {
    phone: boolean;
    authConfirm: boolean;
  };
  handleChange: TChangeEventHandler<HTMLInputElement>;
  handleAuthStart: () => Promise<void>;
  handleAuthConfirm: () => Promise<void>;
  $theme?: 'default' | 'modify';
}

const InputForAuth: React.FC<IInputForAuth> = ({
  $theme = 'default',
  phone,
  authConfirmText,
  checkList,
  handleChange,
  handleAuthStart,
  handleAuthConfirm,
}) => {
  const { timer, timerEvent, timerStart, timerReset } = useTimer();
  const [isPhoneReady, setIsPhoneReady] = useState(false);
  const [phoneCautionText, setPhoneCautionText] = useState<
    string | React.ReactNode
  >('');
  const [authCautionText, setAuthCautionText] = useState('');

  /** 입력된 번호로 인증을 요청하고 타이머 시작 */
  const handleAuthRequest = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isPhoneReady) return;
    try {
      timerStart();
      await handleAuthStart();
    } catch (e) {
      console.log(e);
    }
  };

  // 타이머 초기화
  useEffect(() => {
    if (timerEvent.current && timer < 0) timerReset(); // 타이머 이벤트가 존재하고, 타이머 시간이 0 미만이 되면 타이머 초기화
  }, [timer]);
  useEffect(() => {
    checkList.authConfirm && timerReset(); // 권환 확인 성공 시 타이머 초기화
  }, [checkList.authConfirm]);
  useEffect(() => {
    return timerReset();
  }, []);
  useEffect(() => {
    setIsPhoneReady(checkValidation(phone, 'phone'));
  }, [phone]);
  useEffect(() => {
    setPhoneCautionText(
      checkList.phone ? (
        ''
      ) : timer >= 0 ? (
        <span style={{ color: palette.system.blue }}>
          남은 시간 {Math.floor(timer / 60)}분
          {String(timer % 60).padStart(2, '0')}초<br />
          문자가 오지 않으면 스팸함을 확인해 주세요.
        </span>
      ) : checkList.authConfirm === true ? (
        ''
      ) : isPhoneReady ? (
        <span>
          인증 시간이 만료되었습니다.
          <br />
          다시 인증해 주세요.
        </span>
      ) : (
        '휴대폰번호를 제대로 입력해 주세요.'
      ),
    );
  }, [checkList, isPhoneReady, timer]);
  useEffect(() => {
    setAuthCautionText(
      authConfirmText.length < 6
        ? ''
        : checkList.authConfirm
        ? '인증되었습니다.'
        : '인증번호가 일치하지 않습니다.',
    );
  }, [authConfirmText, checkList.authConfirm]);

  return (
    <>
      <InputWithConfirm<IRegisterState>
        $theme={$theme}
        useFor={$theme === 'modify' ? 'modify' : 'auth'}
        name="phone"
        type="tel"
        placeholder="휴대폰번호"
        value={translatePhoneNumber(phone)}
        disabled={checkList.phone || timer >= 0}
        onChange={(e) => {
          handleChange && handleChange(e, regInput.onlyNum, 11);
        }}
        handleConfirm={handleAuthRequest}
        $isValid={checkList.phone && timer >= 0 && checkList.authConfirm}
        $cautionText={phoneCautionText}
      />

      <InputWithConfirm<IRegisterState>
        $theme={$theme}
        useFor="validation"
        name="authConfirm"
        type="text"
        placeholder="인증번호"
        value={authConfirmText}
        handleConfirm={async (e) => {
          e.preventDefault();
          await handleAuthConfirm();
          if (!checkList.authConfirm) timerReset();
        }}
        onChange={(e) => {
          handleChange && handleChange(e, regInput.onlyNum, 6);
        }}
        $isValid={checkList.authConfirm}
        $cautionText={authCautionText}
        disabled={timer < 0}
      />
    </>
  );
};

export default InputForAuth;
