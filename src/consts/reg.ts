import { TRegObj } from '@models/input.model';

export const regValid: TRegObj = {
  email: /^([A-Za-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=\-[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+=\-[\]{};':"\\|,.<>/?]{8,16}$/,
  phone: /^010\d{8}$/,
  name: /^(?:[가-힣]{2,}|[a-zA-Z]{3,})$/,
};

export const regInput = {
  onlyNum: /[^0-9]/g,
  korOrEng: /[^ㄱ-ㅎ가-힣a-zA-Z]/g,
};
