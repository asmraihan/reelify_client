import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { format } from 'date-fns'

const EnrolledClasses = () => {

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
              <th></th>
              <th>Class Title</th>
              <th>Instructor</th>   
              <th>Enroll Date</th>   
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

           {
            classes.map((singleClass, index)=> <tr
            key={singleClass._id}
            >
            <th>{index+1}</th>
         
            <td>  <div className="avatar">
                    <div className="mask w-16 h-16">
                        <img src={singleClass?.photo} alt="class img" />
                    </div>
                </div></td>
            <td>{singleClass?.classTitle}</td>
            <td>{singleClass?.instructor}</td>
            <td>   {format(new Date(singleClass?.date), 'P')}</td>
          </tr>)
           }
            
          </tbody>
        </table>
      </div>
    );
};

export default EnrolledClasses;