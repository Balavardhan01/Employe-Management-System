import React from 'react'
import Header from '../Others/Header'
import TasksNumber from '../Others/TasksNumber'
import TaskLists from '../Others/TaskLists'
import ViewTasks from '../Others/ViewTasks'

const EmployeeDashboard = ({data}) => {

  return (
    
    <>
    <Header data={data}/>
    <TasksNumber data={data}/>
    <TaskLists data={data}/>
    
    
    </>
  )
}

export default EmployeeDashboard
