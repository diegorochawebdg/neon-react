import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IMenus from 'interfaces/Menus.interface';

const initialMenuState: IMenus[] = [];
const initialState = { menusList: initialMenuState };

const menusSlice = createSlice({
  name: 'menus',
  initialState,
  reducers: {
    setMenuItems(state, action: PayloadAction<IMenus[]>) {
      state.menusList = action.payload;
    },
  },
});

export const {
  setMenuItems,
} = menusSlice.actions;

export default menusSlice.reducer;