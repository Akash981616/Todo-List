import { configureStore } from '@reduxjs/toolkit';
import { TodoReducers } from '../reducers/TodoReducers';


export const store = configureStore({
  reducer: {
   todoreducer:TodoReducers,
  },
});
