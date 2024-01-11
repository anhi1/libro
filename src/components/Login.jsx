// src/components/Login.jsx
// use client
import { LuUserCircle } from "react-icons/lu";
import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {
  const [recaptchaValue, setRecaptchaValue] = require("react").useState('');

  const onChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w 100-vh'>
      <div className='40-w p-5 rounded bg-white'>
        <form>
          <div className='text-center'>
            <LuUserCircle size={40} /><h3>Login</h3>
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='correo@gmail.com' className='form-control'></input>
          </div>
          <div className='mb-2'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='contraseña' className='form-control'></input>
          </div>
          <div className="recaptcha">
            <ReCAPTCHA
              sitekey="6Le2ek0pAAAAANyz3q6PXAhnKSksJGmvjeOMNvkC"
              onChange={onChange}
            />
          </div>
          <div className='mb-2'>
            <input type='checkbox' className='custom-control custom-checkbox' id='check'></input>
            <label htmlFor="check" className='custom-input-label ms-2'>Recuérdame</label>
          </div>
          <div className='d-grid'>
            <button className='btn btn-primary' style={{ background: 'var(--color-tercero)' }}>Enviar</button>
          </div>
          <p className='text-right'>
            Forgot <a href='#'>Password</a> <a href='#'>Registrarse</a>
          </p>
        </form>
      </div>
    </div>
  );
}
