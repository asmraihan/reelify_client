import { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
import { FaBars, FaBook, FaBookReader, FaBookmark, FaEdit, FaRegPlusSquare, FaSignOutAlt, FaTimes, FaUser, FaUserEdit, FaWallet } from 'react-icons/fa'
import ThemeToggler from '../Utilities/ThemeToggler'
import { getRole } from '../../api/auth'
// import GuestMenu from './GuestMenu'
// import HostMenu from './HostMenu'
const Sidebar = () => {
    const navigate = useNavigate()
    const { user, logOut, role } = useContext(AuthContext)
    const [isActive, setActive] = useState('false')
   
    const [userRole=['user'], setUserRole] = useState('user')
    console.log('ei user role',userRole)
    useEffect(() => {
        if (user) {
          getRole(user?.email).then(data => { setUserRole(data) })
        }
      }, [user])



    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    const handleLogOut = () => {
        logOut()
        navigate('/')
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-neutral text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        {/* <img src="" alt="logo" />  */}
                        <p className='text-accent text-xl'>Dashboard</p>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 text-secondary'
                >
                    {isActive ? <FaBars className='h-6 w-6' /> : <FaTimes className='h-6 w-6' />}



                </button>

            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-base-100 w-80 space-y-6 px-2 py-4 absolute top-0 inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    {/* Branding & Profile Info */}
                    <div>
                        <div className='w-full flex py-2 justify-between items-center bg-neutral mx-auto'>
                            {/* <img src="" alt="logo" />  */}
                            <Link to='/' className='text-2xl font-semibold ml-8'>Reelify</Link>
                            <ThemeToggler></ThemeToggler>
                        </div>
                        <div className='flex flex-col items-center mt-6 -mx-2'>
                            <Link className='relative' to='/dashboard'>
                                <img
                                    className='object-cover w-24 h-24 mx-2 rounded-full'
                                    src={user?.photoURL}
                                    alt='avatar'
                                    referrerPolicy='no-referrer'
                                />
                                <div className='badge bg-green-500 rounded-full animate-pulse absolute top-1 right-1'></div>
                            </Link>
                            <Link to='/dashboard'>
                                <h4 className='mx-2 mt-2 font-medium text-accent  hover:underline'>
                                    {user?.displayName}
                                </h4>
                            </Link>
                            <Link to='/dashboard'>
                                <p className='mx-2 mt-1 text-sm font-medium text-accent/70  hover:underline'>
                                    {user?.email}
                                </p>
                            </Link>
                            <p className='mx-2 mt-4 text-sm font-medium text-info uppercase'>
                                    {userRole}
                                </p>
                        </div>
                    </div>

                 
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <nav>
                           

                    {
                                userRole === 'admin' && <>
                                  <NavLink to='/dashboard/manage-users'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${isActive ? 'bg-info/30 ' : 'text-gray'}`}>
                                <FaUserEdit className='w-5 h-5'/> <span className='mx-4 font-medium'>Manage Users</span>
                            </NavLink>
                                <NavLink to='/dashboard/manage-classes'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${isActive ? 'bg-info/30' : 'text-gray'}`}>
                                <FaEdit className='w-5 h-5'/> <span className='mx-4 font-medium'>Manage Classes</span>
                            </NavLink>
                                </>
                            }


                            {
                                userRole == 'user' && <>
                                <NavLink to='/dashboard/selected-classes'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${isActive ? 'bg-info/30' : 'text-gray'}`}>
                                <FaBook className='w-5 h-5'/> <span className='mx-4 font-medium'>My Selected Classes</span>
                            </NavLink>
                            <NavLink to='/dashboard/enrolled-classes'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${isActive ? 'bg-info/30' : 'text-gray'}`}>
                                <FaBookmark className='w-5 h-5'/> <span className='mx-4 font-medium'>My Enrolled Classes</span>
                            </NavLink>
                            <NavLink to='/dashboard/payment-history'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${isActive ? 'bg-info/30' : 'text-gray'}`}>
                                <FaWallet className='w-5 h-5'/> <span className='mx-4 font-medium'>Payment History</span>
                            </NavLink>
                                </>
                            }
                            {
                                userRole === '' && <>
                                <NavLink to='/dashboard/selected-classes'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${isActive ? 'bg-info/30' : 'text-gray'}`}>
                                <FaBook className='w-5 h-5'/> <span className='mx-4 font-medium'>My Selected Classes</span>
                            </NavLink>
                            <NavLink to='/dashboard/enrolled-classes'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${isActive ? 'bg-info/30' : 'text-gray'}`}>
                                <FaBookmark className='w-5 h-5'/> <span className='mx-4 font-medium'>My Enrolled Classes</span>
                            </NavLink>
                            <NavLink to='/dashboard/payment-history'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${isActive ? 'bg-info/30' : 'text-gray'}`}>
                                <FaWallet className='w-5 h-5'/> <span className='mx-4 font-medium'>Payment History</span>
                            </NavLink>
                                </>
                            }

                            {
                                userRole === 'instructor' && <>
                                <NavLink to='/dashboard/my-classes'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${isActive ? 'bg-info/30' : 'text-gray'}`}>
                                <FaBookReader className='w-5 h-5'/> <span className='mx-4 font-medium'>My Classes</span>
                            </NavLink>
                            <NavLink to='/dashboard/add-classes'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${isActive ? 'bg-info/30' : 'text-gray'}`}>
                                <FaRegPlusSquare className='w-5 h-5'/> <span className='mx-4 font-medium'>Add Class</span>
                            </NavLink>
                                </>
                            }

                            

                        </nav>
                    </div>
                </div>

                <div>
                    <hr />
                    <NavLink
                        to='/dashboard'
                        className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-accent hover:bg-primary/80  ${isActive ? '' : 'text-gray '}`}>
                        <FaUser className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Profile</span>
                    </NavLink>
                    <button
                        onClick={handleLogOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-200 hover:bg-red-500 hover:text-accent transition-colors duration-300 transform'
                    >
                        <FaSignOutAlt className='w-5 h-5 text-accent/90' />

                        <span className='mx-4 font-medium text-accent/80'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar