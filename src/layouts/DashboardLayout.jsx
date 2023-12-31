import { Outlet, ScrollRestoration } from 'react-router-dom'
import Sidebar from '../components/Dashboard/Sidebar'


const DashboardLayout = () => {
  return (
    <div className='relative min-h-screen md:flex'>
      <Sidebar />
      <div className='flex-1 md:ml-80'>
        <div className='p-5'>
          <Outlet />
        </div>
      </div>
      <ScrollRestoration></ScrollRestoration>
    </div>
  )
}

export default DashboardLayout