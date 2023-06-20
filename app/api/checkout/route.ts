import User from "@/models";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req:NextRequest){
    try{
        const props = await req.json();
        
        const dataObject = await axios.get('http://localhost:3000/api/getProducts');

        const data = dataObject.data;
        if(process.env.STRIPE_SECRET_KEY){
            const stripe = new Stripe(process.env.STRIPE_SECRET_KEY,{
                apiVersion:"2022-11-15",
            });
            const user = await axios.post('http://localhost:3000/api/getUser',props);
            
            const session = await stripe.checkout.sessions.create({
                line_items:[{
                    price:data.product.default_price,
                    quantity:1,
                    
                }],
                mode:"payment",
                payment_method_types:["card"],
                customer:user.data.payment.customerId,
              
                success_url:"http://localhost:3000/dashboard",
                cancel_url:"http://localhost:3000/dashboard"
            });
            return NextResponse.json({url:session.url,ok:true});
            
        }
     
        
    }catch(err){
        console.log(err);
    }
}