import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios';



const API_KEY = `45b0ea5f3e6b36176d9842bf10d513fe`;
   const API_ID =`37c4cfeb`;

export const getrecipe= createAsyncThunk('reciepe/getrecipe', async(inp)=>{

return fetch(`https://api.edamam.com/search?q=${inp}&app_id=${API_ID}&app_key=${API_KEY}`).then((res)=>
    res.json()
)

})


export const RecipeThunkSLice = createSlice({
  name: 'reciepe',
  initialState:{
    reciepe:[],
    status:null,
    
  },
  reducers: {

    eraceRecipe: (state, action) => {

      state.reciepe= null;

    },

  },


  extraReducers:{
    [getrecipe.pending]:(state,action)=>{
        state.status='loading'

    },
    [getrecipe.fulfilled]:(state,action)=>{
        state.reciepe=action.payload
        state.status='success'

    },
    [getrecipe.rejected]:(state)=>{
        state.status='failed'

    }

  }
 
});

export const { eraceRecipe } = RecipeThunkSLice.actions;

// export const selectReciepe = (state) => state.data.reciepe;
// export const selectMode = (state) => state.modes.mode;
// export const selectUser = (state) => state.users.login;
export const selectThunkRcipe = (state) => state.recipe.reciepe;
export const selectSTatus = (state) => state.statuss.status;



export default RecipeThunkSLice.reducer;
