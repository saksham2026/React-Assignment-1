import React from 'react'

export default function Signin() {
  return (
    <div className='Signin' >
      <input type="text" placeholder='Phone number,username, or email'/><br />
      <input type="password" placeholder='Password'/><br />
      <span>Don't have account?</span><span>Signup</span>
    </div>
  )
}
