import React from "react";

export default function FormCadastro() {
   return(
      <section className='p-10 lg:w-2/6'>
         <form action="" className="flex flex-col">
            <h2 className='mb-3 underline text-center text-3xl font-semibold text-red-800'>
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
               <label className="mb-2 text-2xl font-semibold text-red-800" htmlFor="nascimento">
                  Data de nascimento:
               </label>

               <input
                  className="p-2 rounded-sm border border-red-600 focus:outline-red-600"
                  type="date" 
                  name="nascimento" 
                  id="nascimento" 
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

            <section className="flex flex-col m-3">
               <label className="mb-2 text-2xl font-semibold text-red-800" htmlFor="senhaCadastro">
                  Confirmar senha:
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
   );
};

