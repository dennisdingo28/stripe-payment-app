import CustomButton from "./CustomButton"
import {signIn,signOut} from "next-auth/react";


const Header = () => {
  return (
    <div className="flex justify-end items-center p-2">
        <CustomButton title="Login with Google" icon="/google.png" handleClick={()=>signIn('google')} classes='bg-white p-2 rounded-sm flex items-center justify-between gap-2 duration-100 hover:shadow-[0px_0px_0px_2px_rgba(0,0,0,.1)] cursor-pointer'/>
    </div>
  )
}

export default Header