import React from 'react'

const FailedTask = ({data}) => {
  return (
   <div className='bg-yellow-500 shrink-0 rounded-2xl p-3 h-110 w-75'>
        
        <div className='flex flex-row justify-between'>
          <h4 className='bg-red-700 px-2'>{data.category}</h4>
          <h4 className='font-semibold'>{data.date}</h4>
        </div>

        <h3 className='text-2xl mt-4 mb-5 font-extrabold'>{data.title}</h3>
        <h4>{data.description}</h4>
        
        <div className='mt-8'>
            <button className='w-full bg-red-500 rounded py-1'>Failed</button>
        </div>

      </div>
  )
}

export default FailedTask
