import React from 'react'
import './RecipeData.css'

function RecipeData({mode,label,calories,healthLabels,digest,num,image}) {


let len1=0;
let len2=0;


  return (
    <div className= { mode?  'Input_recipedataWht':'Input_recipedataBlk' } key={Math.random()}>
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



        <div className='digest1'>  {digest.map((data)=>{ return( <div key={Math.random()}> 

{ len1<4 &&  ++len1 &&   <ul className='digest_ui' key={Math.floor(data.total)}  >
     <li key={Math.random()}>{data.tag}</li>
    <li key={Math.random()}> <b>{Math.floor(data.total)} g</b> </li>
</ul>  } </div>
)

})}
</div>
  
  
  <div className='digest2'>  {digest.map((data)=>{ return( <div key={Math.random()}> 

{ len2<5 &&  ++len2 &&   <ul className='digest_ui'  key={(data.total)}>
    <li key={Math.random()}>{data.label}</li>
    <li key={Math.random()}> <b>{Math.floor(data.total)} mg</b> </li>
</ul>  } </div>
)

})}
</div>

       </div>
      </div>
    </div>
  )
}

export default RecipeData
