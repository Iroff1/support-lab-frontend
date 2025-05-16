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
