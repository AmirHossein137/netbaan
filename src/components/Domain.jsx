import React from 'react'
import Chart from './Chart';

const Domain = ({ dom , handleChange}) => {
  return (
    <label htmlFor='dom' className='cursor-pointer'>
    <div className='bg-box p-5 flex flex-col text-white rounded-xl '>
      <div className='flex justify-between mb-5'>
        <div className='flex flex-col bg-domain-box rounded-xl'>
          <div className='mb-1 px-2 pt-1'>
            <img src='./world.png' className='w-12' />
          </div>
          <div className='bg-white text-slate-950 text-center font-bold text-sm rounded-bl-lg rounded-br-lg py-0.5'>
            {dom?.total}
          </div>
        </div>
        <div className='flex'>
          <img src='./arrow.png' className='w-6 h-6 rotate-180' />
        </div>
      </div>
      <p className='font-semibold border-b border-white pb-3 mb-5'>Domains</p>
      <div className='flex items-center justify-between border-b mb-5 border-white pb-5'>
        <div className='flex items-center gap-3'>
          <div className='flex flex-col items-center gap-1'>
            <span className='font-bold'>Live</span>
            <span className='font-bold text-2xl'>{dom?.total_live}</span>
          </div>
          <div>
            <Chart chartInfo={dom?.live}/>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <div className='flex flex-col items-center gap-1'>
            <span className='font-bold'>Monitored</span>
            <span className='font-bold text-2xl'>{dom?.total_monitored}</span>
          </div>
          <div>
          <Chart chartInfo={dom?.monitored}/>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='w-12 h-12 bg-box-little rounded-xl flex items-center justify-center'>
            <img src='./ips.png' className='w-[60%]' />
          </div>
          <div className='flex flex-col'>
            <span className='font-bold'>IPs</span>
            <span className='font-bold text-lg'>{dom?.ips}</span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-12 h-12 bg-box-little rounded-xl flex items-center justify-center'>
            <img src='./ports.png' className='w-[60%]' />
          </div>
          <div className='flex flex-col'>
            <span className='font-bold'>Ports</span>
            <span className='font-bold text-lg'>{dom?.ports}</span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-12 h-12 bg-box-little rounded-xl flex items-center justify-center'>
            <img src='./vulns.png' className='w-[60%]' />
          </div>
          <div className='flex flex-col'> 
            <span className='font-bold'>Vulns</span>
            <span className='font-bold text-lg'>{dom?.vulns}</span>
          </div>
        </div>
      </div>
    </div>
    <input name='netbaan' type='radio' value='domain' onChange={handleChange} id='dom' className='hidden'/>
    </label>
  )
}

export default Domain