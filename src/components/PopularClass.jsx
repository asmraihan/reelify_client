import { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const PopularClass = () => {
  const { user, loading } = useContext(AuthContext)
  const { data: classes = [] } = useQuery({
    queryKey: ['classes', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/classes/sort`)
      const data = await res.json()
      return data
    }
  })
  // console.log(classes)
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-20 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            There is no must in art
            <br className="hidden md:block" />
            because art is free.
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-accent/80 lg:text-sm lg:max-w-md">
          "Class is dead", says Foucault; however, according to Reicher, it is
          not so much class that is dead, but rather the absurdity, and some
          would say the paradigm, of class.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
    {
      classes.map((singleClass)=>  <div
      key={singleClass._id}
      className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
      style={{
        backgroundImage: `url(${singleClass.photo})`
      }}
    >
      <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700  backdrop-blur-sm bg-gray-800/60 opacity-0 group-hover:opacity-100 text-center space-y-5">
        <h2 className="mb-2 text-xl font-semibold text-white tracking-wide capitalize">
          {singleClass?.name}
        </h2>
    <div className= 'opacity-0 group-hover:opacity-100'>
    <div>
       <span className="text-blue-400 uppercase "> Instructor : </span>
        <span className='ml-2'> {singleClass?.instructor}</span>
       </div>
       <div>
       <span className="text-blue-400 uppercase "> Student : </span>
        <span className='ml-2'> {singleClass?.students}</span>
       </div>
       <div>
       <span className="text-blue-400 uppercase "> Fee : </span>
        <span className='ml-2'> ${singleClass?.price}</span>
       </div>
    </div>
      </div>
    </div>)
    }
      </div>
      <div className="text-center mt-8">
        <Link className="group relative inline-flex border border-secondary focus:outline-none w-full sm:w-auto"
          href="" target="_blank">
          <span className="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-secondary text-center font-bold uppercase  ring-1 ring-secondary  transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">See more <FaArrowRight></FaArrowRight></span>
        </Link>
      </div>
    </div>
  );
};

export default PopularClass;