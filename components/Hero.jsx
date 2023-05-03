import { ConnectButton } from '@rainbow-me/rainbowkit'
import styles from '../styles/Home.module.css'
import React from "react";
import Image from 'next/image' 
import bitimg from '../styles/bitcoin.png' 
export function Hero() {
  return (
    <div className=" w-full md:h-screen h-full my-auto bg-gray-900 mx-auto ">
      <div className=" px-4 container   mx-auto   ">
        <section className="  py-14    ">
          <div className="py-20 first-line   md:grid-cols-3 grid  gap-28   ">
            <div className="text-white justify-center   xl:text-start lg:text-start md:text-start text-center md:col-span-2">
              <h1 className="  text-white     md:text-[36px] text-[26px] lg:text-[60px] xl:text-[100px] mb-2 font-bold      md:mt-4   md:max-w-4xl font-serif ">
              New-gen of digital currency
              </h1>
              <p className=" m a x-w-xs lg:max-w-6xl xl:max-w-6xl  pt-2 text-sm md:text-2xl mb-6 	 text-white">
              Get started with one of the easiest and most secure platforms for buying, selling, trading, and earning cryptocurrency in one place.
              </p>
              <div className="f lex lg:max-w-sm  md:max-w-sm xl:  mx- auto  first-letter: gap-6 md:grid-cols-2 md:grid xl:grid lg:grid">
        
                
 
      <span className="md:px-6 md:p-3 p-2  max-w-xs  text-center font-bold  md:text-lg rounded-lg text-white border hover:bg-blue-800">Get Started </span>
<span className="mt-1 text-center ">     <ConnectButton /> </span>         </div>
 
            </div>
            <div className="max-w-md "> 
              
               <Image
                    className=" w-[600px] md:w-[800px] md:h-[300px]  p-4 rounded-lg bodder  "
                    src={bitimg}
                    alt=""
                   
                  />
            </div>
          </div>
        </section>

        
    </div>
     
    </div>
  );
}