import React from 'react'
import {useState} from 'react'
import Signin from './Singnin';
import Signup from './Signup';
export default function Login() {
  const [signIN , setSignIN] = useState(true);
  function handleClick(){
    setSignIN(!signIN)
  }
  return (
    <div className="main">
      <h1>Instagram</h1>
      {signIN && (
        <>
      <Signin/>
      <button onClick={handleClick}>Sign Up</button>
        </>)
      }
      {!signIN && (
        <>
      <Signup/>
      <button onClick={handleClick}>Sign In</button>
        </>)
      }
    </div>
  )
}
