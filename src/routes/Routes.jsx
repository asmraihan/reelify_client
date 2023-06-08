import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Instructors from '../pages/Instructors/Instructors'
import Classes from '../pages/Classes/Classes'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/Signup/Signup'
import PrivateRoute from './PrivateRoute'
import SelectedClasses from '../pages/Dashboard/SelectedClasses'
import EnrolledClasses from '../pages/Dashboard/EnrolledClasses'
import DashboardLayout from '../layouts/DashboardLayout'
import MyClasses from '../pages/Dashboard/MyClasses'
import AddClasses from '../pages/Dashboard/AddClasses'
import ManageUsers from '../pages/Dashboard/ManageUsers'
import ManageClasses from '../pages/Dashboard/ManageClasses'
import UserProfile from '../pages/Dashboard/UserProfile'




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement : <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
          {
            path: '/dashboard',
            element: <UserProfile></UserProfile>
          },
          {
            path: '/dashboard/selected-classes',
            element: <SelectedClasses></SelectedClasses>
          },
          {
            path: '/dashboard/enrolled-classes',
            element: <EnrolledClasses></EnrolledClasses>
          },
          
          {
            path: '/dashboard/my-classes',
            element: <MyClasses></MyClasses>
          },
          {
            path: '/dashboard/add-classes',
            element: <AddClasses></AddClasses>
          },

          {
            path: '/dashboard/manage-users',
            element: <ManageUsers></ManageUsers>
          },
          {
            path: '/dashboard/manage-classes',
            element: <ManageClasses></ManageClasses>
          },

        ]
      }
    ])