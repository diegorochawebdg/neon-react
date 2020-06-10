import { combineReducers } from 'redux';
import mobileMenuReducer from 'features/mobileMenu/mobileMenuSlice';
import preloaderReducer from 'features/preloader/preloaderSlice';

export const rootReducer = combineReducers({
  mobileMenu: mobileMenuReducer,
  preloader: preloaderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
