import { createReducer } from 'reduxsauce';

import * as USER_ACTIONS from '$modules/user/actions';
import { USER_TYPES } from '$modules/user/types';
import { ILanguage } from '$constants/language';

export type IUserRootState = Readonly<{
  language: ILanguage,
}>;

/* eslint-disable @typescript-eslint/no-explicit-any */
type UnsafeReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
/* eslint-enable @typescript-eslint/no-explicit-any */

interface IActionHandler<T> {
  (state: IUserRootState, payload: UnsafeReturnType<T>): IUserRootState,
}

const INITIAL_STATE: IUserRootState = {
  language: 'ru',
};

const setLanguage: IActionHandler<typeof USER_ACTIONS.setLanguage> = (
  state,
  { payload: language },
) => ({
  ...state,
  language: language as ILanguage,
});

const HANDLERS = {
  [USER_TYPES.SET_LANGUAGE]: setLanguage,
};

export const userReducer = createReducer<IUserRootState>(INITIAL_STATE, HANDLERS);
