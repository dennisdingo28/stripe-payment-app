import { DefaultSession } from "next-auth";

declare module "next-auth"{
    interface User{
        id_token:string;
    }
    interface Session extends DefaultSession{
        user?:User;
    }
}