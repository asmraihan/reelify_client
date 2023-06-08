import React, { useContext } from 'react';
import ButtonDefault from '../Button/ButtonDefault';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const ClassCard = ({singleClass}) => {
  const {role} = useContext(AuthContext)
    const {name, photo, instructor, email, seats, price, createdAt} = singleClass
    const handleSelect =()=>{
      console.log('clicked')
    }
    return (
        <div className={`overflow-hidden ${seats === 0 ? 'bg-red-500/50' : 'bg-neutral' } rounded`}>
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
         
         <button onClick={()=>handleSelect()} className={`group mt-2 relative inline-flex border border-secondary focus:outline-none w-full sm:w-auto ${role !== 'user' || seats === 0 ? 'btn-disabled' : ''}`}>
            <span className="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-white text-center font-bold uppercase bg-secondary ring-1 ring-secondary ring-offset-1 ring-offset-secondary transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
               { seats === 0 ? 'Seat Unavailable' : 'Enroll Now'}
            </span>
        </button>

        

        </div>
      </div>
    );
};

export default ClassCard;