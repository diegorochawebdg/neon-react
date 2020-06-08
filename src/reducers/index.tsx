import { combineReducers } from 'redux';
import mobileMenuReducer from '../features/mobileMenu/mobileMenuSlice';

export const rootReducer = combineReducers({
  mobileMenu: mobileMenuReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
