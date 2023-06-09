import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {
    const {user, loading} = useContext(AuthContext)
    const {data: classes=[]} = useQuery({
    queryKey: ['allclasses', user],
    enabled: !loading,
    queryFn: async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/allclasses`)
        const data = await res.json()
        return data
    }
    })
// console.log(classes)
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
                {
                    classes.map((singleClass, index)=>  <tr 
                    key={singleClass._id} 
                   >
                    <th>
                        {index+1}
                    </th>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-parallelogram-2 w-16 h-16">
                                    <img src={singleClass?.photo} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{singleClass?.name}</div>
                            
                            </div>
                        </div>
                    </td>
                    <td>
                    Name: {singleClass?.instructor}
                        <br />
                        Email: <span className="badge badge-base-300 badge-sm"> {singleClass?.email}</span>
                    </td>
                    <td>{singleClass?.seats}</td>
                    <td>${singleClass?.price}</td>
                    <td className="">{singleClass?.status}</td>
                    <td>
                        <button className="btn bg-primary text-white btn-xs">Approve</button>
                    </td>
                    <td>
                        <button className="btn bg-error text-white btn-xs">Deny</button>
                    </td>
                    <td>
                        <button className="btn bg-info text-white btn-xs">Feedback</button>
                    </td>
                </tr>)
                }
               
                </tbody>
              
              

            </table>
        </div>
    );
};

export default ManageClasses;