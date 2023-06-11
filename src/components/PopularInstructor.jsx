import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import {TbMail} from "react-icons/tb";
import { motion } from "framer-motion"

const PopularInstructor = () => {
  const {user, loading} = useContext(AuthContext)
  const {data: instructors=[]} = useQuery({
  queryKey: ['instructors', user?.email],
  enabled: !loading,
  queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/instructors/sort`)
      const data = await res.json()
      return data
  }
  })
  // console.log(instructors)
  // const PreviewAnimation = {
  //   initial: {
  //     y:0,
  //     opacity: 0,
  //     scale: 0.9
  //   },
  //   animate: {
  //     y:0,
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       ease: [0.6, 0.01, 0.05, 0.95],
  //       duration: 0.8,
  //     }
  //   }
  // }
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-20 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
      <p className="text-accent/80 lg:text-sm lg:max-w-md">
          All courses are taught by instructors with both industrial and educational experience to make the content as accessible and engaging for young filmmakers as possible.
        </p>
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:mb-6 group text-right">
          <span className="inline-block mb-1 sm:mb-4">
          Professional instructors with 
            <br className="hidden md:block" />
            hands-on experience
          </span>
        </h2>
       
      </div>
      <div className="grid gap-10 lg:gap-20 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">
        
         {
          instructors.map((instructor)=>  <motion.div 
          key={instructor._id} 
          className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
          initial="initial"
          whileInView="animate"
          // variants={PreviewAnimation}
          >
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={instructor.photo}
            alt=""
          />
          <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
           <div className='flex justify-between'>
           <p className="text-sm font-medium tracking-wide text-white">
            {instructor.name}
            </p>
            <div className='flex items-center gap-1 text-white/70'><TbMail></TbMail>
            <p className='text-sm '>  {instructor.email}</p></div>
           </div>
            <p className="text-blue-400 uppercase mt-1 "> Instructor </p>
          </div>
        </motion.div>)
         }
      </div>
      {/* <div className="text-center">
      <Link className="group relative inline-flex border border-secondary focus:outline-none w-full sm:w-auto"
       to='/instructors'>
        <span className="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-secondary text-center font-bold uppercase  ring-1 ring-secondary  transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">See more <FaArrowRight></FaArrowRight></span>
    </Link>
      </div> */}
    </div>
    );
};

export default PopularInstructor;