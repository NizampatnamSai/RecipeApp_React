import {  createSlice } from '@reduxjs/toolkit';


export const RecipeSlice = createSlice({
  name: 'reciepe',
  initialState:{
    reciepe:null,
    mode:true,
    login:null,
  },
  reducers: {
    reciepee: (state,action) => {
    
      state.reciepe= action.payload;
    },
    mod: (state,action) => {
      state.mode =action.payload;
    },
    eraceRecipe: (state, action) => {

      state.reciepe= null;

    },
    user:(state,action)=>{
   state.login=action.payload;
    },
    logout:(state,action)=>{
      state.login=null;
    }
  },
 
});

export const { reciepee, mod, eraceRecipe,user,logout } = RecipeSlice.actions;

export const selectReciepe = (state) => state.data.reciepe;
export const selectMode = (state) => state.modes.mode;
export const selectUser = (state) => state.users.login;



export default RecipeSlice.reducer;
