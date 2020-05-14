import { NOTE_TYPES } from '$modules/note/types.ts';
import { INoteRootState } from '$modules/note/reducer.ts';

interface IActionReturnType {
  type: string,
}

interface IActionPayloadReturnType<T> extends IActionReturnType {
  payload: T,
}

export const getNotes = (): IActionReturnType => ({
  type: NOTE_TYPES.GET_NOTES,
});

export const createNote = (
  noteText: string,
): IActionPayloadReturnType<typeof noteText> => ({
  type: NOTE_TYPES.CREATE_NOTE,
  payload: noteText,
});

export const removeNote = (
  noteId: number,
): IActionPayloadReturnType<typeof noteId> => ({
  type: NOTE_TYPES.REMOVE_NOTE,
  payload: noteId,
});

export const updateNote = (
  noteId: number,
  text: string,
): IActionPayloadReturnType<{noteId: number, text: string}> => ({
  type: NOTE_TYPES.UPDATE_NOTE,
  payload: {
    noteId,
    text,
  },
});

export const setNotes = (
  notes: INoteRootState['notes'],
): IActionPayloadReturnType<typeof notes> => ({
  type: NOTE_TYPES.SET_NOTES,
  payload: notes,
});

export const setIsNotesLoading = (
  isNotesLoading: INoteRootState['isNotesLoading'],
): IActionPayloadReturnType<typeof isNotesLoading> => ({
  type: NOTE_TYPES.SET_IS_NOTES_LOADING,
  payload: isNotesLoading,
});
