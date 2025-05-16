import { TChecker } from '@models/input.model';

const checkEmailValidation: TChecker = (userInput) => {
  // TODO) 1. 이메일 양식임을 확인
  const emailReg = /^[A-Za-z0-9_\.\-]+@[a-z0-9\-]+\.[a-z0-9\-]+/;
  const validationResult = emailReg.test(userInput);

  if (validationResult) {
    // 유효성 검사 성공
    // TODO) 2. 아이디 중복 체크 (비동기 처리)
    // const duplicationResult = checkEmailDuplication(userInput);
    // if (dupliactionResult) return true;
    // else return false;
    return '';
  }
  // 유효성 검사 실패
  return '올바른 이메일을 입력해 주세요.';
};

export default checkEmailValidation;
