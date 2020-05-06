import { createReducer } from 'reduxsauce';

import * as NOTE_ACTIONS from '$modules/note/actions.ts';
import { NOTE_TYPES } from '$modules/note/types.ts';

export type INoteRootState = Readonly<{
  anyNote: boolean,
}>;

/* eslint-disable @typescript-eslint/no-explicit-any */
type UnsafeReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
/* eslint-enable @typescript-eslint/no-explicit-any */

interface IActionHandler<T> {
  (state: INoteRootState, payload: UnsafeReturnType<T>): INoteRootState,
}

const INITIAL_STATE: INoteRootState = {
  anyNote: false,
};

const noteAction: IActionHandler<typeof NOTE_ACTIONS.noteAction> = (
  state,
  { payload: anyNote },
) => ({
  ...state,
  anyNote: anyNote as boolean,
});

const HANDLERS = {
  [NOTE_TYPES.ANY_SECTION]: noteAction,
};

export const noteReducer = createReducer<INoteRootState>(INITIAL_STATE, HANDLERS);
