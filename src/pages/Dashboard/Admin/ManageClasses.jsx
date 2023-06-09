import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import ClassRow from "./ClassRow";

const ManageClasses = () => {
    const {user, loading} = useContext(AuthContext)
    const {data: classes=[], refetch} = useQuery({
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
                    classes.map((singleClass, index)=>  <ClassRow
                    key={singleClass._id}
                    index={index}
                    singleClass={singleClass}
                    refetch={refetch}
                    ></ClassRow>)
                }
               
                </tbody>
              
              

            </table>
        </div>
    );
};

export default ManageClasses;