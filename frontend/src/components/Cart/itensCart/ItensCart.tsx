import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";

export default function ItensCart({ nome, preco }) {
   const [ quantity, setQauntity ] = useState('0');

   useEffect(() => {
      function getVals() {
         const val = localStorage.getItem(nome);

         const quantity = (val?.split('.')[0]);

         return (val ? setQauntity(String(quantity)) : 0);
      };
      getVals();
   });

   function handleVal(e: any) {
      const valor = e.target.value;

      const data = `${valor}.${preco}`;

      setQauntity(valor);

      return localStorage.setItem(nome, data);
   };

   return(
      <>
         <section className='flex flex-col justify-between py-10 border-t border-red-900 md:flex-row'>

            <table className='flex justify-center w-full'>

               <tr className="flex items-center justify-between w-screen md:w-11/12">
                  <td className="md:w-5/12">
                     <section className='p-1 ml-5 text-sm'>
                        {nome}
                     </section>
                  </td>

                  <td>
                     <section className='p-1'>
                        <input 
                           type="number" 
                           value={quantity} 
                           onChange={handleVal} 
                           className='mx-3 w-10 border border-black' 
                        />
                     </section>
                  </td>

                  <td>
                  <section className='p-1'>
                     {preco}
                  </section>
                  </td>

                  <td>
                     <section className="p-1 mr-1 md:mr-7 lg:mr-6 xl:mr-0">
                        <FaTrash
                           className=" text-rose-400 hover:text-red-600 hover:cursor-pointer"
                        />
                     </section>
                  </td>
               </tr>
            </table>
            
         </section>
      </>
   );
};


