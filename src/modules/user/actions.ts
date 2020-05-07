import { USER_TYPES } from '$modules/user/types';
import { IUserRootState } from '$modules/user/reducer';

interface IActionReturnType<T> {
  type: string,
  payload?: T,
}

export const setLanguage = (
  language: IUserRootState['language'],
): IActionReturnType<typeof language> => ({
  type: USER_TYPES.SET_LANGUAGE,
  payload: language,
});
