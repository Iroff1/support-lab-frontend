import { IResponse } from '@models/common.model';
import axios from 'axios';

/**
 * axios 에러 객체인지 판별 후, 맞춰서 반환시켜주는 함수
 * @param e : 에러 객체 (default: unknown)
 * @returns axiosError | e
 */

const translateAxiosError = <T extends Object>(
  e: unknown,
  callback?: (resData: IResponse<T>) => void,
) => {
  if (axios.isAxiosError<IResponse<T>>(e) && e.response) {
    console.log(e.response.data);
    callback && callback(e.response.data);
    return e.response ? e.response.data : e;
  }
};

export default translateAxiosError;
