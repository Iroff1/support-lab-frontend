import { authSendCode, TRequestCode } from '@api/auth';
import checkValidation from './checkValidation';
import translateAxiosError from './translateAxiosError';

/** InputForAuthorization 컴포넌트의 onClick에 할당할 인증용 핸들러 함수 */
const handleGetAuthCode = async (type: TRequestCode, phone: string) => {
  //   if (timerEvent.current) return; // 타이머 진행 중인 경우 미 실행
  if (!checkValidation(phone, 'phone')) return; // 유효성 검증 실패 시 미 실행

  try {
    await authSendCode(type, phone);
  } catch (error) {
    translateAxiosError(error);
    alert('잘못된 요청입니다. 전화번호를 확인해주세요');
  }
};
export default handleGetAuthCode;
