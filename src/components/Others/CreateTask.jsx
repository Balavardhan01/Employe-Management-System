import React from "react";
import { useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useContext } from "react";

const CreateTask = () => {

   const [userData,setUserData]= useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault();

    setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:true,completed:false})

     const data=userData
    
     

    data.forEach(function(e){
      if(assignTo == e.firstName){
        e.tasks.push(newTask)
        e.taskStats.newTask=e.taskStats.newTask+1
        
        
      }
      
    })
    setUserData(data)
    console.log(data);
    
    
   
     
    setTaskDate('')
    setAssignTo('')
    setCategory('')
    setTaskDescription('')
    setTaskTitle('')
    

  }
  return (
    <div className="text-white">
      <div className="p-5 text-white bg-[#1c1c1c] rounded-2xl">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}  className="flex justify-between flex-wrap w-full items-start">


          <div className="w-1/2">
            <div >
              <h2 className="text-sm text-gray-200 mb-0.5">Task Title</h2>
              <input 
                value={taskTitle}
                onChange={(e)=>{
                  setTaskTitle(e.target.value)
                }}
                type="text"
                placeholder="Learn a DSA concept"
                name=""
                id=""
                className="border rounded text-sm py-1 px-2 w-4/5 outline-none bg-transparent mb-3"
                />
            </div>

            <div >
              <h2 className="text-sm text-gray-200 mb-0.5">Date</h2>
              <input 
              value={taskDate}
                onChange={(e)=>{
                  setTaskDate(e.target.value)
                }}
              type="date" className="border rounded text-sm py-1 px-2 w-4/5 outline-none bg-transparent mb-3 " />
            </div>

            <div >
              <h2>Assign to</h2>
              <input
                value={assignTo}
                onChange={(e)=>{
                  setAssignTo(e.target.value)
                }}
                type="text"
                placeholder="Employee name"
                className="border rounded text-sm py-1 px-2 w-4/5 outline-none bg-transparent mb-3"
                />
            </div>

            <div  >
              <h2 className="text-sm text-gray-200 mb-0.5">Category</h2>
              <input
                value={category}
                onChange={(e)=>{
                  setCategory(e.target.value)
                }}
                type="text"
                placeholder="Webdev, dsa, project, etc"
                className="border rounded text-sm py-1 px-2 w-4/5 outline-none bg-transparent"
                />
            </div>
          </div>

          <div className="w-2/5 flex flex-col ">
             <h2 className="mb-1 text-gray-300">Description</h2>
             <textarea name="" id="" className="border rounded w-full h-47 py-2 px-4" value={taskDescription}
                onChange={(e)=>{
                  setTaskDescription(e.target.value)
                }}></textarea>

            <input
            
            type="submit" className="bg-green-600 rounded px-8 py-2 text-xl flex justify-center mt-5 items-center outline-none w-full cursor-pointer hover:bg-green-400 hover:active:87"/>

          </div>

          
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
