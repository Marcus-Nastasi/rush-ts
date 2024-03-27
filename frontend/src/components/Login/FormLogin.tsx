import React from "react";

export default function FormLogin() {
   return(
      <>
         <section className='flex flex-col w-screen p-1 rounded-2xl border-t-4 border-red-900 bg-gray-50 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12'>
            <section className='p-5'>
               <form action="" className="flex flex-col mb-9">
                  <section className="flex flex-col m-3">
                     <label className="mb-1 text-xl font-normal text-slate-800 lg:text-2xl" htmlFor="mailLogin">
                        e-mail:
                     </label>

                     <input
                        className="p-1.5 rounded-md shadow-lg shadow-slate-400 lg:p-2"
                        type="email" 
                        name="mail" 
                        id="mailLogin" 
                     />
                  </section>

                  <section className="flex flex-col m-3">
                     <label className="mb-1 text-xl font-normal text-slate-800 lg:text-2xl" htmlFor="senhaLogin">
                        senha:
                     </label>

                     <input
                        className="p-1.5 rounded-md shadow-lg shadow-slate-400 lg:p-2"
                        type="password" 
                        name="passLogin" 
                        id="senhaLogin" 
                     />
                  </section>

                  <button
                     className="mt-10 py-2.5 w-11/12 self-center rounded-md font-medium text-md text-slate-100 bg-slate-900 hover:bg-slate-950 md:w-10/12 md:text-lg lg:text-xl lg:w-9/12 lg:py-3" 
                     type="submit"
                  >
                     Entrar
                  </button>
               </form>
            </section>
         </section>
      </>
   );
};


