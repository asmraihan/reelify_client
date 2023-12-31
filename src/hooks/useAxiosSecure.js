import { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


// ? this hook is for axios intercept
const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useContext(AuthContext)
    useEffect(() => {
        // intercept request
        axiosSecure.interceptors.request.use(config => {
            const token = `Bearer ${localStorage.getItem('access-token')}`
            if (token) {
                config.headers.Authorization = token
            }
            return config
        })

        // intercept response
        axiosSecure.interceptors.response.use(response => response, async error => {
            if (error.response && error.response.status === 401 || error.response.status === 403) {
                await logOut()
                navigate('/login')
            }
            return Promise.reject(error)
        })
    }, [logOut, navigate])


    return [axiosSecure]
}

export default useAxiosSecure