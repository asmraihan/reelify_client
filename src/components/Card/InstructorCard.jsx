import { FaArrowRight } from "react-icons/fa";

const InstructorCard = () => {
    return (
        <div className="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
        <div
          className="relative z-10"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))"
          }}
        >
          <img
            className="w-full"
            src="https://randomuser.me/api/portraits/women/40.jpg"
            alt="Profile image"
          />
          <div className="text-center absolute w-full" style={{ bottom: "4rem" }}>
            <p className="text-white tracking-wide uppercase text-lg font-bold">
              John Doe
            </p>
          </div>
        </div>
        <div className="relative flex justify-between items-center flex-row px-6 z-50 -mt-10">
          <p className="flex items-center text-gray-400">
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2" />
              INSTRUCTOR
          </p>
          <button className="p-4 bg-red-600 rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none">
            <FaArrowRight></FaArrowRight>
          </button>
        </div>
        <div className="pt-6 pb-8 text-gray-600 pl-7 space-y-2">
          <p>Fullstack Developer </p>
          <p>Fullstack Developer </p>
          <p>Fullstack Developer </p>
          <p>Fullstack Developer </p>
        </div>
        
      </div>
    );
};

export default InstructorCard;