import { PriceCardProductProps,PriceCardAmountProps} from "@/types"

const PriceCard = ({product,productPrice,included}:{product:PriceCardProductProps,productPrice:PriceCardAmountProps,included: Array<string>}) => {
    
  
  return (  
    <div className="rounded-t-md">
      <div className="bg-[#1e1e1e] p-2 rounded-t-md">
        <h1 className="text-white text-center font-bold text-[1.7em]">Access The Full Feature</h1>
      </div>
      <div className="py-1 px-2">
        <h3 className="font-medium text-center">{product.name}</h3>
        <p className="font-light text-center">{product.description}</p>
        <div className="mt-4">
          {
            included.map(item=>(
              <div key={item} className="flex flex-wrap items-center justify-center gap-3">
                <i className="bi bi-check2-circle text-green-700"></i>
                <p>{item}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PriceCard