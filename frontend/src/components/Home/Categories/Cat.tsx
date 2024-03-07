import React from 'react';

export default function Cat() {
   return(
      <>
      <section className="mt-20 p-3">

         <section className="text-center pb-10">

            <h2 className="text-3xl">
               Categorias
            </h2>

         </section>

         <section className="md:flex md:flex-wrap md:justify-evenly">

            <section className="flex mb-5 h-96 md:my-5 md:w-96 hover:cursor-pointer">

               <section id="catOne" className="flex items-center justify-center h-full w-full rounded-xl">
                  <p className=" text-white text-center text-4xl font-bold">Monte seu Kit</p>
               </section>
               
            </section>

            <section id="catTwo" className="flex justify-center items-center my-5 h-96 rounded-xl md:w-96 hover:cursor-pointer">

               <p className=" text-white text-center text-4xl font-bold">Headshop</p>

            </section>

            <section id="catThre" className="flex justify-center items-center my-5 h-96 rounded-xl md:w-96 hover:cursor-pointer">

               <p className=" text-white text-center text-4xl font-bold">Kits Prontos</p>

            </section>

            <section id="catFuor" className="flex justify-center items-center my-5 h-96 rounded-xl md:w-96 hover:cursor-pointer">

               <p className=" text-white text-center text-4xl font-bold">Outlet</p>

            </section>

         </section>

      </section>

      </>
   );
};

