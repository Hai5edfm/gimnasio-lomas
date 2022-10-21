import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Auth from '../../layouts/Auth';
import debit_card from "../../assets/images/debit-card.svg"
import { useForm } from 'react-hook-form';
  
const Payment = () => {
  const methods = useForm();
  const [params, setParams] = useSearchParams();
  const [planes, setPlanes] = useState([]);
  const membership = planes[params.get('membership')] || 0;
  const [paymentStep, setPaymentStep] = useState('payment');

  const { 
    handleSubmit, 
    register, 
    formState: { errors } 
  } = methods;
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  })

  useEffect(() => {
    fetch('https://c7-g11-production.up.railway.app/api/plan')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
  }, [])
  const handlePayment = setTimeout(() => {
    
  }, 3000)

  if(paymentStep == 'payment') {
    return (
    <Auth>
      <div className='flex justify-center items-center gap-60 h-full membership-container'>
        <div>
          <h2 className='mb-10 font-bold text-4xl'>Activá tu membresía </h2>
          <p className='mb-2'>Membresía Elegida</p>
          <div className='border-2 boder-[#2A2550] rounded-lg min-w-[300px] font-medium'>
            <span className='flex bg-[#2A2550] text-white justify-center font-semibold mt-8'>PREMIUM</span>
            <div className='pl-4 pb-4 mt-8'>
              <p>Incluye: </p>
              <ul>
                <li>Pases libres</li>
                <li>4 consultas al nutricionista al mes</li>
                <li>4 sesiones de fisioterapia al mes</li>
              </ul>
              <div className='text-center mt-4'>
                <p className='text-4xl'>$30.000</p>
                <p>ANUAL</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div>
            <p className='font-medium text-2xl'>Completá los datos de tu tarjeta</p>
            <img src={debit_card} />
          </div>
          <form onSubmit={onSubmit} className="flex flex-col">
            <input 
              type="text" 
              id="nCard"
              placeholder="Número de tarjeta" 
              className={`${errors.name ? '' : 'mb-5' } bg-transparent border-b-2 border-b-gray/80 focus:ring-0 focus:outline-none focus:border-[#2A2550] placeholder:text-[#2A2550]/70 font-medium`}
              {...register('nCard')}
            />
            <input 
              type="text" 
              id="cardName"
              placeholder="Titular de la tarjeta" 
              className={`${errors.name ? '' : 'mb-5' } bg-transparent border-b-2 border-b-gray focus:ring-0 focus:outline-none focus:border-[#2A2550] placeholder:text-[#2A2550]/70 font-medium`}
              {...register('cardName')}
            />
            <input 
              type="text" 
              id="cardDate"
              placeholder="Vencimiento" 
              className={`${errors.name ? '' : 'mb-5' } bg-transparent border-b-2 border-b-gray focus:ring-0 focus:outline-none focus:border-[#2A2550] placeholder:text-[#2A2550]/70 font-medium`}
              {...register('cardDate')}
            />
            <input 
              type="number" 
              id="CVV"
              placeholder="Código de seguridad" 
              className={`${errors.name ? '' : 'mb-5' } bg-transparent border-b-2 border-b-gray focus:ring-0 focus:outline-none focus:border-[#2A2550] placeholder:text-[#2A2550]/70 font-medium`}
              {...register('CVV')}
            />
          </form>
          <div className='flex gap-20 mt-10'>
            <a href="/" className='py-3 px-20 bg-white rounded-lg text-[#D04801] border border-[#D04801]'> Volver atrás </a>
            <button className='py-3 px-20 bg-[#E04D01]/50 rounded-lg text-white' onClick={() => setPaymentStep('processing')}> Finalizá pago </button>
          </div>
        </div>
      </div>
    </Auth>
    );
  } else if (paymentStep == 'processing') {
    return (
    <Auth>
      <div className='flex justify-center items-center gap-60 h-full membership-container'>
        <p>Estamos procesando tu pago, esto puede demorar unos minutos...</p>
      </div>
    </Auth>
    )
  }
}

export default Payment;