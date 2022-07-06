import React, { useState } from 'react';

import './App.css';
import Input from './Input';
// import RecipeData from './RecipeData';
import {useDispatch, useSelector} from 'react-redux'
import { mod, selectMode, selectUser } from './features/RecipeSlice';
import Signup from './Signup';
import { auth } from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Spinner from 'react-spinkit'



function App() {

  let [mode,setMode]=useState(true)
  let user=useSelector(selectUser)
  const [users,loading]=useAuthState(auth)

   console.log(users)

  console.log(mode)

   let dispatch=useDispatch()
   let inpmode=mode;



  let modeChangeBlc=()=>{

   
     setMode(false)
     dispatch(mod(
      mode
     ))
     
     console.log(mode)

     
  }

  let modeChangeWht=()=>{
    setMode(true)
    dispatch(mod(
      mode
     ))
     console.log(mode)


  }
  let selectmode=useSelector(selectMode)
  console.log(selectmode)



  if(loading){

    return(
      <div className='loading_app'>
        <div  className='loading_spin'>
     <img src='https://www.maggi.co.uk/sites/default/files/styles/maggi_desktop_image_style/public/NUK1265%20maggi%20Recipes%20banner%201500x700px%20opt2A.jpg?h=4f5b30f1&itok=DcsF1RwA' />
       
       <Spinner
       name='ball-spin-fade-loader'
       color='green'
       fadeIn='none'
       
       />
       
        </div>
      </div>
    )
  }












  return ( <>  {users ? <div className=  { mode? 'App_white':'App_Dark'}   >
  <div className='modes'>   <button className='btnmode'>  <button className='mode_btn1' onClick={modeChangeBlc}>Black</button> <button onClick={modeChangeWht} className='mode_btn2'>white</button> </button></div>
 <Input mode={inpmode} />
 {/* <RecipeData/> */}
</div>: <div className='App_signup'> <Signup/></div> }
    
   
    </>
  );
}

export default App;
