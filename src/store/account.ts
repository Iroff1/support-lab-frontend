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
  },
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    initializeForm: (state, { payload }: PayloadAction<keyof IAccount>) => {
      state[payload] = initialState[payload];
    },
    changeField: (
      state,
      {
        payload: { form, key, value },
      }: PayloadAction<{ form: keyof IAccount; key: string; value: string }>,
    ) => {
      state[form][key] = value;
    },
  },
});

export const accountActions = accountSlice.actions;

const accountReducer = accountSlice.reducer;
export default accountReducer;
