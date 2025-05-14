import { TChecker } from '@models/input.model';

const checkPasswordValidation: TChecker = (userInput) => {
  const pwReg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=\-[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+=\-[\]{};':"\\|,.<>/?]{8,16}$/;
  const validateionResult = pwReg.test(userInput);
  if (validateionResult) {
    return '';
  }
  return '8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.';
};

export default checkPasswordValidation;
