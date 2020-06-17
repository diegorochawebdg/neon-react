import { combineReducers } from 'redux';
import mobileMenuReducer from 'features/mobileMenu/mobileMenuSlice';
import preloaderReducer from 'features/preloader/preloaderSlice';
import menusReducer from 'features/menus/menusSlice';

export const rootReducer = combineReducers({
  mobileMenu: mobileMenuReducer,
  preloader: preloaderReducer,
  menus: menusReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
