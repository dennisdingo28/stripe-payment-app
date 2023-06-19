import CustomButton from "./CustomButton"
import {signIn,signOut} from "next-auth/react";
import Image from "next/image";

import { LoggedUser } from "@/types";

const Header = ({session}:LoggedUser) => {
  
  if(session && session.name && session.id_token){
    return (
      <div className="flex justify-end items-center p-2 gap-2">
        <Image src={`${session.image}`} alt="profile image" className="rounded-full" width={30} height={30}/>
        <p>{session.name}</p>
        <CustomButton title="sign out" classes="bg-black text-white font-bold p-2 rounded-full" handleClick={()=>signOut()}/>

      </div>
    )
  }
  return(   
    <div className="flex justify-end items-center p-2">
      <CustomButton title="Login with Google" icon="/google.png" handleClick={()=>signIn('google')} classes='bg-white p-2 rounded-sm flex items-center justify-between gap-2 duration-100 hover:shadow-[0px_0px_0px_2px_rgba(0,0,0,.1)] cursor-pointer'/>
    </div>
  )
}

export default Header