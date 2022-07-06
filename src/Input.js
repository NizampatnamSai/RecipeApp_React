import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import {useDispatch, useSelector} from 'react-redux'
// import { displayName } from 'react-spinkit';
import {  eraceRecipe, logout, reciepee, selectReciepe, selectUser } from './features/RecipeSlice';
import { auth } from './Firebase';

import './Input.css'
// import RecipeData from './RecipeData';
import ReduxInput from './ReduxInput';



function Input({mode}) {
    let [list,setList]=useState([]);
    let [req, setReq]=useState('')
    let dispatch=useDispatch()
    let reciperedux=useSelector(selectReciepe)
    // let users=useSelector(selectUser)
  const [users,loading]=useAuthState(auth)
  console.log(users)



    console.log(users?.photoURL)

    const API_KEY = `45b0ea5f3e6b36176d9842bf10d513fe`;
    const API_ID =`37c4cfeb`;
    
  let SearchApi=()=>{
    axios.get(`https://api.edamam.com/search?q=${req}&app_id=${API_ID}&app_key=${API_KEY}`).then((data)=>{
      setList(data.data)
      console.log(data)
  }).catch((e)=>console.log(e.message))
  }
  


   console.log(list.hits)

   let handleClickSearch=()=>{
    SearchApi()
  

    if(list.hits){
      console.log('redux')


      dispatch(reciepee({
        data:list.hits
      }))
     
      
    }

    
    
   }

  //  useEffect(()=>{
  //   axios.get(`https://api.edamam.com/search?q=${req}&app_id=${API_ID}&app_key=${API_KEY}`).then((data)=>{
  //     setList(data.data)
  //     console.log(data)
  // }).catch((e)=>console.log(e.message))


  //  },[req])

   let onCanelclk=()=>{
    // alert('are you sure!')
    setReq('')
    req=null;
  console.log(req)
    // dispatch(eraceRecipe())
    
   }

   let onSignup=()=>{
    auth.signOut()
   }






console.log(reciperedux)
// console.log(users?.displayName[0])
  return (
    <div className= { mode ? 'App_inputWht':'App_inputBlk '}>
      Search Recipes <br/>
      <input  value={req}  className='Input_input' placeholder='type one or more keywords' onChange={e=>setReq(e.target.value)}/><button className='input_btn' onClick={handleClickSearch}>Search</button><button className='csncel_btn' onClick={onCanelclk}>Cancel</button>
      <div className='signout_pop'> <img  onClick={onSignup} className='signoutimg' src={users?.photoURL} alt='Signout'/> 
       <small className='signout_show'> signOut !</small> </div>
          {/* Part without Redux  */}



    {/* {list.hits && list?.hits.map((data)=>{return(
        <div className='inpt_Recipe'> */}

         {/* CHecking purpose  */}
             {/* {data.recipe.calories} 
            {data.recipe.label}
            {data.recipe.healthLabels} 

            <img src={data.recipe.image} alt='dif'/>*/}



             
            {/* <RecipeData mode={mode}  label=  {data.recipe.label} calories={data.recipe.calories} 
            healthLabels={data.recipe.healthLabels}  digest={data.recipe.digest} image={data.recipe.image}
            num={data.recipe.yield}
            /> */}
            

            

        {/* </div>
    )
    })
      } */}
      
                      {reciperedux? <ReduxInput/>: null}
    
    </div>
  )
}

export default Input
