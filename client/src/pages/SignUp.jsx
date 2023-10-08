import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg m-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form action="" className='flex flex-col gap-4 '>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' />
        <input type="text" placeholder='email' className='border p-3 rounded-lg' id='username' />
        <input type="text" placeholder='password' className='border p-3 rounded-lg' id='username' />
        <button className='bg-slate-700 border p-3 rounded-md hover:opacity-90 text-white uppercase'> Sign up </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
