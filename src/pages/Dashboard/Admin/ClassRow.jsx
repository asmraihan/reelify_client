import React from 'react';
import Swal from 'sweetalert2';
import { giveFeedback } from '../../../api/classes';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const ClassRow = ({ singleClass, index, refetch }) => {
    // const {loading, setLoading} = useContext(AuthContext)
    const handleApproved = async (singleClass) => {
        fetch(`${import.meta.env.VITE_API_URL}/classes/approved/${singleClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${singleClass.name} Approved`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDenied = async (singleClass) => {
        fetch(`${import.meta.env.VITE_API_URL}/classes/denied/${singleClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${singleClass.name} denied`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleFeedback = (singleClass) => {
       event.preventDefault()
       const text = event.target[0].value
       console.log(singleClass)
       console.log(text)
       giveFeedback({text}, singleClass._id)
       .then(data => {
         console.log(data)
         toast.success('Feedback posted successfully')
        //  setLoading(false)
         refetch()
       })
       .catch(err => {
         console.log(err)
        //  setLoading(false)
       })
    }
    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask  w-16 h-16">
                            <img src={singleClass?.photo} alt="Avatar" />
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
                <button onClick={() => handleApproved(singleClass)} className={`btn ${singleClass.status !== 'pending' ? 'btn-disabled bg-accent/20' : 'bg-primary'}  text-accent btn-xs`}>Approve</button>
            </td>
            <td>
                <button onClick={() => handleDenied(singleClass)} className={`btn ${singleClass.status !== 'pending' ? 'btn-disabled bg-accent/20' : 'bg-error'}  text-accent btn-xs`}>Deny</button>
            </td>
            <td>
                <label htmlFor={`my_modal_${singleClass._id}`} className="btn bg-info text-accent btn-xs">Feedback</label>    
            </td>
            {/* modals starts */}
            <input type="checkbox" id={`my_modal_${singleClass._id}`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Give feedback</h3>
                   <form onSubmit={() => handleFeedback(singleClass)}  className='flex flex-col justify-center items-center'>
                   <textarea className="textarea textarea-primary w-full my-6 h-40 resize-none" placeholder="Bio"></textarea>
                    <button className='btn btn-secondary text-accent'>Confirm</button>
                   </form>
                </div>
                <label className="modal-backdrop" htmlFor={`my_modal_${singleClass._id}`}>Close</label>
            </div>
        </tr>
    );
};

export default ClassRow;