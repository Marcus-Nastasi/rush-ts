import React from "react";

export default function Forms() {
   return(
      <>
         <section className='flex flex-col w-screen rounded-md bg-slate-100'>
            <section className='p-10'>
               <form action="" className="flex flex-col">
                  <h2 className='mb-3 text-center text-3xl font-semibold text-red-700'>
                     Cadastro
                  </h2>

                  <section className="flex flex-col m-3">
                     <label className="mb-2 text-2xl font-semibold text-red-800" htmlFor="nameCadastro">
                        Nome:
                     </label>

                     <input
                        className="p-2 rounded-sm border border-red-600 focus:outline-red-600"
                        type="text" 
                        name="name" 
                        id="nameCadastro" 
                     />
                  </section>

                  <section className="flex flex-col m-3">
                     <label className="mb-2 text-2xl font-semibold text-red-800" htmlFor="mailCadastro">
                        E-mail:
                     </label>

                     <input
                        className="p-2 rounded-sm border border-red-600 focus:outline-red-600"
                        type="email" 
                        name="mail" 
                        id="mailCadastro" 
                     />
                  </section>

                  <button className=" mt-10 px-4 py-2 text-slate-100 bg-slate-900" type="submit">
                     Enviar
                  </button>
               </form>
            </section>
         </section>
      </>
   );
};


