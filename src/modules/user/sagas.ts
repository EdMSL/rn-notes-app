import { SagaIterator } from 'redux-saga';
import {
  put,
  takeLatest,
  call,
  select,
} from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';

import * as USER_ACTIONS from '$modules/user/actions';
import { USER_TYPES } from './types';
import { IAppState } from '$redux/store';
import { DB } from '$db/database';
import { ISetting, IUserRootState } from './reducer';

const getState = (state: IAppState): IAppState => state;

function* getSettingsSaga(): SagaIterator {
  const settings: ISetting[] = yield call(DB.getSettings);

  if (settings && settings.length > 0) {
    const settingsObj = settings.reduce((currSettings, setting) => {
      return {
        ...currSettings,
        [setting.title]: {
          id: setting.id,
          value: setting.value,
        },
      };
    }, {});

    yield put(USER_ACTIONS.initSettings(settingsObj as IUserRootState));
  }
  console.log(settings);
}

function* changeSettingsSaga({ payload: { name, value } }: ReturnType<typeof USER_ACTIONS.changeSetting>): SagaIterator {
  const {
    user: settings,
  }: IAppState = yield select(getState);

  try {
    yield call(DB.updateSetting, settings[name].id, value);

    const newSetting = {
      [name]: {
        ...settings[name],
        value,
      },
    };

    yield put(USER_ACTIONS.initSettings(newSetting as IUserRootState));
  } catch (error) {
    console.log(error);
  }
}

export function* UserSaga(): SagaIterator {
  yield takeLatest(USER_TYPES.GET_SETTINGS, getSettingsSaga);
  yield takeLatest(USER_TYPES.CHANGE_SETTING, changeSettingsSaga);
}
