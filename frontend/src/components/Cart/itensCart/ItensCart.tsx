import React, { useEffect, useState } from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa6";

export default function ItensCart({ nome, preco, clbkTotalSum }) {
   const [ quantity, setQauntity ] = useState('');
   const [ subTotal, setSubTotal ] = useState('');

   useEffect(() => {
      function getQuantity() {
         const item: string | null = localStorage.getItem(nome);
         const quantity: string | undefined = item?.split('.')[0];

         return setQauntity(String(quantity));
      };
      getQuantity();
      handleSubTotal();
   }, []);

   function handleSubTotal(): void {
      var item: string | null = localStorage.getItem(nome);
      var qnt: number = Number(item?.split('.')[0]);
      var price: number = Number(item?.split('$')[1].replace(',', '.'));

      setSubTotal(String((qnt * price).toFixed(2)).replace('.', ','));

      return clbkTotalSum();
   };

   function handleClickPlus(): void {
      var nmr: number = Number(quantity);
      const data: string = `${nmr+1}.${preco}`;

      setQauntity(String(nmr + 1));
      localStorage.setItem(nome, data);

      return handleSubTotal();
   };

   function handleClickMinus(): void {
      var nmr: number = Number(quantity);

      if(nmr > 1) {
         const data: string = `${nmr-1}.${preco}`;

         setQauntity(String(nmr - 1));
         localStorage.setItem(nome, data);
   
         return handleSubTotal();
      }
      
      return;
   };

   function handleDeleteItem(): void {
      var msg: boolean = confirm("Você tem certeza que deseja apagar esse item do carrinho?");
      
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
               <tr className="flex flex-col items-center justify-between w-screen sm:w-11/12 md:flex-row md:w-11/12 lg:w-10/12">
                  <td className="md:w-5/12">
                     <section className='p-1 ml-5 text-sm'>
                        {nome}
                     </section>
                  </td>

                  <section className="flex flex-col justify-between items-center grow md:flex-row">
                     <td>
                        <section className='p-1 flex items-center'>
                           <span>
                              <FaMinus
                                 size={19}
                                 onClick={handleClickMinus}
                                 className="hover:cursor-pointer"
                              />
                           </span>

                           <input
                              value={quantity}
                              type={'number'}
                              readOnly={true}
                              className='mx-3 w-10 text-center border border-black' 
                           />

                           <span>
                              <FaPlus
                                 size={19}
                                 onClick={handleClickPlus}
                                 className="hover:cursor-pointer"
                              />
                           </span>
                        </section>
                     </td>

                     <td>
                        <section className='p-1'>
                           item: {preco}
                        </section>
                     </td>

                     <td>
                        <section className='p-1'>
                           sub total: R${subTotal}
                        </section>
                     </td>

                     <td>
                        <section className="flex justify-center p-1 mr-1 md:mr-7 lg:mr-6 xl:mr-0">
                           <FaTrash
                              onClick={handleDeleteItem}
                              className="text-rose-400 hover:text-red-600 hover:cursor-pointer"
                           />
                        </section>
                     </td>
                  </section>
               </tr>
            </table>
         </section>
      </>
   );
};



