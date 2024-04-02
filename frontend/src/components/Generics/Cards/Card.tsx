import React, { useState, useEffect } from "react";

export default function Card({ image, nome, preco }) {
   const item: string = `${1}.${preco}`;

   function setItemsToStorage(e: any): void {
      localStorage.setItem(nome, item);
      return;
   };

   return(
      <>
         <section className="flex flex-col items-center p-4 rounded-2xl">
            <section className="py-5">
               <img 
                  className="rounded-3xl transition-all ease-in-out duration-500 hover:shadow-xl hover:shadow-slate-300 hover:cursor-pointer" 
                  src={image} 
               />
            </section>

            <section className="flex flex-col items-center text-center">
               <a className="text-lg uppercase hover:text-red-800" href="">
                  {nome}
               </a>

               <h4 className="font-semibold text-2xl mt-4 text-slate-800">
                  {preco}
               </h4>

               <button
                  onClick={setItemsToStorage} 
                  className="flex uppercase p-2 mt-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800"
               >
                  <span className="mr-2">
                     comprar
                  </span>
                  
                  <img className="w-5" src="/assets/img/icons/compras.png" />
               </button>
            </section>
         </section>
      </>
   );
};

