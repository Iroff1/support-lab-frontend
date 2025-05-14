import { IAccount } from '@models/account.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IAccount = {
  login: {
    email: '',
    password: '',
  },
  register: {
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
    contact: '',
    personalInfoAgreement: false,
    marketingAgreement: false,
  },
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    initializeForm: (state, { payload }: PayloadAction<keyof IAccount>) => {
      Object.entries(initialState[payload]).forEach(([key, value]) => {
        Object.assign(state[payload], { [key]: value });
      });
    },
    changeField: (
      state,
      {
        payload: { form, key, value },
      }: PayloadAction<{ form: keyof IAccount; key: string; value: string }>,
    ) => {
      Object.assign(state[form], { [key]: value });
    },
    toggleField: (
      state,
      {
        payload: { form, key, value },
      }: PayloadAction<{ form: keyof IAccount; key: string; value: boolean }>,
    ) => {
      Object.assign(state[form], { [key]: value });
    },
  },
});

export const accountActions = accountSlice.actions;

const accountReducer = accountSlice.reducer;
export default accountReducer;
