import React, { useState, useEffect } from 'react';
import Header from '../components/Generics/Header/Header';
import Footer from '../components/Generics/Footer/Foot';

export default function Cart() {
   const [ val, setVal ] = useState('0');

   useEffect(() => {
      function getVals() {
         const val = localStorage.getItem('val');

         if(val) return setVal(val);
      };
      getVals();
   });

   function handleVal(e: any) {
      const input = e.target;
      
      setVal(input.value);

      localStorage.setItem('val', input.value);
      return;
   };

   return(
      <div className=' overflow-x-hidden'>
         <section className='absolute top-0 left-0'>
            <Header />
         </section>

         <section className='flex justify-center mt-32 w-screen min-h-screen bg-slate-500'>
            <section className=' w-9/12 h-fit border border-black'>
               <h1 className='p-1'>Carrinho</h1>

               <section className='flex flex-col justify-evenly border-t border-b border-black md:flex-row'>
                  <section className='p-1'>
                     SEDA BEM BOLADO BROWN KING SIZE SABOTAGE   
                  </section>

                  <section className='p-1'>
                     <input type="number" value={val} onChange={handleVal} className='p-1 w-10' />
                  </section>

                  <section className='p-1'>
                     R$4,50
                  </section>
               </section>
            </section>
         </section>

         <Footer />
      </div>
   );
};




