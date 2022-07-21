import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import '../styleSheets/recover.css'

function Recover() {

  const [isLoading, setIsLoading] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [email, setEmail] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm()
  let navigate = useNavigate();

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");


  var raw = JSON.stringify({
    "to": email,
    "subject": "Subject",
    "text": "Recuperacion",
    "html": "<ul><li><a href=http://localhost:3000/password/${token}> Recuperar</a></li></ul>",
  });
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  const peticion = () => {
  fetch("http://localhost:3000/api/email/send", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }




  const onSubmit = data => {
    console.log(data);
    console.log(isLoading);
    setIsLoading(true);
    console.log(isLoading);
  }

  useEffect(() => {
    setIsLoading(false);
    setIsChanged(false);
  }, [])

  const onChangeDiv = () => {
    console.log(isChanged);
    setIsChanged(true);
  }

  const onNavigateRegister = () => {
    navigate('/register', { replace: true })
  }

  const onNavigateLogin = () => {
    navigate('/login', { replace: true })
  }

  return (
    <div className='mx-1   align-items-center recuperarcontrasena' >
      <div className='container py-5 px-5'>
        <h1 className='text-center'>Recover password</h1>
        {
          !isChanged ?
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                
                <input
                  type="text"
                  className='input-text-enterYourEmail mb-2'
                  placeholder='Enter your email'

                />
              </div>
              <div className='d-grid gap-2 mx-auto pt-4'>
                <input type="button" className='btn-recover-continue' value="Continue" onClick={onChangeDiv} />
              </div>
            </form> :
            <div className='row justify-content-center'>
              <div className='bg-light bg-opacity-50 rounded-4 px-2 py-2 text-center reduce'>
                <span>Check your inbox and follow the prompts. 
                  If you did not receive an email and it is not in your spam folder, this could mean that you registered with a different address.
                </span>
              </div>
            </div>
        }
        <div className='pt-4 text-center'>
          <div>
            <p className='fs-6'>
              <span className='p-span-login-or-register fw-bold pointer' onClick={onNavigateLogin}>Log in </span>
              or
              <span className='p-span-login-or-register fw-bold pointer' onClick={onNavigateRegister}> Register here</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recover