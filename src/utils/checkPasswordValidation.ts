import { TChecker } from '@models/input.model';

/** 패스워드 텍스트 유효성 검사 함수*/
const checkPasswordValidation: TChecker = (userInput) => {
  const pwReg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=\-[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+=\-[\]{};':"\\|,.<>/?]{8,16}$/;
  const validateionResult = pwReg.test(userInput);

  if (!validateionResult) {
    // 유효성 검증 실패
    return '8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.';
  }

  return '';
};

export default checkPasswordValidation;
