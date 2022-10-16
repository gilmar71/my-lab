import { InitialState, INITIAL_STATE } from './mainContext';
import { v4 as uuidv4 } from 'uuid';

export enum MainContextActions {
  ToggleTheme = 'THEME_THEME',
  CreateNewItem = 'CREATE_NEW_ITEM',
  DeleteItem = 'DELETE_ITEM',
  ToggleIsEditing = 'TOGGLE_IS_EDITING',
  EditItem = 'EDIT_ITEM',
}
interface IDispatchActions {
  type: MainContextActions;
  payload?: any;
}
export interface IItem {
  id: string;
  nickname?: string;
  age?: number;
  whattsapp?: number;
  isEditing: boolean;
}
export const mainContextReducer = (
  state = INITIAL_STATE,
  action: IDispatchActions,
): InitialState => {
  let tmpState = { ...state };
  switch (action.type) {
    case MainContextActions.ToggleTheme:
      tmpState.themeName = state.themeName === 'light' ? 'dark' : 'light';
      break;
    case MainContextActions.CreateNewItem:
      const newItem: IItem = {
        id: uuidv4(),
        isEditing: true,
      };
      tmpState.items = [newItem, ...state.items];
      break;
    case MainContextActions.DeleteItem:
      tmpState.items = state.items.filter(({ id }) => id != action.payload.id);
      break;
    case MainContextActions.ToggleIsEditing:
      tmpState.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, isEditing: !item.isEditing }
          : item,
      );
      break;
    case MainContextActions.EditItem:
      tmpState.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, ...action.payload, isEditing: false }
          : item,
      );
      break;
    default:
      throw new Error();
  }
  return tmpState;
};
