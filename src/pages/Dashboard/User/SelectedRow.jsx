import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SelectedRow = ({ singleClass, refetch }) => {

    const handleDelete= (singleClass)=>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
        
                fetch(`${import.meta.env.VITE_API_URL}/selected/${singleClass._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


//   console.log(singleClass.classId)
    return (
        <tr>
            <th>1</th>
            <th>
                <div className="avatar">
                    <div className="mask w-16 h-16">
                        <img src={singleClass?.photo} alt="class img" />
                    </div>
                </div>
            </th>
            <td>{singleClass?.name}</td>
            <td>{singleClass?.instructor}</td>
            <td>{singleClass?.price}</td>
            <td><Link to={`/dashboard/payment/${singleClass?.classId}`} className={`btn bg-primary text-accent btn-sm`}>Pay</Link></td>
            <td><button onClick={() => handleDelete(singleClass)} className={`btn bg-error text-accent btn-sm`}>Delete</button></td>
        </tr>
    );
};

export default SelectedRow;