import { ICSInquirement } from '@containers/cs/CSInquirementContainer';
import client from './client';
import { IResponse } from '@models/common.model';

/** POST/customerService/inquirement 문의 요청 */
export const csInquirement = async (formData: ICSInquirement) => {
  const res = await client.post<IResponse>('/api/customerService/inquirement', {
    ...formData,
  });
  return res;
};
