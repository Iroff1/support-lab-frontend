import { TMouseEventHandler } from '@models/input.model';
import { CheckBox, IconChecked } from '@styles/common/CheckBox.style';
import { useState } from 'react';
import { css, styled } from 'styled-components';

interface IInputWithCheck {
  name: string;
  $placeholder: string;
  handleClick?: TMouseEventHandler<HTMLInputElement>;
}

const CheckLabel = styled.label`
  display: flex;
  gap: 8px;
  margin-top: 10px;

  & > input {
    display: none;
  }
`;

const DocumentCheckLabel: React.FC<IInputWithCheck> = ({
  name,
  $placeholder,
  handleClick,
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <CheckLabel>
        <input
          type="radio"
          name={name}
          value={$placeholder}
          onClick={(e) => {
            handleClick && handleClick(e);
            setChecked((prev) => !prev);
          }}
        />
        <CheckBox $checked={checked}>
          <IconChecked />
        </CheckBox>
        <div>{$placeholder}</div>
      </CheckLabel>
    </>
  );
};

export default DocumentCheckLabel;
