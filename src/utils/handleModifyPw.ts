import { authUpdatePassword } from '@api/auth';

export const handleModifyPw = async (email: string, newPassword: string) => {
  try {
    const res = await authUpdatePassword(email, newPassword);
    if (res.status === 200) alert('비밀번호 재 설정 완료');
  } catch (e) {
    console.error(e);
    alert(email + ' : ' + newPassword);
  }
};

export default handleModifyPw;
