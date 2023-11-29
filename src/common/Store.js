
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../auth/slice';
import journalSlice from '../journal/slice'
import trashSlice from '../trash/slice';

const store = configureStore({
  reducer: {
    entry:journalSlice,
    trash:trashSlice,
    auth: authSlice,
  },
});

export default store;
