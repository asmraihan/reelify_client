import { useContext } from "react";
import InstructorCard from "../../components/Card/InstructorCard";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const Instructors = () => {
    const {user, loading} = useContext(AuthContext)

    const {data: instructors=[]} = useQuery({
    queryKey: ['instructors', user?.email],
    enabled: !loading,
    queryFn: async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/instructors`)
        const data = await res.json()
        return data
    }
    })

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {
              instructors.map((instructor)=>
                  <InstructorCard key={instructor._id} instructor={instructor}/>
  
          )
          }
        
        
        </div>
      </div>  
    
    );
};

export default Instructors;