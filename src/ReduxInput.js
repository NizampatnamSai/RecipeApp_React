import React from 'react'
import { useSelector } from 'react-redux'
// import { selectReciepe } from './features/RecipeSlice'
import './ReduxInput.css'
import './RecipeData.css'
import RecipeData from './RecipeData'
import { selectThunkRcipe } from './features/RecipeThunkSlice'


function ReduxInput() {
    // let reciperedux=useSelector(selectReciepe)
    let selectRcipe=useSelector(selectThunkRcipe)
    
    // console.log(reciperedux)
    // console.log(reciperedux.data)
    
    
    
    return ( <>
      

  {selectRcipe && selectRcipe?.hits?.map((data)=>{return(
        <div className='inpt_Recipe' key={data.recipe.calories}> 

        
             
             <RecipeData   label=  {data.recipe.label} calories={data.recipe.calories} 
            healthLabels={data.recipe.healthLabels}  digest={data.recipe.digest} image={data.recipe.image}
            num={data.recipe.yield}
            />
             

        </div>
    )
    })
      } 


  
      
</>   
    
    )
}

export default ReduxInput


    
   
    