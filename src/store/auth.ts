import { authGetCode, authLoginUser, authRegisterUser } from '@api/auth';
import { IAuth, ILocalAuth, ILogin, IRegisterState } from '@models/auth.model';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

/** auth 스토어 초기 상태 값 */
const initialState: IAuth = {
  login: { email: '', password: '' },
  auth: null,
  authError: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /** auth[form] 상태 초기화 */
    initializeState: (state) => {
      localStorage.getItem('auth') && localStorage.removeItem('auth');
      Object.assign(state, initialState);
    },
    /** auth[form]의 특정 값 최신화 */
    changeField: (
      state,
      {
        payload: { key, value },
      }: PayloadAction<{
        key: keyof IRegisterState | keyof ILogin;
        value: string | boolean;
      }>,
    ) => {
      Object.assign(state.login, { [key]: value });
    },
    refreshAuth: (state, { payload: auth }: PayloadAction<ILocalAuth>) => {
      state.auth = auth;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLoginUserThunk.pending, (state, { type }) => {
        console.log(type + '/시작');
      })
      .addCase(authLoginUserThunk.fulfilled, (state, { type, payload }) => {
        console.log(type + '/성공');
        state.auth && Object.assign(state.auth, payload);
      })
      .addCase(authLoginUserThunk.rejected, (state, { type, error }) => {
        console.log(type + '/오류');
        console.error(error);
        state.authError = error;

        // test codes
        // state.auth = { username: '홍길동', token: 'qwer1234' }; // test code
      });
  },
});

/** 전화번호를 통한 인증 번호 비동기 요청 */
export const authLoginUserThunk = createAsyncThunk(
  'auth/loginUser',
  async (formData: ILogin) => {
    const res = await authLoginUser(formData);
    return res.data.auth;
  },
);

const authReducer = authSlice.reducer;

export const authActions = authSlice.actions;
export default authReducer;
