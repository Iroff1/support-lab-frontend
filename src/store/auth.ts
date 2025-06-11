import { authLoginUser } from '@api/auth';
import { usersDecryptToken } from '@api/user';
import { IAuth, ILocalAuth, ILogin } from '@models/auth.model';
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
        Object.assign(state, { token: payload?.token, authError: null });
        alert('로그인 성공');
      })
      .addCase(authLoginUserThunk.rejected, (state, { error }) => {
        console.error(error);
        Object.assign(state, { token: '', authError: error });
        alert('로그인 실패');
      });

    builder
      .addCase(authDecryptTokenThunk.pending, (_, { type }) => {
        console.log(type + ' 시작');
      })
      .addCase(authDecryptTokenThunk.fulfilled, (state, { type, payload }) => {
        console.log(type + ' 성공');
        Object.assign(state, { auth: payload, authError: null });
      })
      .addCase(authDecryptTokenThunk.rejected, (state, { error }) => {
        // console.error(error);
        Object.assign(state, { auth: null, authError: error });
      });
  },
});

/** 전화번호를 통한 인증 번호 비동기 요청 */
export const authLoginUserThunk = createAsyncThunk(
  'auth/loginUser',
  async (formData: ILogin) => {
    try {
      const res = await authLoginUser(formData);
      return { token: res.data.body.accessToken };
    } catch (error) {
      throw error;
    }
  },
);

/** 토큰 복호화 요청 */
export const authDecryptTokenThunk = createAsyncThunk(
  'auth/decryptToken',
  async (token: string) => {
    try {
      const res = await usersDecryptToken(token);
      return res.data.body;
    } catch (error) {
      throw error;
    }
  },
);

const authReducer = authSlice.reducer;

export const authActions = authSlice.actions;
export default authReducer;
