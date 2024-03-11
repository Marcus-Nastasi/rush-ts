import React from "react";

export default function Forms() {
   return(
      <>
         <section className='flex flex-col w-screen rounded-md'>
            <section className='p-10'>
               <form action="" className="flex flex-col">
                  <h2 className='mb-3 text-center text-3xl font-semibold text-red-800'>
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

                  <section className="flex flex-col m-3">
                     <label className="mb-2 text-2xl font-semibold text-red-800" htmlFor="cpfCadastro">
                        CPF:
                     </label>

                     <input
                        className="p-2 rounded-sm border border-red-600 focus:outline-red-600"
                        type="text" 
                        name="text" 
                        id="cpfCadastro" 
                     />
                  </section>

                  <section className="flex flex-col m-3">
                     <label className="mb-2 text-2xl font-semibold text-red-800" htmlFor="endCadastro">
                        Endereço:
                     </label>

                     <input
                        className="p-2 rounded-sm border border-red-600 focus:outline-red-600"
                        type="text" 
                        name="endereco" 
                        id="endCadastro" 
                     />
                  </section>

                  <section className="flex flex-col m-3">
                     <label className="mb-2 text-2xl font-semibold text-red-800" htmlFor="senhaCadastro">
                        Senha:
                     </label>

                     <input
                        className="p-2 rounded-sm border border-red-600 focus:outline-red-600"
                        type="password" 
                        name="passCadastro" 
                        id="senhaCadastro" 
                     />
                  </section>

                  <button 
                     className="mt-10 py-2 px-5 w-fit self-center rounded-md font-semibold text-slate-100 bg-slate-900" 
                     type="submit"
                  >
                     Cadastrar
                  </button>
               </form>
            </section>

            {/* Cadastro */}
            <div className="self-center w-11/12 h-1 rounded-2xl bg-slate-900">
            </div>
            {/* Login */}

            <section className='p-10'>
               <form action="" className="flex flex-col">
                  <h2 className='mb-3 text-center text-3xl font-semibold text-red-800'>
                     Login
                  </h2>

                  <section className="flex flex-col m-3">
                     <label className="mb-2 text-2xl font-semibold text-red-800" htmlFor="mailLogin">
                        E-mail:
                     </label>

                     <input
                        className="p-2 rounded-sm border border-red-600 focus:outline-red-600"
                        type="email" 
                        name="mail" 
                        id="mailLogin" 
                     />
                  </section>

                  <section className="flex flex-col m-3">
                     <label className="mb-2 text-2xl font-semibold text-red-800" htmlFor="senhaLogin">
                        Senha:
                     </label>

                     <input
                        className="p-2 rounded-sm border border-red-600 focus:outline-red-600"
                        type="password" 
                        name="passLogin" 
                        id="senhaLogin" 
                     />
                  </section>

                  <button 
                     className="mt-10 py-2 px-5 w-fit self-center rounded-md font-semibold text-slate-100 bg-slate-900" 
                     type="submit"
                  >
                     Cadastrar
                  </button>
               </form>
            </section>
         </section>
      </>
   );
};


