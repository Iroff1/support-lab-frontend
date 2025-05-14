import React from 'react';

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
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export interface IInputWithConfirm extends IInput {
  useFor?: 'validation' | 'auth';
  handler?: (userInput: string) => boolean;
}

export type TChangeEventHandler<T> = (e: React.ChangeEvent<T>) => void;
export type TMouseEventHandler<T> = (e: React.MouseEvent<T>) => void;
