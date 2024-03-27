import React from 'react';
import Header from '../components/Generics/Header/Header';
import Footer from '../components/Generics/Footer/Foot';
import FormLogin from '../components/Login/FormLogin';

export default function Login() {
   return(
      <div className=' overflow-x-hidden'>
         <section className=' absolute top-0 left-0'>
            <Header />
         </section>

         <section className='flex justify-evenly w-screen pt-32'>
            <h2 className=' text-2xl text-red-800 hover:cursor-pointer hover:underline lg:text-3xl'>
               Cadastro
            </h2>

            <h2 className=' text-2xl text-red-800 hover:underline hover:cursor-pointer lg:text-3xl'>
               Login
            </h2>
         </section>

         <section className='flex justify-center pt-3 max-h-fit'>
            <FormLogin />
         </section>

         <section>
            <Footer />
         </section>
      </div>
   );
};



