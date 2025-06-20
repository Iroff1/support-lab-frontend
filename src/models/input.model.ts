import { IRegister } from './auth.model';

/** 가장 기본적인 Input 인터페이스 */
export interface IInput<T = string> {
  // input 기존 속성
  type?: string;
  name: keyof T;
  placeholder?: string;
  autoComplete?: React.InputHTMLAttributes<HTMLInputElement>['autoComplete'];
  required?: boolean;
  value?: string;
  disabled?: boolean; // input 태그를 잠그기 위한 속성
  onChange?: TChangeEventHandler<HTMLInputElement>;
  ref?: React.RefObject<HTMLInputElement | null>; // ref 할당을 위한 속성

  // 커스텀 속성
  $isValid?: boolean; //  유효한 값이 들어왔는지 판별을 위한 속성;
  $cautionText?: string | React.ReactNode; // 알림 창에 띄울 문자열/컴포넌트 속성
  $reg?: RegExp; // 이
  $theme?: 'default' | 'modify'; // 컴포넌트 사용 목표 속성
  $PR?: number;
}

/** input[type='checkout']이 있는 입력 컴포넌트용 interface */
export interface IInputWithCheck<T> extends IInput<T> {
  useFor?: 'option' | 'auth'; // 컴포넌트 사용 목표 속성
  children: string | React.ReactNode; // 컴포넌트 내 input 태그 외 태그에 사용할 '문자열|자식' 컴포넌트 속성
  handleClick?: TMouseEventHandler<HTMLInputElement>; // input[type='checkout']를 위한 이벤트 콜백함수 속성
  handlePopup?: TMouseEventHandler<HTMLInputElement>;
  popup?: React.ReactNode | string;
  $checked: boolean;
  $fontSize?: string;
}

/** 버튼이 같이 있는 입력 컴포넌트용 interface */
export interface IInputWithConfirm<T> extends IInput<T> {
  useFor?: 'validation' | 'auth' | 'modify'; // 컴포넌트 사용 목표 속성
  handleConfirm?: TMouseEventHandler<HTMLButtonElement>; // 버튼을 위한 이벤트 콜백함수 속성
}

export type TRegObj = { [key in keyof IRegister]: RegExp };
export type TCheckValidation = (
  userInput: string,
  reg: keyof TRegObj,
) => boolean;
export type TAsyncReq<T, R> = (req: T) => Promise<R>;

/** change 이벤트 핸들러 함수 타입 <T : 대상 input 태그 속성>
 *
 * e: 이벤트 객체
 *
 * value?: 정규표현식
 *
 * max?: 최대 문자열 길이 제한 값
 */
export type TFormEventHandler = (e: React.FormEvent<HTMLFormElement>) => void;
export type TChangeEventHandler<T> = (
  e: React.ChangeEvent<T>,
  regForInput?: RegExp,
  max?: number,
) => void;
/** 마우스 이벤트 핸들러 함수 타입
 *
 *  T = 대상 태그 속성 기입을 위한 제네릭 타입
 */
export type TMouseEventHandler<T> = (e: React.MouseEvent<T>) => void;
