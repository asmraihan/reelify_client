import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { getRole } from '../../../api/auth';
import { useEffect } from 'react';

const UserRow = ({ singleUser, index,refetch }) => {
    console.log(singleUser)


    const [userRole, setUserRole] = useState(null)
    console.log('ei user er role',userRole)
    useEffect(() => {
        if (singleUser) {
          getRole(singleUser?.email).then(data => { setUserRole(data) })
        }
      }, [singleUser])




    const handleMakeInstructor = async (singleUser) => {
        fetch(`${import.meta.env.VITE_API_URL}/users/instructor/${singleUser._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${singleUser.name} is now an Instructor`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeAdmin = async (singleUser) => {
        
        fetch(`${import.meta.env.VITE_API_URL}/users/admin/${singleUser._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${singleUser.name} is now an Admin`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
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
                <button onClick={() => handleMakeInstructor(singleUser)} className={`btn ${userRole === 'instructor' ? 'btn-disabled bg-accent/20' : 'bg-primary'}  text-accent btn-xs`}>Make Instructor</button>
            </td>
            <td>
                <button onClick={() => handleMakeAdmin(singleUser)} className={`btn ${userRole === 'admin' ? 'btn-disabled bg-accent/20' : 'bg-warning'}  text-accent btn-xs`}>Make Admin</button>
            </td>

        </tr>
    );
};

export default UserRow;