import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const ManageUsers = () => {
    const {user, loading} = useContext(AuthContext)
    const {data: users=[]} = useQuery({
    queryKey: ['allusers', user],
    enabled: !loading,
    queryFn: async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/allusers`)
        const data = await res.json()
        return data
    }
    })
console.log(users)

    return (
        <div className="overflow-x-auto">
        <table className="table table-zebra">
            {/* head */}
            <thead>
                <tr>
                    <th>#</th>
                    <th>Class Name</th>
                    <th>Instructor</th>
                    <th>Available Seats</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                <tr>
                    <th>
                        1
                    </th>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">Hart Hagerty</div>
                            
                            </div>
                        </div>
                    </td>
                    <td>
                        Zemlak, Daniel and Leannon
                        <br />
                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                    </td>
                    <td>50</td>
                    <td>$300</td>
                    <td>approved</td>
                    <td>
                        <button className="btn btn-ghost bg-primary text-white btn-xs">Approve</button>
                    </td>
                    <td>
                        <button className="btn btn-ghost bg-error text-white btn-xs">Deny</button>
                    </td>
                    <td>
                        <button className="btn btn-ghost bg-error text-white btn-xs">Feedback</button>
                    </td>
                </tr>
           
            </tbody>
          
          

        </table>
    </div>
    );
};

export default ManageUsers;