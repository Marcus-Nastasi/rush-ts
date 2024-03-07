import React from "react";
import Card from "../../Generics/Cards/Card";

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
                  <Card 
                     image={'/assets/img/sedas/sabota.png'} 
                     nome={'Seda Bem Bolado Brown King Size Sabotage'}
                     preco={'R$4,90'} 
                  />

                  <Card 
                     image={'/assets/img/sedas/clips.png'} 
                     nome={'COLEÇÃO ISQUEIRO CLIPPER LARGE BEER QUOTES'}
                     preco={'R$48,90'} 
                  />

                  <Card 
                     image={'/assets/img/sedas/bong.png'} 
                     nome={'ICEBONG ABDZ GOLD GD TREE ICE 2 BLACK 18'}
                     preco={'R$589,90'} 
                  />

                  <Card 
                     image={'/assets/img/sedas/pit.png'} 
                     nome={'CX. TIPS PAPELITO MEGA LONGA DUPLA'}
                     preco={'R$168,90'} 
                  />
               </section>
            </section>
         </main>
      </>
   );
};



