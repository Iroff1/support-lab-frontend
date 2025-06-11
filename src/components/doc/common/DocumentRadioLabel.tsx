import palette from '@assets/colors';
import { TMouseEventHandler } from '@models/input.model';
import { css, styled } from 'styled-components';

interface IInputWithRadio {
  name: string;
  $placeholder: string;
  $checked: boolean;
  handleClick: TMouseEventHandler<HTMLInputElement>;
}

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;

  & > input {
    display: none;
  }
`;

const RadioCircle = styled.div<{ $checked: boolean }>`
  width: 20px;
  height: 20px;
  aspect-ratio: 1/1;
  border: 2px solid ${palette.black.B40};
  border-radius: 50%;
  position: relative;
  transition: 0.2s ease border;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: ${palette.main.main};
    border-radius: 50%;
    opacity: 0;
    transition: 0.2s ease opacity;
  }

  ${({ $checked }) =>
    $checked &&
    css`
      border: 2px solid ${palette.main.main};
      &::before {
        opacity: 1;
      }
    `}
`;

const DocumentRadioLabel: React.FC<IInputWithRadio> = ({
  name,
  $placeholder,
  $checked,
  handleClick,
}) => {
  return (
    <>
      <RadioLabel>
        <input
          type="radio"
          name={name}
          value={$placeholder}
          onClick={handleClick}
        />
        <RadioCircle $checked={$checked} />
        <div>{$placeholder}</div>
      </RadioLabel>
    </>
  );
};

export default DocumentRadioLabel;
