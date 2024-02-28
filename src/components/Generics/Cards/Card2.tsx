export default function Card2() {
   return(
      <>
      <main className="h-fit mt-20 overflow-x-hidden">
         
         <section className="flex flex-col items-center p-7">

            <section className="flex justify-center w-screen">

               <section className="">
                  <h2 className="text-3xl">Mais vendidos</h2>
               </section>

            </section>

            <section className="md:flex md:flex-row">

               <section className="flex flex-col items-center p-4 rounded-2xl">

                  <section className="py-5">
                     <img className="rounded-3xl transition-all ease-in-out duration-500 hover:shadow-xl hover:shadow-slate-300 hover:cursor-pointer" src="/assets/img/sedas/sabota.png" />
                  </section>

                  <section className="flex flex-col items-center text-center">
                     <a className="text-lg uppercase hover:text-red-800" href="">
                        Seda Bem Bolado Brown King Size Sabotage
                     </a>

                     <h4 className="font-semibold text-2xl mt-4 text-slate-800">
                        R$4,90
                     </h4>

                     <button className="flex uppercase p-2 mt-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800">

                        <span className="mr-2">
                           comprar
                        </span>
                        
                        <img className="w-5" src="/assets/img/icons/compras.png" />

                     </button>
                  </section>

               </section>

               {/*  */}

               <section className="flex flex-col items-center p-4 rounded-2xl">

                  <section className="py-5">
                     <img className="rounded-3xl  transition-all ease-in-out duration-500 hover:shadow-xl hover:shadow-slate-300 hover:cursor-pointer" src="/assets/img/sedas/clips.png" />
                  </section>

                  <section className="flex flex-col items-center text-center">
                     <a className="text-lg uppercase hover:text-red-800" href="">
                        COLEÇÃO ISQUEIRO CLIPPER LARGE BEER QUOTES
                     </a>

                     <h4 className="font-semibold text-2xl mt-4 text-slate-800">
                        R$48,90
                     </h4>

                     <button className="flex uppercase p-2 mt-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800">

                        <span className="mr-2">
                           comprar
                        </span>
                        
                        <img className="w-5" src="/assets/img/icons/compras.png" />

                     </button>
                  </section>

               </section>

               {/*  */}

               <section className="flex flex-col items-center p-4 rounded-2xl">

                  <section className="py-5">
                     <img className="rounded-3xl transition-all ease-in-out duration-500 hover:shadow-xl hover:shadow-slate-300 hover:cursor-pointer" src="/assets/img/sedas/bong.png" />
                  </section>

                  <section className="flex flex-col items-center text-center">
                     <a className="text-lg uppercase hover:text-red-800" href="">
                        ICEBONG ABDZ GOLD GD TREE ICE 2 BLACK 18
                     </a>

                     <h4 className="font-semibold text-2xl mt-4 text-slate-800">
                        R$589,90
                     </h4>

                     <button className="flex uppercase p-2 mt-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800">

                        <span className="mr-2">
                           comprar
                        </span>
                        
                        <img className="w-5" src="/assets/img/icons/compras.png" />

                     </button>
                  </section>

               </section>

               {/*  */}

               <section className="flex flex-col items-center p-4 rounded-2xl">

                  <section className="py-5">
                     <img className="rounded-3xl transition-all ease-in-out duration-500 hover:shadow-xl hover:shadow-slate-300 hover:cursor-pointer" src="/assets/img/sedas/pit.png" />
                  </section>

                  <section className="flex flex-col items-center text-center">
                     <a className="text-lg uppercase hover:text-red-800" href="">
                        CX. TIPS PAPELITO MEGA LONGA DUPLA
                     </a>

                     <h4 className="font-semibold text-2xl mt-4 text-slate-800">
                        R$168,90
                     </h4>

                     <button className="flex uppercase p-2 mt-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800">

                        <span className="mr-2">
                           comprar
                        </span>
                        
                        <img className="w-5" src="/assets/img/icons/compras.png" />

                     </button>
                  </section>

               </section>

            </section>

         </section>

      </main>
      </>
   );
}