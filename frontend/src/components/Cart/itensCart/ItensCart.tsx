import React, { useEffect, useState } from "react";

export default function ItensCart({ nome, preco }) {
   const [ val, setVal ] = useState('0');

   useEffect(() => {
      function getVals() {
         const val = localStorage.getItem('quantidade');

         if(val) return setVal(val);
      };
      getVals();
   });

   function handleVal(e: any) {
      const valor = e.target.value; 

      setVal(valor);

      return localStorage.setItem('quantidade', valor);
   };

   return(
      <>
         <section className='flex flex-col justify-evenly py-10 border-t-2 border-black md:flex-row'>
            <section className='p-1'>
               {nome}
            </section>

            <section className='p-1'>
               <input 
                  type="number" 
                  value={val} 
                  onChange={handleVal} 
                  className='mx-3 w-10 border border-black' 
               />
            </section>

            <section className='p-1'>
               {preco}
            </section>
         </section>
      </>
   );
};



