import { Schema,model,models } from "mongoose";

interface UserSchemaDef{
    username: string;
    email: string;
    profileImage: string;
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
    }
});

const User = models.Users || model("Users",UserSchema);

export default User;