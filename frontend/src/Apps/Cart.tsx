import React, { useState, useEffect } from 'react';
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

         for(let i of keys) itens.push(`${i}|${localStorage.getItem(i)}`);

         return setItens(itens);
      };
      getVals();
   }, []);

   function handleClearStorage(): void {
      var msg: boolean = confirm("Você tem certeza de que deseja apagar todos os itens do carrinho?");
      if(msg) {
         localStorage.clear();
         window.open('/cart', '_self');
         return;
      }

      return;
   };

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

               <section className='flex justify-center'>
                  <section className='flex justify-between items-center self-center w-11/12 p-4'>
                     <h1 className='p-1 text-2xl font-semibold uppercase text-slate-900 md:text-3xl lg:text-4xl'>
                        Carrinho
                     </h1>

                     <button
                        onClick={handleClearStorage} 
                        type="button" 
                        className='text-sm text-red-500 hover:text-red-700 hover:underline'>
                        Limpar carrinho
                     </button>
                  </section>
               </section>

               <section className=''>
                  {itens.map(item => {
                     if(item) {
                        const [ name, price, qnt ]: string[] = [
                           item.split('|')[0], 
                           item.split('|')[1].split('.')[1], 
                           item.split('|')[1].split('.')[0]
                        ];

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

                     return(
                        <div>
                           Adicione itens ao carrinho para continuar a compra.
                        </div>
                     );
                  })}
               </section>

               <section className='flex justify-evenly w-full h-fit p-4 border-t border-red-900'>
                  <button 
                     type="button" 
                     className='m-1 px-3 py-1 text-sm uppercase rounded-md bg-green-600 text-slate-100 md:py-1.5 hover:bg-green-700'
                  >
                     <a href="/">
                        Adicionar mais itens
                     </a>
                  </button>

                  <button 
                     type="button" 
                     className='m-1 px-3 py-1 text-sm uppercase rounded-md bg-green-700 text-slate-100 md:py-1.5 hover:bg-green-600'
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




