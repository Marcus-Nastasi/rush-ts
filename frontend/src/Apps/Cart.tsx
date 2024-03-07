import React from 'react';
import Header from '../components/Generics/Header/Header';
import Cards1 from '../components/Home/Cards/Card1';
import Footer from '../components/Generics/Footer/Foot';

export default function Cart() {
   return(
      <>
         <section className='absolute top-0 left-0'>
            <Header />
         </section>

         <Cards1 />

         <Footer />
      </>
   );
};




