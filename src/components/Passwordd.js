import React from 'react'
import '../styleSheets/password.css';
import useState from 'react'
import { useNavigate } from 'react-router-dom';

function Passwordd() {
  const [email, setEmail] = useState('')
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: email,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };


  return (
    <div className='  div-password-conten'>
      <div className='px-5 py-5'>
        <h1>Recuperar contraseñaaaaaaaaaa</h1>
        <form>
          <div>

            <input
              type="password"
              placeholder='Introduzca nueva contraseña'
              className='form-control mb-2'
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className='d-grid gap-2 mx-auto pt-4'>
            <input type="button" className='btn btn-primary' value="Guardar" />
          </div>
        </form>
      </div>
    </div>
  )
}
export default Passwordd