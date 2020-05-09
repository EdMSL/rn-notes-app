import { NOTE_TYPES } from '$modules/note/types.ts';
import { INoteRootState } from '$modules/note/reducer.ts';

interface IActionReturnType<T> {
  type: string,
  payload?: T,
}

export const getNotes = (): IActionReturnType<{}> => ({
  type: NOTE_TYPES.GET_NOTES,
});

export const createNote = (
  noteText: string,
): IActionReturnType<typeof noteText> => ({
  type: NOTE_TYPES.CREATE_NOTE,
  payload: noteText,
});

export const setNotes = (
  notes: INoteRootState['notes'],
): IActionReturnType<typeof notes> => ({
  type: NOTE_TYPES.SET_NOTES,
  payload: notes,
});

export const setIsNotesLoading = (
  isNotesLoading: INoteRootState['isNotesLoading'],
): IActionReturnType<typeof isNotesLoading> => ({
  type: NOTE_TYPES.SET_IS_NOTES_LOADING,
  payload: isNotesLoading,
});
