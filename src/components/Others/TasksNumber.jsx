import React from 'react'

const TasksNumber = ({data}) => {
  return (
    <div className='flex flex-row text-white h-20 justify-around  mt-10'>
       <div className='bg-blue-300   w-[23%] flex flex-col rounded-xl justify-center px-4 hover:bg-blue-400 '>
        <h1 className='font-bold text-2xl'>{data.taskStats.newTask}</h1>
        <h3 className='font-semibold text-lg'>New Tasks</h3>

       </div>

       <div className='bg-emerald-300 rounded-xl  w-[23%] flex flex-col justify-center px-4 hover:bg-emerald-400 '>
        <h1 className='font-bold text-2xl'>{data.taskStats.completed}</h1>
        <h3 className='font-semibold text-lg'>Completed Tasks</h3>

       </div>

       <div className='bg-orange-400 rounded-xl w-[23%] flex flex-col justify-center px-4 hover:bg-orange-500'>
        <h1 className='font-bold text-2xl'>{data.taskStats.active}</h1>
        <h3 className='font-semibold text-lg'>Accepted Tasks</h3>

       </div>

       <div className='bg-fuchsia-500 rounded-xl w-[23%]  flex flex-col justify-center px-4 hover:bg-fuchsia-600'>
        <h1 className='font-bold text-2xl'>{data.taskStats.failed}</h1>
        <h3 className='font-semibold text-lg'>Failed Tasks</h3>

       </div>
    </div>
  )
}

export default TasksNumber
