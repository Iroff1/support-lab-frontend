import React from 'react';

export interface IInput {
  type?: string;
  name: string;
  placeholder?: string;
  autoComplete?: string;
  onChange?: TChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  isValid?: boolean;
  validChecker?: TChecker;
  ref?: React.RefObject<HTMLInputElement | null>;
  inputValue?: string;
  cautionText?: string;
  disabled?: boolean;
  [key: string]: any;
}

export interface IInputWithCheck extends IInput {
  useFor?: 'option' | 'auth';
  children: string | React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export interface IInputWithConfirm extends IInput {
  useFor?: 'validation' | 'auth';
}

export type TChecker = (userInput: string) => string;

export type TChangeEventHandler<T> = (e: React.ChangeEvent<T>) => void;
export type TMouseEventHandler<T> = (e: React.MouseEvent<T>) => void;
