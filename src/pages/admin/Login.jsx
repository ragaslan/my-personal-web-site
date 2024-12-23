import React from 'react'

function Login() {
  return (
    <div className='flex w-screen h-screen items-center justify-center'>
        <form className='border-2 border-blue-500 min-h-[300px] p-8 flex flex-col gap-4 justify-center rounded' >
            <div className='flex flex-col w-[300px] gap-2'>
                <label htmlFor="username">Username</label>
                <input className='border-2 border-blue-500 rounded h-10 p-2' type="text" placeholder='username' name='username' id='username' />
            </div>
            <div className='flex flex-col w-[300px] gap-2'>
                <label htmlFor="password">Password</label>
                <input className='border-2 border-blue-500 rounded h-10 p-2' type="password" placeholder='password' name='password' id='password' />
            </div>
            <button className='bg-blue-500 py-2 rounded text-white hover:scale-105 transition-all'>Login</button>
        </form>
    </div>
  )
}

export default Login