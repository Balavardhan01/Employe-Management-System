import React from 'react'

const AcceptTask = () => {
  return (
    <div>
        <div className='bg-red-900  shrink-0 rounded-2xl p-3 h-110 w-75'>
           <div className='flex flex-row justify-between'>
            <h4 className='bg-red-700 px-2'>High</h4>
            <h4 className='font-semibold'>19 December 2025</h4>
          </div>
          <h3 className='text-2xl mt-4 mb-5 font-extrabold'>Submit the assignment</h3>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, accusantium amet. Quas vel provident Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident obcaecati molestiae consectetur quod expedita esse dicta eius, commodi quas temporibus ill</h4>
     
           <div className='flex justify-between mt-8 '>
                <button className='bg-green-400 py-1 px-2 text-sm cursor-pointer active:scale-87 rounded'>Mark as completed</button>
                 <button className='bg-red-400 py-1 px-2 text-sm cursor-pointer active:scale-87 rounded'>Mark as failed</button>
           </div>
      </div>
     
    </div>
  )
}

export default AcceptTask
