import React from 'react'
import Domain from './Domain';
import Ip from './Ip';
import Cloud from './Cloud';


const Cards = ({dom , ipInfo , cloudInfo , handleChange}) => {

    return (
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-4'>
                <Domain dom={dom} handleChange={handleChange}/>
            </div>
            <div className='col-span-4'>
                <Ip ipInfo={ipInfo} handleChange={handleChange}/>
            </div>
            <div className='col-span-4'>
                <Cloud cloudInfo={cloudInfo} handleChange={handleChange}/>
            </div>
        </div>
    )
}

export default Cards