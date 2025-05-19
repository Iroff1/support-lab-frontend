import { IRegisterForm } from '@models/account.model';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: IRegisterForm = {
  email: '',
  username: '',
  password: '',
  passwordConfirm: '',
  contact: '',
  authRes: '',
  authConfirm: '',
  authStatus: false,
  personalInfoAgreement: false,
  marketingAgreement: false,
  error: null,
};

export const requestRegisterAuth = createAsyncThunk(
  'register/getRegisterAuth',
  async (userContact: string) => {
    const res = await axios('', { data: userContact });
    return res.data;
  },
);

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
      }: PayloadAction<{ key: keyof IRegisterForm; value: string | boolean }>,
    ) => {
      Object.assign(state, { [key]: value });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestRegisterAuth.pending, (state) => {
        console.log('요청 시작');
      })
      .addCase(requestRegisterAuth.fulfilled, (state, { payload }) => {
        console.log('응답 완료');
        if (payload.text) state.authRes = payload.text;
      })
      .addCase(requestRegisterAuth.rejected, (state, { error }) => {
        console.log('응답 완료 ==> 오류 발생');
        state.authRes = '111111';
        state.error = error;
      });
  },
});

const registerReducer = registerSlice.reducer;

export const registerActions = registerSlice.actions;
export default registerReducer;
