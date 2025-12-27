import React from 'react'
import { setLocalStorage } from '../../Utils/LocalStorage'

const Header = ({data}) => {
     
    // const [username, setUsername] = useState("")
    // if(!data){
    //   setUsername('Admin')
    // }else{
    //   setUsername(data.firstName)
    // }
   
      const logoutUser=()=>{
        localStorage.setItem('loggedInUser','')
        window.location.reload()
      }

  return (
    <div>
       <div className=' mt-2 flex items-end justify-between p-3 text-white'>


         <div>
            <h3 className='text-2xl'>Hello,</h3>
            <h2 className='text-3xl'>username🤘</h2>
         </div>

         <button onClick={logoutUser} className='bg-red-500 rounded px-4 py-1 cursor-pointer border-none outline-none hover:bg-red-400 text-xl active:scale-87'>Log out</button>
       </div>
    </div>
  )
}

export default Header
