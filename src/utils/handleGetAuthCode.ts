import { authGetCode } from '@api/auth';
import { Dispatch, SetStateAction } from 'react';
import checkValidation from './checkValidation';

/** InputForAuthorization 컴포넌트의 onClick에 할당할 인증용 핸들러 함수 */
const handleAuthStart = async <T extends object>(
  contact: string,
  setter: Dispatch<SetStateAction<T>>,
  timerStart: () => void,
) => {
  //   if (timerEvent.current) return; // 타이머 진행 중인 경우 미 실행
  if (!checkValidation(contact, 'contact')) return; // 유효성 검증 실패 시 미 실행

  try {
    const res = await authGetCode(contact);
    setter((prev) => ({
      ...prev,
      authCode: res.data.authCode,
    }));
    timerStart();
  } catch (e) {
    alert(e);

    // test code
    setter((prev) => ({
      ...prev,
      authCode: '111111',
    }));
    timerStart();
  }
};
export default handleAuthStart;
