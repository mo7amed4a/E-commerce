'use client'
import {Elements} from '@stripe/react-stripe-js';
import {Stripe, StripeElementsOptions, loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './_components/CheckoutForm';

const stripePromise : Promise<Stripe | null> = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export default function App() {
  const options : StripeElementsOptions = {
    mode: 'payment',
    currency: 'usd',
    amount: 100
  };

  return (
    <div className='container-m min-h-[60vh] flex items-center justify-center'>
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
        </Elements>
    </div>
  );
};