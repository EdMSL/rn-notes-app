import { SagaIterator } from 'redux-saga';
import {
  put,
  takeLatest,
  call,
  select,
  delay,
} from 'redux-saga/effects';

import * as NOTE_ACTIONS from '$modules/note/actions';
import { NOTES } from '$constants/mockNotes';
import { NOTE_TYPES } from './types';
import { IAppState } from '$redux/store';
import { INote } from './reducer';

// function* getNotes({ payload: { location } }: LocationChangeAction): SagaIterator {
//   yield put(changeView(DefaultView[getPathNameFromLocationPath(location.pathname).toUpperCase()]));
// }

const getState = (state: IAppState): IAppState => state;

const getNotes = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(NOTES);
    }, 1000);
  });
};

function* getNotesSaga(): SagaIterator {
  yield put(NOTE_ACTIONS.setIsNotesLoading(true));

  const notes = yield call(getNotes);

  if (notes) {
    yield put(NOTE_ACTIONS.setNotes(notes));
  } else {

  }
  yield put(NOTE_ACTIONS.setIsNotesLoading(false));
}

function* createNoteSaga({ payload: noteText }: ReturnType<typeof NOTE_ACTIONS.createNote>): SagaIterator {
  const {
    note: { notes },
  }: IAppState = yield select(getState);

  const newNote: INote = {
    id: (notes.length + 1).toString(),
    title: noteText as string,
    isComplited: false,
  };

  yield put(NOTE_ACTIONS.setNotes([newNote, ...notes]));
}

export function* NoteSaga(): SagaIterator {
  yield takeLatest(NOTE_TYPES.GET_NOTES, getNotesSaga);
  yield takeLatest(NOTE_TYPES.CREATE_NOTE, createNoteSaga);
}
