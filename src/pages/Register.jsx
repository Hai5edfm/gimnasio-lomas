import React, { useEffect } from 'react'
import Auth from "../layouts/Auth";
import register_image from '../assets/images/register-image.png'
import { useForm } from 'react-hook-form';
import show_pass_icon from "../assets/eye.svg";
import info_icon from "../assets/info.svg";
import { handleValidation } from "../helpers/validations";

const Register = () => {
  const methods = useForm();
  const [showPass, setShowPass] = React.useState(false);
  const [canLogin, setCanLogin] = React.useState(false);
  const { 
    handleSubmit, 
    register, 
    formState: { errors } 
  } = methods;
  const onSubmit = handleSubmit(({ name, lastName, email, birthday, password }) => {
    const userData = {
      name,
      lastName,
      email,
      birthday,
      password
    }

    const URL = "https://c7-g11-production.up.railway.app/api/users"
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }

    fetch(URL, options)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
  })
  
  const handleCanLogin = () => {
    const name = () => document.getElementById('name').value;
    const lastName = () => document.getElementById('lastname').value;
    const email = () => document.getElementById('email').value;
    const birthday = () => document.getElementById('birthday').value;
    const password = () => document.getElementById('password').value;
    console.log(name(), email(), birthday(), password())
    
    if(name() !== '' && email() !== '' && birthday() !== '' && password() !== '' && lastName() !== '') {
      setCanLogin(true);
    }
  }

  return (
    <Auth>
      <div className='flex h-full items-center justify-center'>
        <span className='hidden w-3/6 lg:flex items-center justify-center'>
          <img src={register_image} />
        </span>
        <div className='lg:w-3/6 flex flex-col items-center justify-center'>
          <h2 className='text-center font-bold text-4xl mb-14'>¡Es hora de entrenar!</h2>
          <div className='max-w-xl lg:w-3/6 border border-4 border-[#2A2550] rounded-lg pb-3 px-7 pt-9 rounded-2xl'>
            <form onSubmit={onSubmit} className="flex flex-col" >
              <input 
                type="name" 
                id="name"
                placeholder="Nombre*" 
                className={`${errors.name ? '' : 'mb-5' } border-b-2 border-b-gray/80 focus:ring-0 focus:outline-none focus:border-[#2A2550] placeholder:text-[#2A2550]/70 font-medium`}
                {...register('name', handleValidation('name'))}
                onChange={handleCanLogin}
                defaultValue=''
              />
              {errors.name ? (
                <p className="mb-5 text-[#D04801] w-80">{errors.name.message}</p>
              ) : null}
              <input 
                type="lastName" 
                id="lastName"
                placeholder="Apellido*" 
                className={`${errors.name ? '' : 'mb-5' } border-b-2 border-b-gray/80 focus:ring-0 focus:outline-none focus:border-[#2A2550] placeholder:text-[#2A2550]/70 font-medium`}
                {...register('lastName', handleValidation('lastName'))}
                onChange={handleCanLogin}
                defaultValue=''
              />
              {errors.name ? (
                <p className="mb-5 text-[#D04801] w-80">{errors.name.message}</p>
              ) : null}
              <input 
                type="email" 
                id="email" 
                placeholder="Email*" 
                className={`${errors.email ? '' : 'mb-5'} border-b-2 border-b-gray/80 focus:ring-0 focus:outline-none focus:border-[#2A2550] placeholder:text-[#2A2550]/70 font-medium`}
                {...register('email', handleValidation('email'))}
                onChange={handleCanLogin}
                defaultValue=''
              />
              {errors.email ? (
                <p className="mb-5 text-[#D04801] w-80">{errors.email.message}</p>
              ) : null}
              <input 
                type="text" 
                id="birthday"
                placeholder="Fecha de nacimiento*" 
                className={`${errors.birthday ? '' : 'mb-5'} border-b-2 border-b-gray/80 focus:ring-0 focus:outline-none focus:border-[#2A2550] placeholder:text-[#2A2550]/70 font-medium`}
                {...register('birthday', handleValidation('birthday'))}
                onChange={handleCanLogin}
                defaultValue=''
              />
              {errors.birthday ? (
                <p className="mb-5 text-[#D04801] w-80">{errors.birthday.message}</p>
              ) : null}
              <div className='relative mb-2'>
                <input 
                  type={showPass ? "text" : "password"} 
                  id="password"
                  placeholder="Contraseña" 
                  className={`${errors.password ? '' : 'mb-5'} w-full border-b-2 border-b-gray/80 focus:ring-0 focus:outline-none focus:border-[#2A2550] placeholder:text-[#2A2550]/70 font-medium`}
                  {...register('password', handleValidation('password'))}
                  onChange={handleCanLogin}
                  defaultValue=''
                />
                {errors.password ? (
                  <p className="text-[#D04801] w-80">{errors.password.message}</p>
                ) : null}
                <button 
                  type='button' 
                  className='absolute right-2 top-0.5' 
                  onClick={() => setShowPass(!showPass)}
                >
                  <img src={show_pass_icon}/>
                </button>
              </div>
              <div className='grid grid-cols-2'>
                <span className={`flex gap-1 mb-1`}>
                  <img src={info_icon}/>
                  <p className={errors?.password?.type === "required" || errors?.password?.type === "minLength" ? 'text-[#D04801]' : ''}>Más de 8 caracteres</p>
                </span>
                <span className={`flex gap-1 mb-1`}>
                  <img src={info_icon}/>
                  <p className={errors?.password?.type === "required" || errors?.password?.type === "pattern" ? 'text-[#D04801]' : ''}>Una mayúscula</p>
                </span>
                <span className={`flex gap-1 mb-1`}>
                  <img src={info_icon}/>
                  <p className={errors?.password?.type === "required" || errors?.password?.type === "pattern" ? 'text-[#D04801]' : ''}>Cáracteres alfanuméricos</p>
                </span>
                <span className={`flex gap-1 mb-1`}>
                  <img src={info_icon}/>
                  <p className={errors?.password?.type === "required" || errors?.password?.type === "pattern" ? 'text-[#D04801]' : ''}>Al menos un número</p>
                </span>
              </div>
              <button disabled={!canLogin} className={`m-auto mb-2 w-56 mt-28 py-3 px-14 text-white font-bold rounded-lg ${canLogin ? 'bg-[#D04801]' : 'bg-[#D04801]/50'}`}>Iniciar sesión</button>
              <div>
                <p className='text-center'>¿Ya tienes una cuenta? <a href="/auth/login" className='text-[#D04801] font-bold'>Ingresa aquí</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Auth>
  )
}

export default Register;
