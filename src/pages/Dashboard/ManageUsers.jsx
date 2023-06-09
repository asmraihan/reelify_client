import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const ManageUsers = () => {
    const {user, loading} = useContext(AuthContext)
    const {data: users=[]} = useQuery({
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
                users.map((singleUser, index)=> <tr key={singleUser._id}>
                <th>
                    {index+1}
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={singleUser?.photo} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                   
                    </div>
                </td>
                <td>
                {singleUser?.name}
                </td>
                <td>  {singleUser?.email}</td>
                <td>  {singleUser?.role || 'student'}</td>
          
                <td>
                    <button className="btn bg-primary text-white btn-xs">Make Instructor</button>
                </td>
                <td>
                    <button className="btn bg-warning text-white btn-xs">Make Admin</button>
                </td>
               
            </tr>)
              }
           
            </tbody>
          
          

        </table>
    </div>
    );
};

export default ManageUsers;