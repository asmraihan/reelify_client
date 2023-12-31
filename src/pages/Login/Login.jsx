import React, { useContext, useState } from 'react';
import SocialLogin from '../../components/Shared/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';


const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const { signIn } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        signIn(data.email, data.password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
            toast.success(`Welcome ${loggedUser.email}`)
            navigate(from, {replace: true})
        })
        .catch(error=>{ /* TODO */
            toast.error(error.message)
        }   
        )
    }
   
    const [showPassword, setShowPassword] = useState(false)
    console.log(showPassword)

    return (
        <div className="relative">
            <img
                src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-opacity-75 bg-emerald-700">
                <svg
                    className="absolute inset-x-0 -bottom-1 text-base-100"
                    viewBox="0 0 1160 163"
                >
                    <path
                        fill="currentColor"
                        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                    />
                </svg>
                <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                            Camps are filling fast, <br className="hidden md:block" />
                                 enroll today!
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                            Week long Spring and Summer camp activities range from production planning, location scouting, hands on tech and gear tutorials, introduction to industry standards, screenwriting, project management, editing and so much more. 
                            </p>
                            <Link
                                to="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-white hover:text-blue-500"
                            >
                                Learn more
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </Link>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-neutral rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Sign in now
                                </h3>

                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            placeholder="Your Email Address"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-base-100/80 border border-accent/50 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="email"
                                            {...register("email")}
                                        />
                                    </div>

                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="password"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Password
                                        </label>
                                        <input
                                            placeholder="*********"
                                            required
                                            type={showPassword ? "text" : "password"}
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-base-100/80 border border-accent/50 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            name="password"
                                            {...register("password")}
                                        />
                                       <div className='flex justify-between items-center my-2'> <p>Show password</p>
                                        <input onChange={()=>setShowPassword(!showPassword)} type="checkbox" checked={showPassword ? 'checked' : ''} className="checkbox" /></div>
                                    </div>

                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-secondary hover:bg-info focus:shadow-outline focus:outline-none"
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                    <p className="text-xs text-accent/80 sm:text-sm text-center">
                                        Don’t have an account? <Link to='/signup'>Create an account</Link>
                                    </p>
                                </form>
                                <SocialLogin></SocialLogin>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;