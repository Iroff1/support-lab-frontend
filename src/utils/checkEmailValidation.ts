const checkEmailValidation = (userInput: string) => {
  // TODO) 이메일 양식임을 확인
  const emailReg = /^[A-Za-z0-9_\.\-]+@[a-z0-9\-]+\.[a-z0-9\-]+/;
  const validationResult = emailReg.test(userInput);

  console.log(validationResult);

  return validationResult;
};

export default checkEmailValidation;
