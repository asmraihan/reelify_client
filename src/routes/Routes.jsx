import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Instructors from '../pages/Instructors/Instructors'
import Classes from '../pages/Classes/Classes'
import Dashboard from '../pages/Dashboard/Dashboard'



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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