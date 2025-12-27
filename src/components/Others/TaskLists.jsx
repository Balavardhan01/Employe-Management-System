import React from 'react'
import AcceptTask from '../Tasklist/AcceptTask'
import CompleteTask from '../Tasklist/CompleteTask'
import FailedTask from '../Tasklist/FailedTask'
import NewTask from '../Tasklist/NewTask'

const TaskLists = ({data}) => {
  

  return (
    <div id='tasklists' className='min-h-[65vh] overflow-x-auto mt-20 items-start flex flex-row gap-5 ml-5 '>

    
    
     {data.tasks.map((e,idx)=>{
if(e.active){
       return  <AcceptTask key={idx} data={e}/>
      }

      else if(e.failed){
        return <FailedTask key={idx} data={e}/>
      }

       
       
     else if(e.completed){
        return <CompleteTask key={idx} data={e}/>
      }
      else if(e.newTask){
        return <NewTask/>
      }

     
     
      

     })}

       

      

      

      

    </div>
  )
}

export default TaskLists
