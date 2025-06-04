import { csInquirement } from '@api/cs';
import CSInquirementForm from '@components/cs/CSInquirementForm';
import useInit from '@hooks/useInit';
import { TChangeEventHandler } from '@models/input.model';
import { useAppSelector } from '@store/index';
import handleChangeField from '@utils/handleChangeField';
import React, { useEffect, useState } from 'react';

export interface ICSInquirement {
  username: string;
  contact: string;
  email: string;
  inquirementType: string;
  inquirementContent: string;
}

export interface ICSInquirementState {
  form: ICSInquirement;
  toggleSelectBox: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleInqType: (e: React.MouseEvent<HTMLLIElement>) => void;
  handleChange: TChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleSubmit: () => void;
}

const CSInquirementContainer = ({ setIsDone }: { setIsDone: () => void }) => {
  const { auth } = useAppSelector(({ auth }) => ({
    auth: auth.auth,
  }));
  const [form, setForm] = useState<ICSInquirement>({
    username: '',
    contact: '',
    email: '',
    inquirementType: '',
    inquirementContent: '',
  });
  const { isInit, startInit } = useInit();

  // 핸들러 선언부
  const handleChange: TChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e, reg, max) => {
    handleChangeField<ICSInquirement>(e, setForm, reg, max);
  };
  const handleInqType = (e: React.MouseEvent<HTMLLIElement>) => {
    const inqType = e.currentTarget.innerText;
    setForm((prev) => ({
      ...prev,
      inquirementType: inqType,
    }));
  };
  const toggleSelectBox = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.toggle('on');
  };
  const handleSubmit = async () => {
    console.log(form);
    try {
      const res = await csInquirement(form);
      if (res.status === 200) {
        // alert('문의 전송에 성공했습니다.');
        setIsDone();
      }
    } catch (e) {
      console.error(e);
      alert('문의 전송에 실패했습니다.');

      setIsDone(); // test code
    }
  };

  // 컴포넌트 모니터링
  useEffect(() => {
    if (auth) {
      setForm((prev) => ({
        ...prev,
        username: auth.username,
        contact: auth.contact,
        email: auth.email,
      }));
    }
    startInit();
  }, []);
  useEffect(() => {
    if (!isInit) return;
  }, [isInit]);

  return (
    <CSInquirementForm
      form={form}
      toggleSelectBox={toggleSelectBox}
      handleInqType={handleInqType}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default React.memo(CSInquirementContainer);
