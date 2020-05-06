import { createReducer } from 'reduxsauce';

import * as USER_ACTIONS from '$modules/user/actions.ts';
import { USER_TYPES } from '$modules/user/types.ts';

export type IUserRootState = Readonly<{
  anyValue: boolean,
}>;

/* eslint-disable @typescript-eslint/no-explicit-any */
type UnsafeReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
/* eslint-enable @typescript-eslint/no-explicit-any */

interface IActionHandler<T> {
  (state: IUserRootState, payload: UnsafeReturnType<T>): IUserRootState,
}

const INITIAL_STATE: IUserRootState = {
  anyValue: true,
};

const userAction: IActionHandler<typeof USER_ACTIONS.userAction> = (
  state,
  { payload: anyValue },
) => ({
  ...state,
  anyValue: anyValue as boolean,
});

const HANDLERS = {
  [USER_TYPES.ANY_ACTION]: userAction,
};

export const userReducer = createReducer<IUserRootState>(INITIAL_STATE, HANDLERS);
