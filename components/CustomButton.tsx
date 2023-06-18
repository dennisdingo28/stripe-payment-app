import { CustomButtonProps } from "@/types"
import Image from "next/image";

const CustomButton = ({title,classes,icon,disabled,handleClick}: CustomButtonProps) => {
  return (
    <button onClick={handleClick} className={classes} disabled={disabled}>
        {icon && (
            <span>
              <Image src={icon} width={20} height={20} alt="google"/>
            </span>
        )
        }
        {title}
    </button>
  )
}

export default CustomButton