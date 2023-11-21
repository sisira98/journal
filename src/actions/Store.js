
import { configureStore } from '@reduxjs/toolkit';
import entryReducer from './Reducer';

const store = configureStore({
  reducer: {
    entry: entryReducer,
  },
});

export default store;
