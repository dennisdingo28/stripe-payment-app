import GoogleProvider from "next-auth/providers/google";
import {NextAuthOptions} from "next-auth";
import connectDB from "./connectDb";
import User from "@/models";

function getGoogleCredintials(){
    
        const googleClientId = process.env.GOOGLE_CLIENTID;
        const googleClientSecret = process.env.GOOGLE_CLIENTSECRET;
    
        if(!googleClientId || googleClientId.trim()===''){
            throw new Error("Google client id must not be blank");
        }
        if(!googleClientSecret || googleClientSecret.trim()==='')
            throw new Error("Google client secret must not be blank");

    
        return {googleClientId,googleClientSecret};

}

export const authOptions: NextAuthOptions = {
    providers:[
        GoogleProvider({
            clientId:getGoogleCredintials().googleClientId,
            clientSecret:getGoogleCredintials().googleClientSecret,
        })
    ],
    callbacks:{
        async signIn({user,account}){
            try{
                if(process.env.MONGO_URI){
                    await connectDB(process.env.MONGO_URI);
                    const existingUser = await User.findOne({username:user.name,email:user.email});

                    if(!existingUser){
                        const newUser = await User.create({username:user.name,email:user.email,profileImage:user.image});
                    }
                }

            }catch(err){
                console.log(err);
            }
           return true;
        },
        async jwt({user,token,account}){
            console.log(account);
            if(user && account)
                token.id_token=account?.id_token;
            console.log(token);
            
            return token;
        },
        async session({session,token,user}){
            if(session && session?.user)
                session.user.id_token=String(token.id_token);
            
            return session;
        }
    }
}