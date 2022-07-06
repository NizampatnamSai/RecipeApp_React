import { configureStore } from '@reduxjs/toolkit';
import reciepeReducer from '../features/RecipeSlice';

export const store = configureStore({
  reducer: {
    data: reciepeReducer,
    modes: reciepeReducer,
    users: reciepeReducer,
  },
});
