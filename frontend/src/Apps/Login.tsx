import React from 'react';
import Header from '../components/Generics/Header/Header';
import Footer from '../components/Generics/Footer/Foot';
import Forms from '../components/Login/FormLog/Forms';

export default function Login() {
   return(
      <div className=' overflow-x-hidden'>
         <section className=' absolute top-0 left-0'>
            <Header />
         </section>

         <section className='flex justify-center w-screen pt-32'>
            <h2 className='font-semibold text-3xl text-center text-red-800'>
               Faça o cadastro ou login abaixo
            </h2>
         </section>

         <section className='flex items-center justify-center pt-10 min-h-screen max-h-fit'>
            <Forms />
         </section>

         <section>
            <Footer />
         </section>
      </div>
   );
};



