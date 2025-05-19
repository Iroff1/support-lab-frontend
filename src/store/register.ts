import { IRegisterForm } from '@models/account.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IRegisterForm = {
  email: '',
  username: '',
  password: '',
  passwordConfirm: '',
  contact: '',
  contactAuth: false,
  personalInfoAgreement: false,
  marketingAgreement: false,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    initialize: (state, _) => {
      Object.assign(state, initialState);
    },
    changeField: (
      state,
      {
        payload: { key, value },
      }: PayloadAction<{ key: string; value: string | boolean }>,
    ) => {
      Object.assign(state, { [key]: value });
    },
  },
});

const registerReducer = registerSlice.reducer;

export const registerActions = registerSlice.actions;
export default registerReducer;
