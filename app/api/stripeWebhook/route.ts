import User from "@/models";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    
    try{
        const data = await req.json();
        const user  = await User.findOne({customerId:data.data.object.customer});
        
        if(!user)
            throw new Error(`Cannot find any user with the customer id of ${data.data.object.customer}`);
        const paymentStatus = data.data.object.payment_status;

        if(paymentStatus==="paid" && user){
            const newUser = await User.findOneAndUpdate({customerId:data.data.object.customer},{payment:{...user.payment,eventId:data.id,paid:true}},{runValidators:true,new:true});
        }

        
    }catch(err){
        console.log(err);
        
    }

    return NextResponse.json({received:true})
    
    //whsec_jA99S54NNZJZCXftnd8pniqRda00lGLi
}