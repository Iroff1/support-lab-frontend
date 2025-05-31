import React, { useEffect } from 'react';
import { TChangeEventHandler, TMouseEventHandler } from '@models/input.model';
import { regInput } from '@consts/reg';
import palette from '@assets/colors';
import InputWithConfirm from './InputWithConfirm';
import useInit from '@hooks/useInit';
import { TIMER_INIT, TIMER_LIMIT } from '@consts/timer';
import translateContact from '@utils/translateContact';
import useTimer from '@hooks/useTimer';

interface IInputForAuth {
  contact: string;
  authConfirm: string;
  authCode: string;
  checkList: {
    contact: boolean;
  };
  confirmAuth: boolean;
  handleChange: TChangeEventHandler<HTMLInputElement>;
  handleAuthStart: () => Promise<void>;
  handleAuthConfirm: TMouseEventHandler<HTMLButtonElement>;
}

const InputForAuth: React.FC<IInputForAuth> = ({
  contact,
  authConfirm,
  authCode,
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
  const { isInit, startInit, resetInit } = useInit();

  useEffect(() => {
    return timerReset();
  }, []);

  // 타이머 종료 추적
  useEffect(() => {
    if (timerEvent.current && timer < 0) {
      timerReset(); // 타이머 초기화
      resetInit();
    }
  }, [timer]);

  useEffect(() => {
    confirmAuth && timerReset(); // 권환 확인 시 타이머 초기화
  }, [confirmAuth]);

  useEffect(() => {
    isInit && authCode.length === 6 && timerStart(); // 권한 코드 생성 시 타이머 시작
  }, [isInit]);

  return (
    <>
      <InputWithConfirm
        name="contact"
        type="tel"
        placeholder="휴대폰번호"
        value={translateContact(contact)}
        disabled={checkList.contact || timer >= 0}
        onChange={(e) => {
          handleChange && handleChange(e, regInput.onlyNum, 11);
        }}
        isValid={checkList.contact && timer >= 0 && confirmAuth}
        onClick={async (e) => {
          e.preventDefault();
          if (!checkList.contact) {
            await handleAuthStart();
            startInit();
          }
        }}
        cautionText={
          checkList.contact ? (
            ''
          ) : timer >= 0 ? (
            <span style={{ color: palette.system.blue }}>
              남은 시간 {Math.floor(timer / 60)}분
              {String(timer % 60).padStart(2, '0')}초<br />
              문자가 오지 않으면 스팸함을 확인해 주세요.
            </span>
          ) : confirmAuth === true ? (
            ''
          ) : authCode.length !== 6 ? (
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
        name="authConfirm"
        type="text"
        placeholder="인증번호"
        value={authConfirm}
        onClick={handleAuthConfirm}
        onChange={(e) => {
          handleChange && handleChange(e, regInput.onlyNum, 6);
        }}
        isValid={authCode.length === 6 && confirmAuth}
        cautionText={
          authCode.length < 6
            ? ''
            : authCode === authConfirm
            ? '인증되었습니다.'
            : '인증번호가 일치하지 않습니다.'
        }
        disabled={timer < 0}
      />
    </>
  );
};

export default InputForAuth;
