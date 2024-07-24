import React from 'react'
import BoxLogo from '../../public/world.png'
import Arrow from '../../public/arrow.png';
import Line from '../../public/line.png';
import Ips from '../../public/ips.png'
import Ports from '../../public/ports.png';


const Cloud = ({cloudInfo , handleChange}) => {
  return (
    <label htmlFor='cloud' className='cursor-pointer'>
    <div className='bg-box p-5 flex flex-col text-white rounded-xl '>
      <div className='flex justify-between mb-5'>
        <div className='flex flex-col bg-cloud-box rounded-xl'>
          <div className='mb-1 px-2 pt-1'>
            <img src={BoxLogo} className='w-12' />
          </div>
          <div className='bg-white text-slate-950 text-center font-bold text-sm rounded-bl-lg rounded-br-lg py-0.5'>
            {cloudInfo?.total}
          </div>
        </div>
        <div className='flex'>
          <img src={Arrow} className='w-6 h-6 rotate-180' />
        </div>
      </div>
      <p className='font-semibold border-b border-white pb-3 mb-5'>Cloud Accounts</p>
      <div className='flex items-center justify-between border-b mb-5 border-white pb-5'>
        <div className='flex items-center gap-3'>
          <div className='flex flex-col items-center gap-1'>
            <span className='font-bold'>Live</span>
            <span className='font-bold text-2xl'>{cloudInfo?.total_live}</span>
          </div>
          <div>
            <img src={Line} className='w-20 object-contain' />
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <div className='flex flex-col items-center gap-1'>
            <span className='font-bold'>Monitored</span>
            <span className='font-bold text-2xl'>{cloudInfo?.total_monitored}</span>
          </div>
          <div>
            <img src={Line} className='w-20 object-contain' />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='w-12 h-12 bg-box-little rounded-xl flex items-center justify-center'>
            <img src={Ips} className='w-[60%]' />
          </div>
          <div className='flex flex-col'>
            <span className='font-bold'>IPs</span>
            <span className='font-bold text-lg'>{cloudInfo?.ips}</span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-12 h-12 bg-box-little rounded-xl flex items-center justify-center'>
            <img src={Ports} className='w-[60%]' />
          </div>
          <div className='flex flex-col'>
            <span className='font-bold'>Ports</span>
            <span className='font-bold text-lg'>{cloudInfo?.ports}</span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-12 h-12 bg-box-little rounded-xl flex items-center justify-center'>
            <img src={Ports} className='w-[60%]' />
          </div>
          <div className='flex flex-col'> 
            <span className='font-bold'>Vulns</span>
            <span className='font-bold text-lg'>{cloudInfo?.vulns}</span>
          </div>
        </div>
      </div>
    </div>
    <input name='netbaan' type='radio' className='hidden' value='cloud' id='cloud' onChange={handleChange}/>
    </label>
  )
}

export default Cloud