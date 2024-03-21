import React, { useState, useEffect, SetStateAction } from 'react';
import Header from '../components/Generics/Header/Header';
import ItensCart from '../components/Cart/itensCart/ItensCart';
import Footer from '../components/Generics/Footer/Foot';

export default function Cart() {
   const [ itens, setItens ] = useState(['']);

   useEffect(() => {
      function getVals() {
         const data = { ...localStorage };
         const keys = Object.keys(data);
         const itens: Array<string> = [];

         for(let i of keys) itens.push(`${i} | ${localStorage.getItem(i)}`);

         return setItens(itens);
      };
      getVals();
   }, []);

   return(
      <div className=' overflow-x-hidden bg-slate-200'>
         <section className='absolute top-0 left-0'>
            <Header />
         </section>

         <section className=' w-screen flex items-center justify-center mt-36'>
            <img className="shadow-lg shadow-slate-800 rounded-xl" src="/assets/arts/later.png" />
         </section>

         <section className='flex justify-center mt-32 w-screen min-h-fit'>

            <section className='w-11/12 h-fit rounded-t-3xl bg-slate-50 border-t-4 border-red-900'>

               <section className='flex justify-evenly items-center p-4'>
                  <h1 className='p-1 text-2xl font-semibold uppercase text-slate-900'>
                     Carrinho
                  </h1>

                  <button type="button" className='text-sm text-red-500 hover:text-red-700 hover:underline'>
                     Limpar carrinho
                  </button>
               </section>

               {itens.map(item => {
                  if(item) {
                     const itemString: string = String(item);
                     const name: string = itemString.split('|')[0];
                     const price: string = itemString.split('|')[1].split('.')[1];
                     const qnt: string = itemString.split('|')[1].split('.')[0];

                     return(
                        <>
                           <ItensCart
                              nome={name}
                              preco={price}
                              qnt={qnt}
                           />
                        </>
                     ); 
                  }
               })}

               <section className='flex justify-evenly w-full h-fit p-4 border-t border-red-900'>
                  <button 
                     type="button" 
                     className='m-1 px-3 py-0.5 text-sm uppercase bg-green-600 text-slate-100'
                  >
                     Adicionar mais itens
                  </button>

                  <button 
                     type="button" 
                     className='m-1 px-3 py-0.5 text-sm uppercase bg-green-700 text-slate-100'
                  >
                     Continuar compra
                  </button>
               </section>
            </section>

         </section>

         <Footer />

      </div>
   );
};




