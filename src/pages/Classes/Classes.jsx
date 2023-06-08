import { useQuery } from "@tanstack/react-query";
import ClassCard from "../../components/Card/ClassCard";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Classes = () => {
    const {user, loading} = useContext(AuthContext)
        const {data: classes=[]} = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/classes`)
            const data = await res.json()
            return data
        }
        })
    return (
    
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {
            classes.map((singleClass)=>
                <ClassCard key={singleClass._id} singleClass={singleClass}/>

        )
        }
      
      
      </div>
    </div>  
       
    );
};

export default Classes;