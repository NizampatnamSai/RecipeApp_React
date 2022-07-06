import React, { useState } from 'react'
import './Signup.css'
import { auth, provider } from './Firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useDispatch, useSelector} from 'react-redux'
import { user } from './features/RecipeSlice'




function Signup() {

  const [users,loading]=useAuthState(auth)
  let [name,setName]=useState('')
  let [email,setEmail]=useState('')
  let [password,setPassword]=useState('')
  let [photoURL,setPhotoUrl]=useState('')
  let dispatch=useDispatch()
  let [paswdview, setPaswdview]=useState(false)

  if(users){
          dispatch(
            user(
                users
            )
          )
  }




    let googleSignup=()=>{
        auth.signInWithPopup(provider).catch((error)=>{
            alert(error.message)
        })
    }

   let onSIgnup=(e)=>{
    e.preventDefault()

    auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
      userAuth.user.updateProfile({
        displayName:name,
        photoUrl:photoURL
      })

    }).catch(error=>alert(error))

   }



  return (
    <div className='signup'>
       <h3>Please Signup to use Recipe's !</h3> 
    <form className='sigup_form'>
      <input onChange={e=>setName(e.target.value)}    type='text' className='signup_input' placeholder='write your name' required/>
      <input onChange={e=>setEmail(e.target.value)} type='email' className='signup_input' placeholder='write your email' required/>
      <input onChange={e=>setPassword(e.target.value)} type='password' className='signup_input' placeholder='write your password' required/>
      <input onChange={e=>setPhotoUrl(e.target.value)}  type='text' className='signup_input' placeholder='write your photourl (optional)' />
      <button onClick={onSIgnup}>Signup</button> </form><br/>
         <small>Or</small> 
      <button onClick={googleSignup} className='sgupGoogle'>Signup with Google!</button>
    </div>
  )
}

export default Signup
