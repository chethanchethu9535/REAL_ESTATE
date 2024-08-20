
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-bold my-7'>SignUp</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='username'className='border p-3 rounded-lg' id='username'/>
        <input type='email' placeholder='email'className='border p-3 rounded-lg' id='email'/>
        <input type='password' placeholder='password'className='border p-3 rounded-lg' id='password'/>
      <button className='bg-red-600 text-black p-3 
      rounded-lg uppercase hover:opacity-85 disabled:opacity-65'>sign up</button>
      </form>
      <div className='flex gap-3 mt-7'>
        <p>Have an account?</p>
        <Link to={"/signin"}>
        <span className='text-orange-700'> sign in</span>
        </Link>
       
      </div>
      </div>
  )
}
