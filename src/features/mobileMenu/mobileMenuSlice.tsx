import { createSlice } from '@reduxjs/toolkit';

type mobileMenuSliceState = { isMobileMenuOpened: boolean };

const mobileMenuSlice = createSlice({
  name: 'mobileMenu',
  initialState: { isMobileMenuOpened: false } as mobileMenuSliceState,
  reducers: {
    openMobileMenu(state) {
      state.isMobileMenuOpened = true;
    },
    closeMobileMenu(state) {
      state.isMobileMenuOpened = false;
    },
    toggleMobileMenu(state) {
      state.isMobileMenuOpened = !state.isMobileMenuOpened;
    },
  },
});

export const {
  openMobileMenu,
  closeMobileMenu,
  toggleMobileMenu,
} = mobileMenuSlice.actions;

export default mobileMenuSlice.reducer;
