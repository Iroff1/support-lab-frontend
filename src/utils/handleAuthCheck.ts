/** InputForValidation[name="authConfirm"] 컴포넌트의 onClick에 할당할 콜백 함수 */
const handleAuthCheck = (
  authCode: string,
  authConfirm: string,
  callback: () => void,
) => {
  if (authCode.length === 6 && authCode === authConfirm) callback();
};

export default handleAuthCheck;
