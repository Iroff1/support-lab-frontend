import { authVerifyCode } from '@api/auth';
import translateAxiosError from './translateAxiosError';
import { IAuthChecker } from '@models/common.model';

/** InputForValidation[name="authConfirm"] 컴포넌트의 onClick에 할당할 콜백 함수
 *
 * 인증 번호 확인 후 인증 상태 변경
 *
 * 인증 번호 확인 실패 시 에러 처리
 *
 * @param phone 휴대폰 번호
 * @param authConfirm 인증번호
 * @param modifyCheckList 인증 상태 변경 함수
 */
const handleAuthCheck = async (
  phone: string,
  authConfirm: string,
  modifyCheckList: (
    key: keyof IAuthChecker<{ authConfirm: boolean }>,
    value: boolean,
  ) => void,
) => {
  try {
    const res = await authVerifyCode(phone, authConfirm);
    if (res.data.data.status === 'SUCCESS')
      modifyCheckList('authConfirm', true);
    else modifyCheckList('authConfirm', false);
  } catch (e) {
    translateAxiosError(e);
  }
};
export default handleAuthCheck;
