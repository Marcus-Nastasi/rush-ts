import React, { useState, useEffect } from "react";

export default function Card({ image, nome, preco }) {
   const [ popUp, setPopUp ] = useState('hidden');
   var item: string = `${1}.${preco}`;

   function setItemsToStorage(): void {
      localStorage.setItem(nome, item);
      return popUpItemAdded();
   }

   function popUpItemAdded() {
      setPopUp('');
      setTimeout(() => setPopUp('hidden'), 3000);
      return;
   };

   return(
      <>
         <div className="flex justify-center items-center w-screen h-20 fixed top-28 right-0.5">
            <section 
               className={`${popUp} w-8/12 h-16 flex items-center justify-center rounded-lg bg-green-300 md:w-6/12 lg:w-5/12`}
            >
               <p className="text-xl">Item adicionado!</p>
            </section>
         </div>

         <section className="flex flex-col items-center p-4 rounded-2xl">
            <section className="py-5">
               <img
                  onClick={setItemsToStorage}
                  className="rounded-3xl transition-all ease-in-out duration-500 hover:shadow-xl hover:shadow-slate-300 hover:cursor-pointer" 
                  src={image} 
               />
            </section>

            <section className="flex flex-col items-center text-center">
               <p
                  onClick={setItemsToStorage}
                  className="text-lg uppercase hover:text-red-800 cursor-pointer">
                  {nome}
               </p>

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



