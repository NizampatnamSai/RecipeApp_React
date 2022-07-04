import React from 'react'
import { useSelector } from 'react-redux'
import { selectReciepe } from './features/counterSlice'
import './ReduxInput.css'
import './RecipeData.css'


function ReduxInput() {
    let reciperedux=useSelector(selectReciepe)
    let label,calories,healthLabels,digest,num,image;

    reciperedux.map((data)=>{return( <>
    

     {/* CHecking purpose  */}
         
         
           label=  {data.recipe.label} calories={data.recipe.calories} 
        healthLabels={data.recipe.healthLabels}  digest={data.recipe.digest} image={data.recipe.image}
        num={data.recipe.yield} 
        </> )})








    let len=0;
    
    
    return (
      <div className='Input_recipedata'>
        <div className='recipedata'>
          <div className='recipedata_top'>
         <img className='recipedata_img' src={image} alt='recipe img'/>
       <div>
        <p> <b> {label}</b> </p>
         {healthLabels} </div>
         </div>
         <div className='recipedata_bottom'>
          <div className='calories'><b>{num}</b> servings  <br/>
          <b> {Math.floor(calories)}</b> Kcal</div>
  
        <div className='digest'>  {digest?.map((data)=>{ return( <> 
  
              { len<5 &&  ++len &&   <ul className='digest_ui'>
                  <li>{data.label}</li>
                  <li> <b>{Math.floor(data.total)} g</b> </li>
              </ul>  } </>
          )
  
          })}
          </div>
  
         </div>
        </div>
      </div>
    )
}

export default ReduxInput

// function RecipeData({label,calories,healthLabels,digest,num,image}) {
    //     let [list,setList]=useState([])
    
    
    //    useEffect(()=>{
    
    //    },[])
    
   
    