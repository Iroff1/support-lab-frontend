export interface IInput {
  type?: string;
  name: string;
  placeholder?: string;
  autoComplete?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  ref?: React.RefObject<HTMLInputElement | null>;
}

export interface IInputWithCheck extends IInput {
  useFor?: 'option' | 'auth';
  children: string | React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface IInputWithConfirm extends IInput {
  useFor?: 'validation' | 'auth';
  handler?: (userInput: string) => boolean;
}
