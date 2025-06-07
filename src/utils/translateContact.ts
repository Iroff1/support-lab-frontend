/** 숫자로만 이루어진 전화번호 문자열을 010-0000-0000 형식으로 반환하는 함수 */
const translatePhoneNumber = (phone: string) => {
  return phone.length < 4
    ? phone
    : phone.length < 8
    ? phone.substring(0, 3) + '-' + phone.substring(3)
    : phone.substring(0, 3) +
      '-' +
      phone.substring(3, 7) +
      '-' +
      phone.substring(7, 11);
};

export default translatePhoneNumber;
