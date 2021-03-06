import { configureStore } from '@reduxjs/toolkit';
import reciepeReducer from '../features/RecipeSlice';
import thunkReducer from '../features/RecipeThunkSlice'

export const store = configureStore({
  reducer: {
    data: reciepeReducer,
    modes: reciepeReducer,
    users: reciepeReducer,
    recipe:thunkReducer,
    statuss:thunkReducer,
  },
});
