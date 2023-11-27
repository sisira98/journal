
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import journalSlice from './journal'

const store = configureStore({
  reducer: {
    entry:journalSlice,
    auth: authSlice,
  },
});

export default store;
