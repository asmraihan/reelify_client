import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import SelectedRow from "./SelectedRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const SelectedClasses = () => {

  const {user, loading} = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure()
  const {data: classes=[], refetch} = useQuery({
    queryKey: ['selected', user],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/selected/${user?.email}`)
      console.log('from axiosSecure',res.data)
      return res.data
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
              <th></th>
              <th>Class</th>
              <th>Instructor</th>
              <th>Price</th>   
              <th>Action</th>   
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
        {
          classes.map((singleClass, index)=> <SelectedRow
          key={singleClass._id}
          index={index}
          singleClass={singleClass}
          refetch={refetch}
          ></SelectedRow>)
        }
            
          </tbody>
        </table>
      </div>
    );
};

export default SelectedClasses;