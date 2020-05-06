import { USER_TYPES } from '$modules/user/types';
import { IUserRootState } from '$modules/user/reducer';

interface IActionReturnType<T> {
  type: string,
  payload?: T,
}

export const userAction = (
  anyValue: IUserRootState['anyValue'],
): IActionReturnType<typeof anyValue> => ({
  type: USER_TYPES.ANY_ACTION,
  payload: anyValue,
});
