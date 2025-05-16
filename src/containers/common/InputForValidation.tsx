import { IInputWithConfirm, TMouseEventHandler } from '@models/input.model';
import React, { useRef, useState } from 'react';
import InputWithConfirm from './InputWithConfirm';
import checkValidation from '@utils/checkValidation';

const InputForValidation: React.FC<IInputWithConfirm> = (props) => {
  const ref = useRef<HTMLInputElement>(null);
  const [newCautionText, setNewCautionText] = useState<string>('');
  const [isValid, setIsValid] = useState(false);
  const { cautionText, reg } = props;

  /** 유효성 검사용 핸들러 함수 */
  const handleValidation: TMouseEventHandler<HTMLButtonElement> = (e) => {
    const userInput = ref.current;
    if (!userInput) return;

    if (reg && userInput.value.length) {
      const result = checkValidation(userInput.value, reg);

      setNewCautionText(result ? cautionText || '' : '사용 불가합니다.');
      setIsValid(result);
    }
  };

  return (
    <InputWithConfirm
      {...props}
      ref={ref}
      isValid={isValid}
      cautionText={newCautionText}
      onClick={handleValidation}
      useFor="validation"
    />
  );
};
export default InputForValidation;
