
import { useForm } from 'react-hook-form';
import SocialLogin from '../../components/Shared/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { saveUser } from '../../api/auth';

const SignUp = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
            updateUserProfile(data.name, data.photo)
            .then(()=>{
                console.log('user updated')
                reset()
                toast.success('Profile Created successfully')
                // save user to db
                saveUser(loggedUser)
                navigate('/')
            })
            .catch(err=>{
                console.log(err)
            })
        })
    }
 


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
            
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-neutral rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Sign up for updates
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="name"
                        className="inline-block mb-1 font-medium"
                      >
                        Name
                      </label>
                      <input
                        placeholder="Your Name"
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-base-100/80 border border-accent/50 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="firstName"
                        name="name"
                        {...register("name", { required: true })} 
                      />
                       {errors.name && <span className='text-red-600'>Name is required</span>}
                    </div>
                
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        E-mail
                      </label>
                      <input
                        placeholder="Your Email Address"
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-base-100/80 border  border-accent/50 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                        {...register("email", { required: true })} 
                        />
                         {errors.email && <span className='text-red-600'>Email is required</span>}
                    </div>

                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="password"
                        className="inline-block mb-1 font-medium"
                      >
                        Password
                      </label>
                      <input
                        placeholder="**********"
                        type="password"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-base-100/80 border  border-accent/50 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                        {...register("password",{ required: true, minLength: 6 ,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z]).{6,}/ })} 
                        />
                      {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                      {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be at least 6 character</p>}
                      {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must have one upper case and one special character</p>}
                    </div>

                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="confirm_password"
                        className="inline-block mb-1 font-medium"
                      >
                        Confirm Password
                      </label>
                      <input
                        placeholder="**********"
                        type="password"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-base-100/80 border  border-accent/50 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="confirm_password"
                        name="confirm_password"
                        // validate confirm_password
                        {...register("confirm_password", { required: true, validate: (value) => {
                            if (watch('password') != value) {
                              return "Password did not match";
                            }
                          },
                         })} 
                        />
                           {errors.confirm_password?.type === 'validate' && <p className='text-red-600'>Password did not match</p>}
                    </div>

                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="photo"
                        className="inline-block mb-1 font-medium"
                      >
                       Photo URL
                      </label>
                      <input
                        placeholder="Link of PhotoURL"
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-base-100/80 border  border-accent/50 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="photo"
                        name="photo"
                        {...register("photo")}
                      />
                    </div>

                    
                    <div className="mt-4 mb-2 sm:mb-4">
                      <input
                        type="submit"
                        value="Sign Up"
                        className="inline-flex cursor-pointer items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-accent transition duration-200 rounded shadow-md bg-secondary hover:bg-info focus:shadow-outline focus:outline-none"
                      >
                        
                      </input>
                    </div>
                    <p className="text-xs text-accent/80 sm:text-sm text-center">
                    Already have an account? <Link to='/login'>Please Login</Link>
                    </p>
                  </form>
                  <SocialLogin></SocialLogin>
                </div>
              </div>
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  The quick, brown fox <br className="hidden md:block" />
                  jumps over a lazy dog
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                  quae.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;