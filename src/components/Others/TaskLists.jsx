import React from 'react'
import AcceptTask from '../Tasklist/AcceptTask'
import CompleteTask from '../Tasklist/CompleteTask'
import FailedTask from '../Tasklist/FailedTask'
import NewTask from '../Tasklist/NewTask'

const TaskLists = ({data}) => {
  console.log(data)

  return (
    <div id='tasklists' className='h-[55%] overflow-x-auto mt-20  flex flex-row gap-5 ml-5 '>
    
     {data.tasks.map((e,idx)=>{
       if(e.newTask){
        return <NewTask key={idx}/>
      }
       if(e.active){
       return  <AcceptTask key={idx}/>
      } 
      if(e.completed){
        return <CompleteTask key={idx}/>
      }
      if(e.failed){
        return <FailedTask key={idx}/>
      }
      

     })}

       

      

      

      

    </div>
  )
}

export default TaskLists
