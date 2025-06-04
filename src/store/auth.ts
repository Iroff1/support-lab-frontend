import { authDecryptToken, authLoginUser } from '@api/auth';
import { IAuth, ILocalAuth, ILogin, IRegisterState } from '@models/auth.model';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

/** auth 스토어 초기 상태 값 */
const initialState: IAuth = {
  token: '',
  auth: null,
  authError: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /** auth[form] 상태 초기화 */
    initializeState: (state) => {
      // Local Storage에 저장된 auth가 있는 경우, 제거
      sessionStorage.getItem('auth') && sessionStorage.removeItem('auth');
      localStorage.getItem('token') && localStorage.removeItem('token');
      sessionStorage.getItem('token') && sessionStorage.removeItem('token');
      Object.assign(state, initialState);
    },
    /** 로그인 상태 갱신 */
    refreshAuth: (state, { payload: auth }: PayloadAction<ILocalAuth>) => {
      state.auth = auth;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLoginUserThunk.pending, (_, { type }) => {
        console.log(type + ' 시작');
      })
      .addCase(authLoginUserThunk.fulfilled, (state, { type, payload }) => {
        console.log(type + ' 성공');
        state.token = payload.token;
        state.auth = payload.auth;
        state.authError = null;
      })
      .addCase(authLoginUserThunk.rejected, (state, { error }) => {
        console.error(error);
        // state.auth = null;

        state.token = 'example.token.1234567890';
        state.auth = {
          email: 'example@example.com',
          username: '홍길동',
          contact: '01012341234',
        }; // test code
        state.authError = error; // test code
      });

    builder
      .addCase(authDecryptTokenThunk.pending, (_, { type }) => {
        console.log(type + ' 시작');
      })
      .addCase(authDecryptTokenThunk.fulfilled, (state, { type, payload }) => {
        console.log(type + ' 성공');
        state.auth = payload;
        state.authError = null;
      })
      .addCase(authDecryptTokenThunk.rejected, (state, { error }) => {
        console.error(error);
        state.auth = {
          email: 'example@example.com',
          username: '홍길동',
          contact: '01012341234',
        }; // test code
        state.authError = error; // test code
      });
  },
});

/** 전화번호를 통한 인증 번호 비동기 요청 */
export const authLoginUserThunk = createAsyncThunk(
  'auth/loginUser',
  async (formData: ILogin) => {
    const res = await authLoginUser(formData);
    return { auth: res.data.auth, token: res.data.token };
  },
);

/** 토큰 복호화 요청 */
export const authDecryptTokenThunk = createAsyncThunk(
  'auth/decryptToken',
  async (token: string) => {
    const res = await authDecryptToken(token);
    return {
      email: res.data.email,
      username: res.data.username,
      contact: res.data.contact,
    };
  },
);

const authReducer = authSlice.reducer;

export const authActions = authSlice.actions;
export default authReducer;
