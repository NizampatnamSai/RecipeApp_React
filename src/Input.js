// import axios from 'axios'
// import { displayName } from 'react-spinkit';
// import {  eraceRecipe, logout, reciepee, selectReciepe, selectUser } from './features/RecipeSlice';
// import RecipeData from './RecipeData';


import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import {useDispatch, useSelector} from 'react-redux'


import { getrecipe, selectSTatus, selectThunkRcipe } from './features/RecipeThunkSlice';
import { auth } from './Firebase';
import Spinner from 'react-spinkit'


import './Input.css'
import ReduxInput from './ReduxInput';



function Input({mode}) {

  let dispatch=useDispatch()

  let [inp,setInp]=useState('')
  let loadng=false;
  let selectRcipe=useSelector(selectThunkRcipe)
  let selectStatus=useSelector(selectSTatus)

  console.log(selectStatus)
   if(selectStatus==='loading'){
    console.log('Loading');
    loadng=true;
   }


   // without reduxthink
    //    let [data,setData]=useState([])
    //  let dispatch=useDispatch()
    //  const API_KEY = `45b0ea5f3e6b36176d9842bf10d513fe`;
    //  const API_ID =`37c4cfeb`; 
     // console.log(selectRcipe.hits?.totalTime)
   
  
  
      let onSearch=()=>{
     dispatch(getrecipe(inp))
  
          // axios.get(`https://api.edamam.com/search?q=${inp}&app_id=${API_ID}&app_key=${API_KEY}`).then((res)=>{
          //     setData(res.data)
          //     console.log(res.data)
          // }).catch((e)=>alert(e.message))

      //  if(selectRcipe?.count===0 && selectStatus==='success'){
      //   alert('please type the corect recipe!!')
      //  }

      }
  
  
      let Onclear=()=>{
          setInp('')
      }

























    // let [list,setList]=useState([]);
    // let [req, setReq]=useState('')
    // let reciperedux=useSelector(selectReciepe)
    // let users=useSelector(selectUser)
  const [users]=useAuthState(auth)
  // console.log(users)



    // console.log(users?.photoURL)

    // const API_KEY = `45b0ea5f3e6b36176d9842bf10d513fe`;
    // const API_ID =`37c4cfeb`;
    
  // let SearchApi=()=>{
  //   axios.get(`https://api.edamam.com/search?q=${req}&app_id=${API_ID}&app_key=${API_KEY}`).then((data)=>{
  //     setList(data.data)
  //     console.log(data)
  // }).catch((e)=>console.log(e.message))
  // }
  


  //  console.log(list.hits)

  //  let handleClickSearch=()=>{
  //   SearchApi()
  

  //   if(list.hits){
  //     console.log('redux')


  //     dispatch(reciepee({
  //       data:list.hits
  //     }))
     
      
  //   }

    
    
  //  }

  //  useEffect(()=>{
  //   axios.get(`https://api.edamam.com/search?q=${req}&app_id=${API_ID}&app_key=${API_KEY}`).then((data)=>{
  //     setList(data.data)
  //     console.log(data)
  // }).catch((e)=>console.log(e.message))


  //  },[req])

  //  let onCanelclk=()=>{
  //   // alert('are you sure!')
  //   setReq('')
  //   req=null;
  // console.log(req)
  //   // dispatch(eraceRecipe())
    
  //  }

   let onSignup=()=>{
    auth.signOut()
   }







// console.log(selectRcipe?.count)
// console.log(users?.displayName[0])
  return (
    <div className= { mode ? 'App_inputWht':'App_inputBlk '}>
      Search Recipes <br/>
      <input    className='Input_input' placeholder='type one or more keywords' value={inp} onChange={e=>setInp(e.target.value)}/><button className='input_btn' onClick={onSearch}>Search</button><button className='csncel_btn' onClick={Onclear}>Cancel</button>
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
      
                    {selectRcipe? <ReduxInput/>:null}
                    { loadng ? <div className='loading_app'>
        <div  className='loading_spin'>
       
       <Spinner
       name='ball-spin-fade-loader'
       color='blue'
       fadeIn='none'
       
       />
       
        </div>
      </div>: null }
    
    </div>
  )
}

export default Input
