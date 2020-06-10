import { createSlice } from '@reduxjs/toolkit';

type preloaderInitialState = { isPreloaderVisible: boolean };

const preloaderSlice = createSlice({
  name: 'preloader',
  initialState: { isPreloaderVisible: true } as preloaderInitialState,
  reducers: {
    showPreloader(state) {
      state.isPreloaderVisible = true;
    },
    hidePreloader(state) {
      state.isPreloaderVisible = false;
    },
  },
});

export const { showPreloader, hidePreloader } = preloaderSlice.actions;
export default preloaderSlice.reducer;
