import { IRegisterRequest } from '@models/account.model';
import client from './client';

export const registerGetAuth = async (contact: string) => {
  return client.get<{ text: string }>('/api/auth', {
    params: { contact: contact },
  });
};

export const registerCreate = async (formData: IRegisterRequest) => {
  return client.post('/api/auth/register', { ...formData });
};
