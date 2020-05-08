import { createReducer } from 'reduxsauce';

import * as NOTE_ACTIONS from '$modules/note/actions.ts';
import { NOTE_TYPES } from '$modules/note/types.ts';

export interface INote {
  id: string,
  title: string,
  isComplited: boolean,
}

export type INoteRootState = Readonly<{
  notes: INote[],
  isNotesLoading: boolean,
}>;

/* eslint-disable @typescript-eslint/no-explicit-any */
type UnsafeReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
/* eslint-enable @typescript-eslint/no-explicit-any */

interface IActionHandler<T> {
  (state: INoteRootState, payload: UnsafeReturnType<T>): INoteRootState,
}

const setNotes: IActionHandler<typeof NOTE_ACTIONS.setNotes> = (
  state,
  { payload: notes },
) => ({
  ...state,
  notes: notes as INote[],
});

const setIsNotesLoading: IActionHandler<typeof NOTE_ACTIONS.setIsNotesLoading> = (
  state,
  { payload: isNotesLoading },
) => ({
  ...state,
  isNotesLoading: isNotesLoading as boolean,
});

const HANDLERS = {
  [NOTE_TYPES.SET_NOTES]: setNotes,
  [NOTE_TYPES.SET_IS_NOTES_LOADING]: setIsNotesLoading,
};

const INITIAL_STATE: INoteRootState = {
  notes: [],
  isNotesLoading: false,
};

export const noteReducer = createReducer<INoteRootState>(INITIAL_STATE, HANDLERS);
