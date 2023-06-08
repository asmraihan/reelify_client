import React from 'react';
import ButtonDefault from '../Button/ButtonDefault';

const ClassCard = ({singleClass}) => {
    // console.log(singleClass)
    const {name, photo, instructor, email, seats, price, createdAt} = singleClass
  
    return (
        <div className={`overflow-hidden ${seats === 0 ? 'bg-red-200' : 'bg-neutral' } rounded`}>
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
         <div className='text-red-600 dark:text-green-500'>
         <p className="mb-2 ">Available Seats : {seats}</p>
         <p className="mb-2 ">Price : {price}</p>
         </div>
          <ButtonDefault btnText={ seats === 0 ? 'Seat Unavailable' : 'Enroll Now'}></ButtonDefault>
        </div>
      </div>
    );
};

export default ClassCard;