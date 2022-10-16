import { createContext, useContext, useReducer, useCallback } from 'react';
import { IItem, MainContextActions, mainContextReducer } from './reducer';

interface MainContextProviderProps {
  children: React.ReactNode;
}
export const INITIAL_STATE = {
  themeName: 'light',
  items: [] as IItem[],
};
export type InitialState = typeof INITIAL_STATE;
export const MainContext = createContext({
  state: INITIAL_STATE,
  toggleTheme: () => {},
  createNewItem: () => {},
  deleteItem: (id: string) => {},
  toggleIsEditing: (id: string) => {},
  editItem: (payload: IItem) => {},
});
export const MainContextProvider = ({ children }: MainContextProviderProps) => {
  const [state, dispatch] = useReducer(mainContextReducer, INITIAL_STATE);
  const toggleTheme = useCallback(() => {
    dispatch({
      type: MainContextActions.ToggleTheme,
    });
  }, [dispatch]);
  const createNewItem = useCallback(() => {
    dispatch({
      type: MainContextActions.CreateNewItem,
    });
  }, []);
  const deleteItem = useCallback((id: string) => {
    dispatch({
      type: MainContextActions.DeleteItem,
      payload: { id },
    });
  }, []);
  const toggleIsEditing = useCallback((id: string) => {
    dispatch({
      type: MainContextActions.ToggleIsEditing,
      payload: { id },
    });
  }, []);
  const editItem = useCallback((payload: IItem) => {
    dispatch({
      type: MainContextActions.EditItem,
      payload,
    });
  }, []);
  return (
    <MainContext.Provider
      value={{
        state,
        toggleTheme,
        createNewItem,
        deleteItem,
        toggleIsEditing,
        editItem,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const MyContext = () => useContext(MainContext);
