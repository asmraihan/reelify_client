import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import ThemeToggler from '../../Utilities/ThemeToggler';
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-neutral py-2">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="lg:flex-1 navbar-start lg:px-2 lg:mx-4 lg:ml-8 "><Link className='text-2xl font-semibold'>
                        <img className='w-12 inline -rotate-90' src="/reelify_logo.png" alt="" />
                        <p className='inline underline underline-offset-4'><span>Reel</span>ify</p>
                    </Link>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            <NavLink className={({ isActive }) => `mx-4 mt-2  ${isActive ? 'border-b-4 border-success ' : ''}`}
                                to='/'><li>Home</li></NavLink>
                            <NavLink className={({ isActive }) => `mx-4 mt-2  ${isActive ? 'border-b-4 border-success ' : ''}`}
                                to='/instructors'><li>Instructors</li></NavLink>
                            <NavLink className={({ isActive }) => `mx-4 mt-2  ${isActive ? 'border-b-4 border-success ' : ''}`}
                                to='/classes'><li>Classes</li></NavLink>

                            {user &&
                                <>
                                    <NavLink className={({ isActive }) => `mx-4 mt-2  ${isActive ? 'border-b-4 border-success ' : ''}`}
                                        to='/dashboard'><li>Dashboard</li></NavLink>
                                    <NavLink className={({ isActive }) => `ml-4 mr-8 mt-0.5  ${isActive ? 'border-b-4 border-success ' : ''}`}
                                        to='/dashboard'>{user?.photoURL ? <img referrerPolicy='no-referrer' className='w-8 h-8 rounded-full' src={user?.photoURL} alt="" /> : <FaUser className='text-lg w-6 h-6 mt-0.5'></FaUser>} </NavLink>

                                </>
                            }
                            <div
                                className='mr-8 mt-0.5'
                                to='/dashboard'>{user ? <Link
                                    onClick={handleLogOut}
                                    className='inline-flex justify-center items-center py-2 px-5 font-medium text-center text-white 
                btn btn-sm rounded-md btn-error hover:bg-error/80 normal-case '
                                >
                                    Logout
                                </Link> :
                                    <Link
                                        to='/login'
                                        className='inline-flex justify-center items-center py-2 px-5 font-medium text-center text-white btn btn-sm rounded-md btn-primary normal-case ml-4'
                                    >
                                        Login
                                    </Link>}</div>
                            {/*  */}

                            <ThemeToggler></ThemeToggler>
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                {/* Content */}
            </div>
            <div className="drawer-side z-40">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 space-y-5">
                    {/* Sidebar content here */}
                  <div className='flex justify-between items-center'>
                  <div className="lg:flex-1 navbar-start lg:px-2 lg:mx-4 lg:ml-8 "><Link className='text-2xl font-semibold'>
                        <img className='w-12 inline -rotate-90' src="/reelify_logo.png" alt="" />
                        <p className='inline underline underline-offset-4'><span>Reel</span>ify</p>
                    </Link>
                   
                    </div>
                   {
                    user &&  <NavLink className={({ isActive }) => `ml-4 mr-8 mt-0.5  ${isActive ? 'border-b-4 border-success ' : ''}`}
                    to='/dashboard'>{user?.photoURL ? <img referrerPolicy='no-referrer' className='w-8 h-8 rounded-full' src={user?.photoURL} alt="" /> : <FaUser className='text-lg w-6 h-6 mt-0.5'></FaUser>} </NavLink>
                   }
                    <ThemeToggler></ThemeToggler>
                  </div>
                    <NavLink className={({ isActive }) => `mx-4 mt-2 w-1/3 ${isActive ? 'border-b-4 border-success ' : ''}`}
                                to='/'><li>Home</li></NavLink>
                            <NavLink className={({ isActive }) => `mx-4 mt-2 w-1/3 ${isActive ? 'border-b-4 border-success ' : ''}`}
                                to='/instructors'><li>Instructors</li></NavLink>
                            <NavLink className={({ isActive }) => `mx-4 mt-2 w-1/3 ${isActive ? 'border-b-4 border-success ' : ''}`}
                                to='/classes'><li>Classes</li></NavLink>
                                  {user &&
                                <>
                                    <NavLink className={({ isActive }) => `mx-4 mt-2  ${isActive ? 'border-b-4 border-success ' : ''}`}
                                        to='/dashboard'><li>Dashboard</li></NavLink>
                                 

                                </>
                            }
                                 <div
                                className=' mt-0.5 ml-3'
                                to='/dashboard'>{user ? <Link
                                    onClick={handleLogOut}
                                    className='inline-flex justify-center items-center py-2 px-5 font-medium text-center text-white 
                btn btn-sm rounded-md btn-error hover:bg-error/80 normal-case '
                                >
                                    Logout
                                </Link> :
                                    <Link
                                        to='/login'
                                        className='inline-flex justify-center items-center py-2 px-5 font-medium text-center text-white btn btn-sm rounded-md btn-primary normal-case'
                                    >
                                        Login
                                    </Link>}</div>

                </ul>

            </div>
        </div>
    );
};

export default NavBar;