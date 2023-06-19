"use client"
import Image from 'next/image'
import CustomButton from '../components/CustomButton'
import Header from '../components/Header'
import axios from 'axios'
import { useEffect, useState } from 'react'
import PriceCard from '@/components/PriceCard'
import { PriceCardProductProps,PriceCardAmountProps} from "@/types"
import { useSession } from 'next-auth/react'


export default function Home() {
  const {data:session} = useSession();
  console.log(session);

  useEffect(()=>{
    localStorage.setItem('id_token',JSON.stringify(session?.user?.id_token));
  },[session]);  
  
  const [productProperty, setProductProperty] = useState<{product:PriceCardProductProps,productPrice:PriceCardAmountProps}>();

  useEffect(()=>{
    async function getProducts(){
      try{
        const productData = await axios.get('/api/getProducts');
        setProductProperty(productData.data);
        
      }catch(err){
        console.log(err);
      }
    }
    getProducts();
  },[]);
  
  return (
    <main className='min-h-[100vh] bg-[#e7e6e6] flex flex-col'>
        <Header session={session?.user}/>
        <div className="flex-1 flex items-center justify-center ">
          {productProperty && (
            <div className='bg-white shadow-xl'>
              <PriceCard product={productProperty.product} productPrice={productProperty.productPrice} included={["One Time Payment","Premium member","Lifetime"]}/>
              <div className="flex items-center justify-center mx-2 mb-1">
                <CustomButton title='Buy Now' classes='flex items-center justify-center bg-transparent border border-[#1e1e1e] border-2 text-[#1e1e1e] font-medium p-2 cursor-pointer w-full text-center hover:-translate-y-[3px] duration-150'/>
              </div>
            </div>
          )}
        </div>
    </main>
  )
}
