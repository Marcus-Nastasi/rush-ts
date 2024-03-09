import React from "react";

export default function Forms() {
   return(
      <>
         <section className='flex flex-col pt-24'>

            <section className='p-10'>
               <form action="">
                  <h2 className='text-center text-3xl'>Cadastro</h2>
                  <label htmlFor="nameCadastro">Nome:</label>
                  <input type="text" name="name" id="nameCadastro" />

                  <label htmlFor="mailCadastro">E-mail:</label>
                  <input type="email" name="mail" id="mailCadastro" />

                  <button type="submit">Enviar</button>
               </form>
            </section>

            <section className='p-10'>
               <form action="">
                  <h2 className='text-center text-3xl'>Login</h2>
                  <label htmlFor="nameLogin">Nome:</label>
                  <input type="text" name="name" id="nameLogin" />

                  <label htmlFor="mailLogin">E-mail:</label>
                  <input type="email" name="mail" id="mailLogin" />

                  <button type="submit">Enviar</button>
               </form>
            </section>

         </section>
      </>
   );
};


