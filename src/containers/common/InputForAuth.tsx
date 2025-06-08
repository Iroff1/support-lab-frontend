import React, { useEffect } from 'react';
import { TChangeEventHandler, TMouseEventHandler } from '@models/input.model';
import { regInput } from '@consts/reg';
import palette from '@assets/colors';
import InputWithConfirm from './InputWithConfirm';
import { TIMER_INIT, TIMER_LIMIT } from '@consts/timer';
import translatePhoneNumber from '@utils/translateContact';
import useTimer from '@hooks/useTimer';

interface IInputForAuth {
  phone: string;
  authConfirm: string;
  checkList: {
    phone: boolean;
  };
  confirmAuth: boolean;
  handleChange: TChangeEventHandler<HTMLInputElement>;
  handleAuthStart: () => Promise<void>;
  handleAuthConfirm: TMouseEventHandler<HTMLButtonElement>;
  $theme?: 'default' | 'modify';
}

const InputForAuth: React.FC<IInputForAuth> = ({
  $theme = 'default',
  phone,
  authConfirm,
  checkList,
  confirmAuth,
  handleChange,
  handleAuthStart,
  handleAuthConfirm,
}) => {
  const { timer, timerEvent, timerStart, timerReset } = useTimer(
    TIMER_INIT,
    TIMER_LIMIT,
  );

  // 타이머 초기화
  useEffect(() => {
    if (timerEvent.current && timer < 0) {
      timerReset(); // 타이머 이벤트가 존재하고, 타이머 시간이 0 미만이 되면 타이머 초기화
    }
  }, [timer]);
  useEffect(() => {
    confirmAuth && timerReset(); // 권환 확인 성공 시 타이머 초기화
  }, [confirmAuth]);
  useEffect(() => {
    return timerReset();
  }, []);

  return (
    <>
      <InputWithConfirm
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
        isValid={checkList.phone && timer >= 0 && confirmAuth}
        onClick={async (e) => {
          e.preventDefault();
          if (!timerEvent.current && !checkList.phone) {
            await handleAuthStart();
            timerStart();
          }
        }}
        cautionText={
          checkList.phone ? (
            ''
          ) : timer >= 0 ? (
            <span style={{ color: palette.system.blue }}>
              남은 시간 {Math.floor(timer / 60)}분
              {String(timer % 60).padStart(2, '0')}초<br />
              문자가 오지 않으면 스팸함을 확인해 주세요.
            </span>
          ) : confirmAuth === true ? (
            ''
          ) : (
            <span>
              인증 시간이 만료되었습니다.
              <br />
              다시 인증해 주세요.
            </span>
          )
        }
      />

      <InputWithConfirm
        $theme={$theme}
        useFor="validation"
        name="authConfirm"
        type="text"
        placeholder="인증번호"
        value={authConfirm}
        onClick={handleAuthConfirm}
        onChange={(e) => {
          handleChange && handleChange(e, regInput.onlyNum, 6);
        }}
        isValid={confirmAuth}
        cautionText={
          authConfirm.length < 6
            ? ''
            : confirmAuth
            ? '인증되었습니다.'
            : '인증번호가 일치하지 않습니다.'
        }
        disabled={timer < 0}
      />
    </>
  );
};

export default InputForAuth;
