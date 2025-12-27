import React from "react";

const CreateTask = () => {
  return (
    <div className="text-white">
      <div className="p-5 text-white bg-[#1c1c1c] rounded-2xl">
        <form action="" className="flex justify-between flex-wrap w-full items-start">
          <div className="w-1/2">
            <div >
              <h2 className="text-sm text-gray-200 mb-0.5">Task Title</h2>
              <input
                type="text"
                placeholder="Learn a DSA concept"
                name=""
                id=""
                className="border rounded text-sm py-1 px-2 w-4/5 outline-none bg-transparent mb-3"
                />
            </div>

            <div >
              <h2 className="text-sm text-gray-200 mb-0.5">Date</h2>
              <input type="date" className="border rounded text-sm py-1 px-2 w-4/5 outline-none bg-transparent mb-3 " />
            </div>

            <div >
              <h2>Assign to</h2>
              <input
                type="text"
                placeholder="Employee name"
                className="border rounded text-sm py-1 px-2 w-4/5 outline-none bg-transparent mb-3"
                />
            </div>

            <div  >
              <h2 className="text-sm text-gray-200 mb-0.5">Category</h2>
              <input
                type="text"
                placeholder="Webdev, dsa, project, etc"
                className="border rounded text-sm py-1 px-2 w-4/5 outline-none bg-transparent"
                />
            </div>
          </div>

          <div className="w-2/5 flex flex-col ">
             <h2 className="mb-1 text-gray-300">Description</h2>
             <textarea name="" id="" className="border rounded w-full h-47 py-2 px-4" ></textarea>

             <button className="bg-green-600 rounded px-8 py-2 text-xl flex justify-center mt-5 items-center outline-none w-full cursor-pointer hover:bg-green-400 hover:active:87">Create Task</button>

          </div>

          
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
