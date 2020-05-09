import { SagaIterator } from 'redux-saga';
import {
  put,
  takeLatest,
  call,
  select,
} from 'redux-saga/effects';

import * as NOTE_ACTIONS from '$modules/note/actions';
import { NOTE_TYPES } from './types';
import { IAppState } from '$redux/store';
import { INote } from './reducer';
import { DB } from '$db/database';

const getState = (state: IAppState): IAppState => state;

function* getNotesSaga(): SagaIterator {
  yield put(NOTE_ACTIONS.setIsNotesLoading(true));

  const notes: INote[] = yield call(DB.getNotes);

  if (notes) {
    yield put(NOTE_ACTIONS.setNotes(notes.reverse()));
  } else {

  }
  yield put(NOTE_ACTIONS.setIsNotesLoading(false));
}

function* createNoteSaga({ payload: noteText }: ReturnType<typeof NOTE_ACTIONS.createNote>): SagaIterator {
  const {
    note: { notes },
  }: IAppState = yield select(getState);

  const newNote: INote = {
    id: 0,
    title: noteText as string,
    isComplited: false,
  };

  const id = yield call(DB.createNote, newNote);
  newNote.id = id;

  yield put(NOTE_ACTIONS.setNotes([newNote, ...notes]));
}

function* removeNoteSaga({ payload: id }: ReturnType<typeof NOTE_ACTIONS.removeNote>): SagaIterator {
  try {
    yield call(DB.removeNote, id as number);

    const {
      note: { notes },
    }: IAppState = yield select(getState);

    const newNotes = notes.filter((note) => note.id !== id);

    yield put(NOTE_ACTIONS.setNotes(newNotes));
  } catch (error) {

  }
}

export function* NoteSaga(): SagaIterator {
  yield takeLatest(NOTE_TYPES.GET_NOTES, getNotesSaga);
  yield takeLatest(NOTE_TYPES.CREATE_NOTE, createNoteSaga);
  yield takeLatest(NOTE_TYPES.REMOVE_NOTE, removeNoteSaga);
}
