import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";

export default function ItensCart({ nome, preco, qnt }) {
   const [ quantity, setQauntity ] = useState(0);

   useEffect(() => {
      function getQuantity() {
         const item = localStorage.getItem(nome);

         const quantity = item?.split('.')[0];

         return setQauntity(Number(quantity));
      };
      getQuantity();
   }, []);

   function handleVal(e: any): void {
      const valor: string = e.target.value;
      const data: string = `${valor}.${preco}`;

      setQauntity(parseInt(valor));

      localStorage.setItem(nome, data);

      return;
   };

   function handleDeleteItem(): void {
      var msg: boolean = confirm("Você tem certeza que deseja apagar esse item?"); 
      if(msg) {
         localStorage.removeItem(nome);
         window.open('/cart', '_self');
         return;
      }

      return;
   };

   return(
      <>
         <section className='flex flex-col justify-between py-10 border-t border-red-900'>
            <table className='flex justify-center w-full'>
               <tr className="flex items-center justify-between w-screen sm:w-11/12 md:w-11/12 lg:w-10/12">
                  <td className="md:w-5/12">
                     <section className='p-1 ml-5 text-sm'>
                        {nome}
                     </section>
                  </td>

                  <td>
                     <section className='p-1'>
                        <input
                           value={quantity}
                           onChange={handleVal}
                           type="number" 
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
                           onClick={handleDeleteItem}
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



