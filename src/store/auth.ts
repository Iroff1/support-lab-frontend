import { authLoginUser } from '@api/auth';
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
      localStorage.getItem('auth') && localStorage.removeItem('auth');
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
        state.authError = null;
        state.auth = payload.auth;
      })
      .addCase(authLoginUserThunk.rejected, (state, { error }) => {
        console.error(error);
        // state.auth = null;

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

const authReducer = authSlice.reducer;

export const authActions = authSlice.actions;
export default authReducer;
