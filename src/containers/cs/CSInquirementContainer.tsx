import { csInquirement } from '@api/cs';
import CSInquirementForm from '@components/cs/CSInquirementForm';
import useCheckList from '@hooks/useCheckList';
import useInit from '@hooks/useInit';
import { TChangeEventHandler } from '@models/input.model';
import { useAppSelector } from '@store/index';
import checkValidation from '@utils/checkValidation';
import handleChangeField from '@utils/handleChangeField';
import React, { useEffect, useState } from 'react';

export interface ICSInquirement {
  name: string;
  phone: string;
  email: string;
  inquirementType: string;
  inquirementContent: string;
}

export interface ICSInquirementState {
  inquireForm: ICSInquirement;
  checkResult: boolean;
  toggleSelectBox: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleInqType: (e: React.MouseEvent<HTMLLIElement>) => void;
  handleChange: TChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleSubmit: () => void;
}

const CSInquirementContainer = ({ setIsDone }: { setIsDone: () => void }) => {
  const auth = useAppSelector(({ auth }) => auth.auth);
  const [inquireForm, setInquireForm] = useState<ICSInquirement>({
    name: '',
    phone: '',
    email: '',
    inquirementType: '',
    inquirementContent: '',
  });
  const { checkResult, modifyCheckList } = useCheckList<ICSInquirement>({
    name: false,
    phone: false,
    email: false,
    inquirementType: false,
    inquirementContent: false,
  });
  const { isInit, startInit } = useInit();

  // 핸들러 선언부
  const handleChange: TChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e, reg, max) => {
    handleChangeField<ICSInquirement>(e, setInquireForm, reg, max);
  };
  const handleInqType = (e: React.MouseEvent<HTMLLIElement>) => {
    const inqType = e.currentTarget.innerText;
    setInquireForm((prev) => ({
      ...prev,
      inquirementType: inqType,
    }));
  };
  const toggleSelectBox = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.toggle('on');
  };
  const handleSubmit = async () => {
    try {
      const res = await csInquirement(inquireForm);
      if (res.data.status === '200') {
        setIsDone();
      }
    } catch (e) {
      e;
      // setIsDone(); // test code
    }
  };

  // 컴포넌트 모니터링
  useEffect(() => {
    if (auth) {
      setInquireForm((prev) => ({
        ...prev,
        name: auth.name,
        phone: auth.phone,
        email: auth.email,
      }));
    }
    startInit();
  }, []);
  useEffect(() => {
    if (!isInit) return;
  }, [isInit]);
  useEffect(() => {
    modifyCheckList('email', checkValidation(inquireForm.email, 'email'));
  }, [inquireForm.email]);
  useEffect(() => {
    modifyCheckList('phone', checkValidation(inquireForm.phone, 'phone'));
  }, [inquireForm.phone]);
  useEffect(() => {
    modifyCheckList('name', checkValidation(inquireForm.name, 'name'));
  }, [inquireForm.name]);
  useEffect(() => {
    modifyCheckList('inquirementType', inquireForm.inquirementType.length > 0);
  }, [inquireForm.inquirementType]);
  useEffect(() => {
    modifyCheckList(
      'inquirementContent',
      inquireForm.inquirementContent.length > 10,
    );
  }, [inquireForm.inquirementContent]);

  return (
    <CSInquirementForm
      inquireForm={inquireForm}
      checkResult={checkResult}
      toggleSelectBox={toggleSelectBox}
      handleInqType={handleInqType}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default React.memo(CSInquirementContainer);
