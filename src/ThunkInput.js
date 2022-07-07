// import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getrecipe, selectThunkRcipe } from './features/RecipeThunkSlice'
import './ThunkInput.css'



function ThunkInput() {
   let [inp,setInp]=useState('')
//    let [data,setData]=useState([])
   let dispatch=useDispatch()
    let selectRcipe=useSelector(selectThunkRcipe)
//    const API_KEY = `45b0ea5f3e6b36176d9842bf10d513fe`;
//    const API_ID =`37c4cfeb`;
  console.log(selectRcipe.hits?.totalTime)


    let onSearch=()=>{
   dispatch(getrecipe(inp))

        // axios.get(`https://api.edamam.com/search?q=${inp}&app_id=${API_ID}&app_key=${API_KEY}`).then((res)=>{
        //     setData(res.data)
        //     console.log(res.data)
        // }).catch((e)=>alert(e.message))
    }

    // console.log(data.hits)

    let Onclear=()=>{
        setInp('')
    }


  return (
    <div className='thunk_inp'>
      {/* ThunkInput */}

     
      <input value={inp} onChange={e=>setInp(e.target.value)} placeholder='type here...'/> <button onClick={onSearch}>Search</button> <button onClick={Onclear}>Clear</button>
    
    {selectRcipe?.hits ? selectRcipe?.hits.map((res)=>{ return(
        <div key={Math.random()} className='recipe_labels'>
            
         <h5>{res.recipe.label}</h5>
        </div>

    )

    }):null}
    
    
    
    
    </div>
  )
}

export default ThunkInput
