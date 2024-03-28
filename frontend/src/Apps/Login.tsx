import React, { useState, useEffect } from 'react';
import Header from '../components/Generics/Header/Header';
import Footer from '../components/Generics/Footer/Foot';
import FormLogin from '../components/Login/FormLogin';
import FormCadastro from '../components/Login/FormCadastro';

export default function Login() {
   const [ cadOrLog, setCadOrLog ] = useState(true);
   const [ underlineLog, setUnderlineLog ] = useState('');
   const [ underlineCad, setUnderlineCad ] = useState('underline');

   function handleWichForm(e: any) {
      if(e.target.innerText == 'Login') {
         setCadOrLog(false);
         setUnderlineCad('');
         setUnderlineLog('underline');

         return;
      }

      setCadOrLog(true);
      setUnderlineLog('');
      setUnderlineCad('underline');

      return;
   };

   return(
      <div className='overflow-x-hidden'>
         <section className=' absolute top-0 left-0'>
            <Header />
         </section>

         <div className='flex items-center justify-center'>
            <section className='flex justify-evenly w-screen pt-32 lg:w-9/12'>
               <h2
                  onClick={handleWichForm}
                  className={`${underlineCad} text-2xl text-red-800 hover:cursor-pointer hover:underline lg:text-3xl`}
               >
                  Cadastro
               </h2>

               <h2 
                  onClick={handleWichForm} 
                  className={`${underlineLog} text-2xl text-red-800 hover:cursor-pointer hover:underline lg:text-3xl`}
               >
                  Login
               </h2>
            </section>
         </div>

         <section className='flex justify-center pt-3 max-h-fit'>
            {cadOrLog ? <FormCadastro /> : <FormLogin />}
         </section>

         <section>
            <Footer />
         </section>
      </div>
   );
};



