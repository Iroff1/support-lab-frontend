/** 숫자로만 이루어진 전화번호 문자열을 010-0000-0000 형식으로 반환하는 함수 */
const translateContact = (contact: string) => {
  return contact.length < 4
    ? contact
    : contact.length < 8
    ? contact.substring(0, 3) + '-' + contact.substring(3)
    : contact.substring(0, 3) +
      '-' +
      contact.substring(3, 7) +
      '-' +
      contact.substring(7, 11);
};

export default translateContact;
