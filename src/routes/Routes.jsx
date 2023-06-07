import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Instructors from '../pages/Instructors/Instructors'
import Classes from '../pages/Classes/Classes'
import Dashboard from '../pages/Dashboard/Dashboard'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/Signup/Signup'



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
                path: '/dashboard',
                element: <Dashboard></Dashboard>
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

    // {
    //     path: '/login',
    //     element: <Login></Login>
    // },
    // {
    //     path: '/signup',
    //     element: <SignUp></SignUp>
    // },

])