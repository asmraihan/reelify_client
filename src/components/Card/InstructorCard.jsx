import { FaArrowRight } from "react-icons/fa";
import { TbMail } from "react-icons/tb";

const InstructorCard = ({instructor}) => {
    console.log(instructor)
    return (
        <div className="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-neutral">
        <div
          className="relative z-10"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))"
          }}
        >
          <img
            className="w-full"
            src={instructor?.photo}
            alt="Profile image"
          />
          <div className="text-center absolute w-full" style={{ bottom: "4rem" }}>
            <p className="text-white tracking-wide uppercase text-lg font-bold">
            {instructor.name} 
            </p>
          </div>
        </div>
        <div className="relative flex justify-between items-center flex-row px-6 z-50 -mt-10">
          <p className="flex items-center text-gray-400">
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2" />
              INSTRUCTOR
          </p>
          <button className="p-4 bg-red-600 rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none">
            <TbMail className="text-white" size={20}></TbMail>
          </button>
        </div>
        <div className="pt-6 pb-8 text-accent pl-7 space-y-2">
          <p>Name : {instructor.name} </p>
          <p>Email : {instructor.email}  </p>
        
        </div>
        
      </div>
    );
};

export default InstructorCard;