import { TCheckValidation } from '@models/input.model';

/** 문자열과 정규표현식을 받아 유효성을 검사하는 함수 */
const checkValidation: TCheckValidation = (userInput, reg) => {
  return reg.test(userInput);
};

export default checkValidation;
