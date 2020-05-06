import { NOTE_TYPES } from '$modules/note/types.ts';
import { INoteRootState } from '$modules/note/reducer.ts';

interface IActionReturnType<T> {
  type: string,
  payload?: T,
}

export const noteAction = (
  anyNote: INoteRootState['anyNote'],
): IActionReturnType<typeof anyNote> => ({
  type: NOTE_TYPES.ANY_SECTION,
  payload: anyNote,
});
