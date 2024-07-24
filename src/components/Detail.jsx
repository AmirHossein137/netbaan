import React from 'react'

const Detail = ({ filterItems }) => {
  return (
    <div className='bg-slate-800 p-3 rounded-xl'>
      <span className='text-white'>Assets</span>
      <div className='mt-10'>
        <table className="table-auto w-full">
          <thead className='bg-slate-500 h-11 rounded-lg'>
            <tr className='py-3'>
              <th className='w-[10%]'>Grade</th>
              <th className='w-[25%] text-left'>Name</th>
              <th>Total Vulnerabilities</th>
              <th>Last Seen</th>
            </tr>
          </thead>
          <tbody>
            {filterItems?.map((item, index) => (
              <tr className='bg-slate-700 h-11' key={index}>
                <td className='w-[10%]'>
                  <div style={{ aspectRatio: '1/cos(30deg)', clipPath: 'polygon(50% -50%,100% 50%,50% 150%,0 50%)' }} className='h-9 text-lg font-bold bg-red-800 flex items-center justify-center transition duration-300 hover:bg-red-900'>
                    {item.grade}
                  </div>
                </td>
                <td className='w-[25%] text-white'>{item.name}</td>
                <td className='text-center text-white'>{item.total_vuls}</td>
                <td className='text-center text-white'>{item.lastSeen}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Detail;