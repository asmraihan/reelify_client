import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import useAxiosSecure from "./useAxiosSecure"

const useInstructor =()=>{
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    // use axiosSecure with react-query
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
            return res.data.instructor
        }
    })
    return [isInstructor, isInstructorLoading]
}

export default useInstructor;