import { authGetCode, authLoginUser, authRegisterUser } from '@api/auth';
import {
  IAuth,
  IAuthChecker,
  ILogin,
  IRegister,
  IRegisterRequest,
  IRegisterState,
} from '@models/auth.model';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

/** auth 스토어 초기 상태 값 */
const initialState: IAuth = {
  login: { email: '', password: '' },
  register: {
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
    contact: '',
    authCode: '',
    authConfirm: '',
    personalInfoAgreement: false,
    marketingAgreement: false,
    error: null,
    isValid: {
      email: false,
      username: false,
      password: false,
      contact: false,
    },
  },
  auth: {},
  authError: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /** auth[form] 상태 초기화 */
    initializeState: (
      state,
      { payload: { form } }: PayloadAction<{ form: keyof IAuth }>,
    ) => {
      Object.assign(state, { [form]: initialState[form] });
    },
    /** auth[form]의 특정 값 최신화 */
    changeField: (
      state,
      {
        payload: { form, key, value },
      }: PayloadAction<{
        form: keyof IAuth;
        key: keyof IRegisterState | keyof ILogin;
        value: string | boolean;
      }>,
    ) => {
      Object.assign(state[form], { [key]: value });
    },

    /** auth[form][register][isValid] 객체의 특정 개체 토글 */
    toggleRegisterValid: (
      state,
      {
        payload: { key, value },
      }: PayloadAction<{ key: keyof IAuthChecker<IRegister>; value: boolean }>,
    ) => {
      Object.assign(state.register.isValid, { [key]: value });
    },
  },
  extraReducers: (builder) => {
    /** 전화번호를 통한 인증 번호 비동기 요청 */
    builder
      .addCase(authGetCodeThunk.pending, (state, { type }) => {
        console.log(type + '/시작');
      })
      .addCase(authGetCodeThunk.fulfilled, (state, { type, payload }) => {
        console.log(type + '/성공');
        if (payload.text) state.register.authCode = payload.text;
      })
      .addCase(authGetCodeThunk.rejected, (state, { type, error }) => {
        console.log(type + '/오류');
        console.error(error);
        state.register.authCode = '111111';
        // state.authError = error;
      });
    /** 회원 가입 비동기 요청 */
    builder
      .addCase(authRegisterUserThunk.pending, (state, { type }) => {
        console.log(type + '/시작');
        console.log(state.register);
      })
      .addCase(authRegisterUserThunk.fulfilled, (state, { type, payload }) => {
        console.log(type + '/성공');
        console.log(payload);
        state.auth = payload;
        state.authError = {};
      })
      .addCase(authRegisterUserThunk.rejected, (state, { type, error }) => {
        console.log(type + '/오류');
        console.error(error);
        state.auth = state.register;
        // state.auth = {};
        // state.authError = error;
      });
  },
});

export const authGetCodeThunk = createAsyncThunk(
  'auth/getCode',
  async (userContact: string) => {
    const res = await authGetCode(userContact);
    return res.data;
  },
);

export const authLoginUserThunk = createAsyncThunk(
  'auth/loginUser',
  async (formData: ILogin) => {
    const res = await authLoginUser(formData);
    return res.data;
  },
);

export const authRegisterUserThunk = createAsyncThunk(
  'auth/registerUser',
  async (formData: IRegisterRequest) => {
    const res = await authRegisterUser(formData);
    return res.data;
  },
);

const authReducer = authSlice.reducer;

export const authActions = authSlice.actions;
export default authReducer;
