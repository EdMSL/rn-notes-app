import { USER_TYPES } from '$modules/user/types';
import { IUserRootState } from '$modules/user/reducer';

interface IActionReturnType<T> {
  type: string,
  payload?: T,
}

export const getSettings = (): IActionReturnType<{}> => ({
  type: USER_TYPES.GET_SETTINGS,
});

export const initSettings = (
  settings: IUserRootState,
): IActionReturnType<IUserRootState> => ({
  type: USER_TYPES.INIT_SETTINGS,
  payload: settings,
});

export const changeSetting = (
  value: any,
  name: string,
): IActionReturnType<{value: any, name: string}> => ({
  type: USER_TYPES.CHANGE_SETTING,
  payload: {
    name,
    value,
  },
});

export const setLanguage = (
  language: IUserRootState['language'],
): IActionReturnType<typeof language> => ({
  type: USER_TYPES.SET_LANGUAGE,
  payload: language,
});
