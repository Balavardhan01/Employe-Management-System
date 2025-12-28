import React from 'react'
import Header from '../Others/Header'
import TasksNumber from '../Others/TasksNumber'
import TaskLists from '../Others/TaskLists'
import ViewTasks from '../Others/ViewTasks'

const EmployeeDashboard = (props) => {

  return (
    
    <>
    <Header changeUser={props.changeUser} data={props.data}/>
    <TasksNumber data={props.data}/>
    <TaskLists data={props.data}/>
    
    
    </>
  )
}

export default EmployeeDashboard
