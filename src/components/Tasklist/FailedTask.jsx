import React from 'react'

const FailedTask = () => {
  return (
   <div className='bg-yellow-500 shrink-0 rounded-2xl p-3 h-110 w-75'>
        
        <div className='flex flex-row justify-between'>
          <h4 className='bg-red-700 px-2'>High</h4>
          <h4 className='font-semibold'>19 December 2025</h4>
        </div>

        <h3 className='text-2xl mt-4 mb-5 font-extrabold'>Submit the assignment</h3>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, accusantium amet. Quas vel provident Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident obcaecati molestiae consectetur quod expedita esse dicta eius, commodi quas temporibus ill</h4>
        
        <div className='mt-2'>
            <button className='w-full'>Failed</button>
        </div>

      </div>
  )
}

export default FailedTask
