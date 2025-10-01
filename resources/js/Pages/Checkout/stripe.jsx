import { Head } from '@inertiajs/react';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: route('payment.stripe.callback'),
            },
        });

        if (error) {
            setMessage(error.message ?? 'An unexpected error occurred');
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md rounded border bg-white p-4 shadow">
            <PaymentElement />
            {message && <div className="mt-2 text-danger">{message}</div>}
            <button type="submit" disabled={loading || !stripe || !elements} className="mt-4 w-100 btn btn-danger">
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
            <p className="text-center mt-2">Powered by Stripe</p>
        </form>
    );
};

const StripePage = ({ clientSecret, publicKey }) => {
    const stripePromise = loadStripe(publicKey);
    const options = { clientSecret };

    return (
        <>
            <Head title="Stripe Payment" />
            <div className="d-flex min-vh-100 align-items-center justify-content-center bg-light">
                {clientSecret ? (
                    <Elements stripe={stripePromise} options={options}>
                        <CheckoutForm />
                    </Elements>
                ) : (
                    <p className="text-center">Missing payment details.</p>
                )}
            </div>
        </>
    );
};

export default StripePage;
