import GoogleProvider from "next-auth/providers/google";
import {NextAuthOptions} from "next-auth"

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
            console.log(user,account);
            return true;
        }
    }
}