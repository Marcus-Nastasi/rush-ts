import React from 'react';
import Header from '../components/Generics/Header/Header';
import Footer from '../components/Generics/Footer/Foot';
import Forms from '../components/Login/FormLog/Forms';

export default function Login() {
   return(
      <div>
         <section className=' absolute top-0 left-0'>
            <Header />
         </section>

         <section className='flex items-center justify-center pt-32 min-h-screen max-h-fit'>
            <Forms />
         </section>

         <section>
            <Footer />
         </section>
      </div>
   );
};



