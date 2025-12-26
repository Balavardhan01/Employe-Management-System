import React, { useState } from 'react'

const Login = ({handleLogin}) => {

     

     const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')  

   const Submit=(e)=>{
    e.preventDefault();
    handleLogin(email,password)
    setEmail("")
    setPassword("")


   }

  return (
    <div className='border-2 border-blue-300 p-20 flex justify-center h-max w-max m-auto mt-50 rounded-2xl hover:border-cyan-700'>
      <div className=''>
        <form  onSubmit={(e)=>{
                Submit(e)
            }} className=' flex flex-col justify-center
        items-center-safe gap-10'>

            <input 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required type="email" placeholder='Enter your email'
            className='rounded-3xl border-blue-200 border-2 flex p-3 outline-none hover:border-blue-400'/>

            <input 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required  type="password"  placeholder='Enter password'
            className='rounded-3xl border-blue-200 border-2 flex p-3 outline-none hover:border-blue-400'/>

            <button  type='submit ' className='rounded bg-blue-500 px-5 py-2  hover:bg-blue-400 cursor-pointer'>Login</button>

        </form>
      </div>
    </div>
  )
}

export default Login
