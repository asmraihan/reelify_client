import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyClasses = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const { data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/${user?.email}`)
            console.log('from axiosSecure',res.data)
            return res.data
        }
    })
    return (
      <>
      {classes && Array.isArray(classes) && classes.length > 0 ? (  <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Status</th>
                            <th>Seats</th>
                            <th>Total Enrolled</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                       {
                            classes.map((singleClass, index)=>  <tr key={index}>
                            <th>{index+1}</th>
                            <td>{singleClass?.name}</td>
                            <td>{singleClass?.status}</td>
                            <td>{singleClass?.seats}</td>
                            <td>{singleClass?.name}</td>
                            <td>{singleClass?.name}</td>
                            <td> <button className="btn btn-secondary btn-sm text-accent">Update</button> </td>
                        </tr>)

                       }
                    </tbody>
                </table>
            </div>
        </div>) : <p>Sorry! No data Available. Add class first</p>}
      </>
    );
};

export default MyClasses;