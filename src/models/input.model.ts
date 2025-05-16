import React from 'react';

export interface IInput {
  type?: string;
  name: string;
  placeholder?: string;
  autoComplete?: string;
  onChange?: TChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  isValid?: boolean;
  ref?: React.RefObject<HTMLInputElement | null>;
  inputValue?: string;
  cautionText?: string;
  disabled?: boolean;
  value?: string;
  reg?: RegExp;
}

export interface IInputWithCheck extends IInput {
  useFor?: 'option' | 'auth';
  children: string | React.ReactNode;
  onClick?: TMouseEventHandler<HTMLInputElement>;
}

export interface IInputWithConfirm extends IInput {
  useFor?: 'validation' | 'auth';
  authChecker?: TCheckValidation;
  onClick?: TMouseEventHandler<HTMLButtonElement>;
}

export type TCheckValidation = (userInput: string, reg: RegExp) => boolean;
export type TAsyncReq<T, R> = (req: T) => Promise<R>;

export type TChangeEventHandler<T> = (
  e: React.ChangeEvent<T>,
  value?: RegExp,
) => void;
export type TMouseEventHandler<T> = (e: React.MouseEvent<T>) => void;
