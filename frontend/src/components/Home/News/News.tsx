import React from 'react';

export default function News() {
   return(
      <>
      <section className="p-5 mt-10">

         <section className="md:flex md:justify-center">

            <form action="" className="text-slate-50 bg-slate-900 rounded-xl shadow-2xl shadow-black md:w-4/6">

               <section className="p-3 text-center">
                  <h3 className="text-2xl uppercase">Receba novidades!</h3>
               </section>

               <section className="flex flex-col p-3 lg:flex-row lg:items-center lg:justify-center">
                  <label className="" htmlFor="newsNome">NOME:</label>
                  <input className="m-2 p-2 text-black rounded-lg shadow-2xl shadow-black md:mr-5" type="text" name="nome" id="newsNome" />

                  <label className="" htmlFor="newsMail">EMAIL:</label>
                  <input className="m-2 p-2 text-black rounded-lg shadow-2xl shadow-black md:mr-5" type="email" name="mail" id="newsMail" />

                  <button
                     className="w-fit self-center m-3 px-8 py-2 rounded-md bg-slate-600" 
                     type="submit">
                        Enviar
                  </button>
               </section>

            </form>

         </section>

      </section>

      </>
   );
};

