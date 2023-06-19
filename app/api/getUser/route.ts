import { NextRequest, NextResponse } from "next/server";
import User from "@/models";

export async function POST(req:NextRequest){
    const props = await req.json();
    
    try{
        const user = await User.findOne({name:props.username,email:props.email});
        if(user){
            return NextResponse.json(user);
        }
        throw new Error('Cannot find any user');
    }catch(err){
        
    }
}