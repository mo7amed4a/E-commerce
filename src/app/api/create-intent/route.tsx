import { NextResponse } from "next/server";
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
    typescript: true,
    apiVersion: "2023-08-16"
})

export async function POST(request: any) {
    const data = await request.json();
    const amount = data.amount;
    try {
        const paymentElement = await stripe.paymentIntents.create({
            amount: Number(amount) * 100,
            currency: 'USD'
        })
        return NextResponse.json(paymentElement.client_secret, {status: 200})
    } catch (error: any) {
        return new NextResponse(error, {
            status: 400
        })
    }
}