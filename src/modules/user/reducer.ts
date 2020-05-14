import { createReducer } from 'reduxsauce';

import * as USER_ACTIONS from '$modules/user/actions';
import { USER_TYPES } from '$modules/user/types';
import { ILanguage } from '$constants/language';

export interface ISetting {
  id: number,
  title: string,
  value: string|number,
}

export interface IStateSetting<V> {
  id: number,
  value: V,
}

export type IUserRootState = Readonly<{
  language: IStateSetting<ILanguage>,
}>;

/* eslint-disable @typescript-eslint/no-explicit-any */
type UnsafeReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
/* eslint-enable @typescript-eslint/no-explicit-any */

interface IActionHandler<T> {
  (state: IUserRootState, payload: UnsafeReturnType<T>): IUserRootState,
}

const INITIAL_STATE: IUserRootState = {
  language: {
    id: 0,
    value: 'ru',
  },
};

const initSettings: IActionHandler<typeof USER_ACTIONS.initSettings> = (
  state,
  { payload: settings },
) => ({
  ...state,
  ...settings,
});

const HANDLERS = {
  [USER_TYPES.INIT_SETTINGS]: initSettings,
};

export const userReducer = createReducer<IUserRootState>(INITIAL_STATE, HANDLERS);
