import { USER_TYPES } from '$modules/user/types';
import { IUserRootState } from '$modules/user/reducer';

interface IActionReturnType {
  type: string,
}

interface IActionPayloadReturnType<T> extends IActionReturnType {
  payload: T,
}

export const getSettings = (): IActionReturnType => ({
  type: USER_TYPES.GET_SETTINGS,
});

export const initSettings = (
  settings: IUserRootState,
): IActionPayloadReturnType<IUserRootState> => ({
  type: USER_TYPES.INIT_SETTINGS,
  payload: settings,
});

export const changeSetting = (
  value: any,
  name: string,
): IActionPayloadReturnType<{value: any, name: string}> => ({
  type: USER_TYPES.CHANGE_SETTING,
  payload: {
    name,
    value,
  },
});
