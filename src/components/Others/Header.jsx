import React from 'react'

const Header = ({data}) => {
 
  return (
    <div>
       <div className=' mt-2 flex items-end justify-between p-3'>


         <div>
            <h3 className='text-2xl'>Hello,</h3>
            <h2 className='text-3xl'>{data.firstName}🤘</h2>
         </div>

         <button className='bg-red-500 rounded px-4 py-1 cursor-pointer border-none outline-none hover:bg-red-400 text-xl active:scale-87'>Log out</button>
       </div>
    </div>
  )
}

export default Header
