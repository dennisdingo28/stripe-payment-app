import Stripe from "stripe";

export async function createCustomer(name:string,email:string){
    try{
        if(process.env.STRIPE_SECRET_KEY){
            const stripe = new Stripe(process.env.STRIPE_SECRET_KEY,{
                apiVersion:'2022-11-15',
            });
            const newCustomer = await stripe.customers.create({
                name,email
            });

            console.log("customer",newCustomer);
            return newCustomer;
        }
        
    }catch(err){
        console.log(err);
    }
}