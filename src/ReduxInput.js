import React from 'react'
import { useSelector } from 'react-redux'
import { selectReciepe } from './features/RecipeSlice'
import './ReduxInput.css'
import './RecipeData.css'
import RecipeData from './RecipeData'


function ReduxInput() {
    let reciperedux=useSelector(selectReciepe)

    console.log(reciperedux)
    console.log(reciperedux.data)
    
    
    
    return ( <>
      

  {reciperedux && reciperedux.data.map((data)=>{return(
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


    
   
    