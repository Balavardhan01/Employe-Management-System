import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const ViewTasks = () => {

 const [userData,setUserData]= useContext(AuthContext)
 

  return (
    <div className='p-5 mt-5 bg-gray-900 rounded-xl flex-col h-70 text-white'>
      <div className='bg-gray-700 py-5 px-4 rounded-2xl flex justify-between mb-2  '>

        <h2 className='text-lg font-medium w-1/5 '>Employee name</h2>
        <h3 className='text-lg font-medium w-1/5'>New Task</h3>
        <h4 className='text-lg font-medium w-1/5'>Active Task</h4>
        <h4 className='text-lg font-medium w-1/5'>Completed</h4>
        <h4 className='text-lg font-medium w-1/5'>Failed</h4>

      </div>

     <div className='h-[80%] overflow-auto text-white '>
         {userData.map(function(e){
        return  <div className='bg-gray-800 py-5 px-4  flex justify-between mb-2 border ml-3'>
        <h2 className='w-1/5 text-lg  font-medium text-cyan-300 '>{e.firstName}</h2>
        <h3 className='text-lg font-medium text-fuchsia-300 w-1/5 '>{e.taskStats.newTask}</h3>
        <h4 className='text-lg font-medium text-lime-600 w-1/5 '>{e.taskStats.active}</h4>
        <h4 className='text-lg font-medium text-yellow-600 w-1/5 '>{e.taskStats.completed}</h4>
        <h4 className='text-lg font-medium text-red-600 w-1/5 '>{e.taskStats.failed}</h4>
      </div>
      })}
     </div>
      </div>
  )
}

export default ViewTasks
