import React from 'react';
import Header from '../components/Generics/Header/Header';
import Footer from '../components/Generics/Footer/Foot';
import Forms from '../components/Login/Forms/Forms';

export default function Login() {
   return(
      <>
         <section className=' absolute top-0 left-0'>
            <Header />
         </section>

         <section className='bg-slate-400 min-h-screen max-h-fit'>
            <Forms />
         </section>

         <section>
            <Footer />
         </section>
      </>
   );
};



