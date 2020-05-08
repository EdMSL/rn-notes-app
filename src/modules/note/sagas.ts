import { SagaIterator } from 'redux-saga';
import {
  put, takeLatest, call, delay,
} from 'redux-saga/effects';

import * as NOTE_ACTIONS from '$modules/note/actions';
import { NOTES } from '$constants/mockNotes';
import { NOTE_TYPES } from './types';

// function* getNotes({ payload: { location } }: LocationChangeAction): SagaIterator {
//   yield put(changeView(DefaultView[getPathNameFromLocationPath(location.pathname).toUpperCase()]));
// }

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

export function* NoteSaga(): SagaIterator {
  yield takeLatest(NOTE_TYPES.GET_NOTES, getNotesSaga);
}
