import { ICSInquirement } from '@containers/cs/CSInquirementContainer';
import client from './client';

/** POST/customerService/inquirement 문의 요청 */
export const csInquirement = async (formData: ICSInquirement) => {
  const res = await client.post('/api/customerService/inquirement', {
    ...formData,
  });
  return res;
};
