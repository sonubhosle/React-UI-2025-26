import { Link } from "react-router-dom"

const Header = () => {

  const isLoggedIn = true
  return (
    <div className='bg-indigo-600  text-white flex justify-between items-center py-2 px-5'>
      <h1>Hedaer</h1>
      <div className="profile">
        {
          !isLoggedIn ? (
            <Link  to='/login'>LOGIN</Link>
          ):(

             <div>
              <p>Welcome</p>
              <span>Jhon</span>
             </div>
        )
            }
      </div>
    </div>
  )
}

export default Header