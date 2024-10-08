
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';


export default function SignUp() {
  const [formData,setFormData] = useState({});
  const [error, setError] = useState(null);
  const[loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData(
      {
        ...formData,[e.target.id]: e.target.value,
      }
    );
  
  };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      setLoading(true);
    const res = await fetch('/api/auth/signup',
      {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await res.json();
    console.log(data);
    if (data.success ===false) {
      setError(data.message);
      setLoading(false);
      return;
    }
    setLoading(false);
    setError(null);
    navigate('/signin');
      
    } catch (error) {
      setLoading(false);
      setError(error.message);
      
    }
    
    
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-bold my-7'>SignUp</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='username'className='border p-3 rounded-lg' id='username' onChange={handleChange}/>
        <input type='email' placeholder='email'className='border p-3 rounded-lg' id='email'  onChange={handleChange}/>
        <input type='password' placeholder='password'className='border p-3 rounded-lg' id='password'  onChange={handleChange}/>
      <button disabled={loading} className='bg-red-600 text-black p-3 
      rounded-lg uppercase hover:opacity-85 disabled:opacity-65'>{loading ? 'loading...' : 'sign up'}</button>
      <OAuth/>
      </form>
      <div className='flex gap-3 mt-7'>
        <p>Have an account?</p>
        <Link to={"/signin"}>
        <span className='text-yellow-400'> sign in</span>
        </Link>
       
      </div>
      {error && <p className='text-red-950 mt-5'>{error}</p>}
      </div>
  )
}
