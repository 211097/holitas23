import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import '../styleSheets/login.css';
import { useState } from 'react';

import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai' ;
import { icons } from 'react-icons';


function Login() {


  const [state, setstate] = useState(false);
  
  const toggleBtn = () =>{

    setstate(prevState => !prevState);
  }

  const { register, handleSubmit, formState: { errors } } = useForm()
  const [valid, setEmail] = useState('');
  let navigate = useNavigate()

  const onSubmit = data => {
    console.log('EMAIL: ' + data.email)
    console.log("hola")
    console.log('PASSWORD: ' + data.password)
    navigate('/register', { replace: true })
  }
  
  const onNavigateRegister = () => {
    navigate('/register', { replace: true })
    console.log(" entre  onNavigateRegister")
  }//aqui

  const onNavigateRecover = () => {
    navigate('/recover', { replace: true })
    console.log("entre onNavigateRecover")
  }

  return (
    <div className='   iniciosecion'>
      <div className='container py-5 px-5'>
        <div className='text-center'>
          <h1>Log in</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className='col-md container'>
            
            <input
              type="text"
              name="email"
              placeholder='Enter your email'
              className=' btn-inicioSecion'
              {...register("email", { required: true })}
            />
            {errors.email && <span className='text-white text-bg-danger'>Email required</span>}
          </div>
          <div className='col-md container imput-elemet-wrapper'>
            
            <input
              type={state ? "text" : "password"}
              name="password"
              placeholder='enter your password'
              className=' btn-inicioSecion'
              {...register("password", { required: true })}
            />
            <button className='btn-passwordd' onClick={toggleBtn}>
              { state ? <AiOutlineEye/>:
                <AiOutlineEyeInvisible/>
              }
            </button>
            {errors.password && <span className='text-white text-bg-danger'>Password is required</span>}
          </div>
          <div className=' gap-2 col-11 mx-auto pt-2'>
            <input type="submit" className='btn-entrarASesion' value="Enter my session" />
          </div>
        </form>
        <div className='container pt-4 text-center'>
          <div>
            <p >Did you forget your password?
              <span className='p-span-pregunta' onClick={onNavigateRecover}>  Recover password</span>
            </p>
          </div>
          <div className='pt-2'>
            <p>Do you already have an account?
              <span className='p-span-pregunta' onClick={onNavigateRegister}> Register here</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login