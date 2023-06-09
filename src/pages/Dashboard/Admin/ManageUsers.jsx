import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import UserRow from "./UserRow";



const ManageUsers = () => {
    const {user, loading} = useContext(AuthContext)
    const {data: users=[], refetch} = useQuery({
    queryKey: ['allusers', user],
    enabled: !loading,
    queryFn: async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/admin/allusers/${user?.email}`)
        const data = await res.json()
        return data
    }
    })
// console.log(users)

    return (
        <div className="overflow-x-auto">
        <table className="table table-zebra">
            {/* head */}
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>            
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
              {
                users.map((singleUser, index)=> <UserRow
                key={singleUser._id}
                index={index}
                singleUser={singleUser}
                refetch={refetch}
                ></UserRow>)
              }
           
            </tbody>
        </table>
    </div>
    );
};

export default ManageUsers;