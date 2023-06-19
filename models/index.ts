import { Schema,model,models } from "mongoose";
import { Payment } from "@/types";

interface UserSchemaDef{
    username: string;
    email: string;
    profileImage: string;
    payment : Payment;
}

const UserSchema = new Schema<UserSchemaDef>({
    username:{
        type:String,
        required:[true,"You must provide an username"],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"You must provide an email"],
        unique:true,
    },
    profileImage:{
        type:String,
        required:[true,"You must provide a profile image"],
    },
    payment:{
        customerId:{
            type:String,
            required:[true,"You must provide the customer id"] as [true, string],
            unique:true,
        },
        sessionId:{
            type:String,
            unique:true,
        },
       paid:{
        type:Boolean,
        default:false,
       }
    }
});

const User = models.User || model("User",UserSchema);

export default User;