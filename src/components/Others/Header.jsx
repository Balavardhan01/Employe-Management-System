const Header = ({ changeUser, data }) => {

  const logoutUser = () => {
    localStorage.removeItem('loggedInUser')
    changeUser('')
  }

  return (
    <div className='mt-2 flex items-end justify-between p-3 text-white'>
      <div>
        <h3 className='text-2xl'>Hello,</h3>
        <h2 className='text-3xl'>
          {data?.firstName || 'Admin'} 🤘
        </h2>
      </div>

      <button
        onClick={logoutUser}
        className='bg-red-500 rounded px-4 py-1 cursor-pointer hover:bg-red-400 text-xl'
      >
        Log out
      </button>
    </div>
  )
}

export default Header
