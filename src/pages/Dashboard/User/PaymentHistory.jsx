import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {

  const {user, loading} = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure()
  const {data: classes=[], refetch} = useQuery({
    queryKey: ['enrolled', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrolled/${user?.email}`)
      console.log('from axiosSecure',res.data)
      return res.data
    }
    })
console.log(classes)
    return (
          <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Title</th>
              <th>Price</th>
              <th>Transaction Id</th>   
              <th>Purchase Date</th>   
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

           {
            classes.map((singleClass, index)=> <tr
            key={singleClass._id}
            >
            <th>{index+1}</th>
         
            <td>{singleClass?.classTitle}</td>
            <td>${singleClass?.price}</td>
            <td>{singleClass?.transactionId}</td>
            <td>{singleClass?.date}</td>
          </tr>)
           }
            
          </tbody>
        </table>
      </div>
    );
};

export default PaymentHistory;