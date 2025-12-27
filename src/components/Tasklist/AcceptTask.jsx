import React from 'react'

const AcceptTask = ({data}) => {
  
  return (
   
        <div className='bg-pink-800 text-white shrink-0 rounded-2xl p-3 h-110 w-75'>
           <div className='flex flex-row justify-between'>
            <h4 className='bg-teal-500 rounded px-2'>{data.category}</h4>
            <h4 className='font-semibold'>{data.date}</h4>
          </div>
          <h3 className='text-2xl mt-4 mb-5 font-extrabold'>{data.title}</h3>
          <h4>{data.description}</h4>
     
           <div className='flex justify-between mt-8 '>
                <button className='bg-green-400 py-1 px-2 text-sm cursor-pointer active:scale-87 rounded'>Mark as completed</button>
                 <button className='bg-red-400 py-1 px-2 text-sm cursor-pointer active:scale-87 rounded'>Mark as failed</button>
           </div>
      </div>
     
   
  )
}

export default AcceptTask
