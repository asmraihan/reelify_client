import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import CheckOutForm from './CheckoutForm';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const PaymentPage = () => {
    //   const location = useLocation()
    //   const classData = location.pathname.split('/').pop()
    const data = useParams()
    const classId = data.classId
    console.log(classId)

    const { user, loading } = useContext(AuthContext)

    const { data: singleClass = [] } = useQuery({
        queryKey: ['selected', classId],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/select/${classId}`)
            const data = await res.json()
            return data
        }
    })
    console.log(singleClass)

    return (
        <div className='flex justify-center items-center mt-10 lg:mt-28'>
            {/* this payment page for : {classData} */}

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-screen-lg">
                <div className="lg:col-span-2">
                    <h2 className="text-sm font-medium">Payment Method</h2>
                    <div className="bg-neutral/50  rounded mt-4 shadow-lg">
                        <div className="flex items-center px-8 py-5">
                            <input
                                className="appearance-none w-4 h-4 rounded-full border-2 border-neutral  ring-2 ring-blue-600 ring-opacity-100"
                                type="radio"
                            />
                            <label className="text-sm font-medium ml-4">PayPal</label>
                        </div>
                        <div className="border-t border-accent/20">
                            <div className="flex items-center justify-between px-8 py-5">
                                <div className='flex justify-center items-center'>
                                    <input
                                        className="appearance-none w-4 h-4 rounded-full border-2 border-base-100 ring-2 ring-blue-600 ring-opacity-100 bg-blue-600"
                                        type="radio"
                                    />
                                    <label className="text-sm font-medium ml-4">Credit Card</label>
                                </div>
                                <div className="flex">
                                    <img
                                        className="h-10 w-10 object-contain mr-2"
                                        src="https://upload.wikimedia.org/wikipedia/commons/1/16/Former_Visa_%28company%29_logo.svg"
                                        alt="Visa"
                                    />
                                    <img
                                        className="h-10 w-10 object-contain mr-2"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                                        alt="Master card"
                                    />
                                </div>

                            </div>

                            <div className=" px-8 pb-8">
                                <Elements stripe={stripePromise}>
                                    <CheckOutForm singleClass={singleClass}></CheckOutForm>
                                </Elements>

                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h2 className="text-sm font-medium">Purchase Summary</h2>
                    <div className="bg-base-100 rounded mt-4 shadow-lg py-6">

                        <div className="px-8 mt-4">
                            <div className="flex items-end justify-between">
                                <span className="text-sm font-semibold">Tax</span>
                                <span className="text-sm text-gray-500 mb-px">10%</span>
                            </div>
                        </div>
                        <div className="px-8 mt-4 border-t border-accent/20 pt-4">
                            <div className="flex items-end justify-between">
                                <span className="font-semibold">Today you pay (USD)</span>
                                <span className="font-semibold">${singleClass.price}</span>
                            </div>
                            <span className="text-xs text-gray-500 mt-2">
                               Item : {singleClass?.name}
                            </span>
                        </div>
                       
                        <div className="flex flex-col px-8 pt-4">
                           
                            <button className="text-xs text-blue-500 mt-3 underline">
                                Have a coupon code?
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PaymentPage;