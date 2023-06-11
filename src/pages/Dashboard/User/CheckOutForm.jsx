import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import './CheckOutForm.css'
import { useState } from 'react';
import { useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext } from 'react';
import { set } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const CheckOutForm = ({ singleClass }) => {

    console.log('singleClass', singleClass)
    const price = parseFloat(singleClass.price)
    console.log('price check', price)
    const navigate = useNavigate()
    const stripe = useStripe()
    const elements = useElements()
    const {user} = useContext(AuthContext)
    const [cardError, setCardError] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')


    useEffect(() => {
         if(price > 0){
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log('res', res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
        }
    }, [price,axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        // console.log('card',card)
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error)
            setCardError(error.message)
        } else {
            // console.log('paymentMethod', paymentMethod)
            setCardError('')
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );
        if (confirmError) {
            console.log('confirmError', confirmError)
            cardError(confirmError.message);
        }
        console.log('paymentIntent', paymentIntent)
        setProcessing(false)
        if(paymentIntent.status === 'succeeded'){
            setTransactionId(paymentIntent.id)
            //save payment info to database
            const payment = {
                user: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                classId: singleClass.classId,
                classTitle: singleClass.name,
            }
            axiosSecure.post('/payments', payment)
                .then(res=>{
                    console.log(res.data.insetResult.insertedId)
                    if(res.data.insetResult.insertedId){
                        toast.success('Payment successful')
                        navigate('/dashboard/selected-classes')
                    }
                })
        }

    }





    return (
        <>
            <form className='w-full flex flex-col ' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='flex items-center justify-center bg-blue-600 text-sm font-medium h-10 rounded text-blue-50 hover:bg-blue-700 w-1/2' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Confirm
                </button>
            </form>
            {cardError && <p className='text-red-500 text-sm mt-2'>{cardError}</p>}
            {transactionId && <p className='text-green-500 text-sm mt-2'>Transaction complete: {transactionId}</p>}
        </>
    );
};

export default CheckOutForm;