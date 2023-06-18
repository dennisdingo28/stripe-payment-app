import Stripe from "stripe";
import { NextRequest,NextResponse } from "next/server";

export async function GET(req:NextRequest){
    try{
        const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
        if(stripeSecretKey){
            const stripe = new Stripe(stripeSecretKey,{
                apiVersion:"2022-11-15"
            });

            const products = await stripe.products.list({
                limit:1,
            })

            const targetProduct = products.data[0];

            const targetProductPrice = await stripe.prices.retrieve(targetProduct.default_price as string);
            
            return NextResponse.json({product:products.data[0],productPrice:targetProductPrice});
        }
        
    }catch(err){
        console.log(err);   
    }
}