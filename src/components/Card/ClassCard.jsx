import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ClassCard = ({ singleClass }) => {
  const { user, role,loading } = useContext(AuthContext)

  const { _id, name, photo, instructor, email, student, seats, price, createdAt } = singleClass
  const navigate = useNavigate()
  const location = useLocation()
  const handleSelect = (singleClass) => {
    console.log(singleClass)
    if (user && user.email) {
      const selectedClass = { classId: _id, name, photo, instructor, seats, price, email: user.email }
      fetch(`${import.meta.env.VITE_API_URL}/selected`,{
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(selectedClass)
   })
   .then(res => res.json())
      .then(data => {
    if(data.insertedId){    //todo refetch
        // refetch() 
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Class Added to list',
            showConfirmButton: false,
            timer: 1500
          })
    }  
    })
}
else{
    Swal.fire({
        title: 'Please Login First!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
            navigate('/login', {state: {from: location} })
        }
      })
}
}
  return (
    <div className={`overflow-hidden ${seats === 0 ? 'bg-red-500/50' : 'bg-neutral'} rounded`}>
      <img
        src={photo}
        className="object-cover w-full h-64"
        alt=""
      />
      <div className="p-5">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <span

            className="text-blue-gray-900 "
            aria-label="Category"
            title="traveling"
          >
            Class added -
          </span>
          <span className=""> {createdAt}</span>
        </p>
        <p
          aria-label="classname"
          title="classname"
          className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-accent"
        >
          {name}
        </p>
        <p className="mb-2 ">Instructor name : {instructor}</p>
        <div className='text-accent'>
          <p className="mb-2 ">Available Seats : {seats}</p>
          <p className="mb-2 ">Price : {price}</p>
        </div>

        <button onClick={() => handleSelect(singleClass)} className={`group mt-2 relative inline-flex border border-secondary focus:outline-none w-full sm:w-auto ${role !== 'user' || seats === 0 ? 'btn-disabled' : ''}`}>
          <span className="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-white text-center font-bold uppercase bg-secondary ring-1 ring-secondary ring-offset-1 ring-offset-secondary transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
            {seats === 0 ? 'Seat Unavailable' : 'Enroll Now'}
          </span>
        </button>



      </div>
    </div>
  );
};

export default ClassCard;