import { authSendCode } from '@api/auth';
import { Dispatch, SetStateAction } from 'react';
import checkValidation from './checkValidation';

/** InputForAuthorization 컴포넌트의 onClick에 할당할 인증용 핸들러 함수 */
const handleAuthStart = async <T extends { authCode: string }>(
  phone: string,
  setter: Dispatch<SetStateAction<T>>,
) => {
  //   if (timerEvent.current) return; // 타이머 진행 중인 경우 미 실행
  if (!checkValidation(phone, 'phone')) return; // 유효성 검증 실패 시 미 실행

  try {
    const res = await authSendCode(phone);
    setter((prev) => ({
      ...prev,
      authCode: res.data.authCode,
    }));
  } catch (e) {
    console.log(e);
    // alert('잘못된 요청입니다. 전화번호를 확인해주세요');

    // test code
    setter((prev) => ({
      ...prev,
      authCode: '111111',
    }));
    console.log('테스트 코드 : 111111');
  }
};
export default handleAuthStart;
