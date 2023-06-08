import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const UserProfile = () => {
    const { user } = useContext(AuthContext)
   
    return (
        <div className=' w-5/6 mx-auto my-20'>
            {
                user && <div className='lg:flex lg:text-lg font-semibold justify-center items-center gap-5 border-2 shadow-[5px_5px_0px_0px_rgba(109,40,217)] border-emerald-600 p-5 lg:p-16 rounded-lg '>
                    <img className='rounded-md w-[200px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-5' src={user?.photoURL} alt="" />
                   <div className='shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-5 space-y-4'>
                   <h2>Name : {user?.displayName ? user?.displayName : "Not available"}</h2>
                    <h2>Email : {user?.email ? user?.email : "Not available"}</h2>
                    <h2>Joined on : {user?.metadata?.creationTime}</h2>
                    {/* <button className='btn btn-sm mt-2'>Edit</button> */}
                   </div>
                </div>
            }


        </div>


    );
};

export default UserProfile;