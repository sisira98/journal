
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../auth/authSlice';
import journalSlice from '../journal/journalSlice'
import trashSlice from '../trash/trashSlice';

const store = configureStore({
  reducer: {
    entry:journalSlice,
    trash:trashSlice,
    auth: authSlice,
  },
});

export default store;
