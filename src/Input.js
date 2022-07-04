import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {  reciepee, selectReciepe } from './features/counterSlice';

import './Input.css'
import RecipeData from './RecipeData';
import ReduxInput from './ReduxInput';

function Input() {
    let [list,setList]=useState([]);
    let [req, setReq]=useState('')
    let dispatch=useDispatch()
    let reciperedux=useSelector(selectReciepe)

    const API_KEY = `45b0ea5f3e6b36176d9842bf10d513fe`;
    const API_ID =`37c4cfeb`;
    
  let SearchApi=()=>{
    axios.get(`https://api.edamam.com/search?q=${req}&app_id=${API_ID}&app_key=${API_KEY}`).then((data)=>{
      setList(data.data)
   


      

      console.log(data)
  }).catch((e)=>console.log(e.message))
  }
   useEffect(()=>{
    SearchApi()

   },[]);


   console.log(list.hits)

   let handleClickSearch=()=>{
    SearchApi()
    // if(list.hits.length===0){
    //   console.log('yes')
    //   alert('please search a valid reciepe')
    // }

    if(list.hits){
      console.log('redux')

      // list.hits.map((data)=>{ return(
      //   dispatch(reciepee({
      //     label:data.recipe.label,
      //     calories:data.recipe.calories,
      //     healthLabels:data.recipe.healthLabels,
      //     digest: data.recipe.digest,
      //     image:data.recipe.image,
      //     num:data.recipe.yield

      // })
      //    ))
      // })

      dispatch(reciepee({
        data:list.hits
      }))
      
    }

    else {
      alert('please search a valid reciepe')
    }
    
   }

console.log(reciperedux)
  return (
    <div className='App_input'>
      Search Recipes <br/>
      <input className='Input_input' placeholder='type one or more keywords' onChange={e=>setReq(e.target.value)}/><button className='input_btn' onClick={handleClickSearch}>Search</button>

    {list.hits && list?.hits.map((data)=>{return(
        <div>

         {/* CHecking purpose  */}
             {/* {data.recipe.calories} 
            {data.recipe.label}
            {data.recipe.healthLabels} 

            <img src={data.recipe.image} alt='dif'/>*/}
             
            <RecipeData  label=  {data.recipe.label} calories={data.recipe.calories} 
            healthLabels={data.recipe.healthLabels}  digest={data.recipe.digest} image={data.recipe.image}
            num={data.recipe.yield}
            />
            

        </div>
    )
    })
      }
      
  {/* {reciperedux? <ReduxInput/>: null} */}
    
    </div>
  )
}

export default Input
