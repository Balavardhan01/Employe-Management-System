import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import ViewTasks from '../Others/ViewTasks'


const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-8'>
       <Header changeUser={props.changeUser}/>
       <CreateTask/>
       <ViewTasks/>
      
    </div>
  )
}

export default AdminDashboard
