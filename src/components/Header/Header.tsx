import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { ClockLoader } from "react-spinners";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

export default function Header() {
   const [ menu, setMenu ] = useState('hidden');
   const [ miniHeadshop, setHeadshop ] = useState('hidden');
   const [ miniKits, setMiniKits ] = useState('hidden');
   const [ miniOutlet, setMiniOutlet ] = useState('hidden');

   // click menu bar
   const handleClickMenuBar = () => (menu === 'hidden') ? setMenu('') : setMenu('hidden');

   // Headshop menu   
   const handleHoverHeadshop = () => (miniHeadshop === 'hidden') ? setHeadshop('') : setHeadshop('hidden');
   const handleHeadshopLeave = (e: any) => (!e.target.classList.contains('hidden')) ? setHeadshop('hidden') : 0;

   // Kits Prontos menu
   const handleHoverKits = () => (miniKits === 'hidden') ? setMiniKits('') : setMiniKits('hidden');
   const handleKitsLeave = (e: any) => (!e.target.classList.contains('hidden')) ? setMiniKits('hidden') : 0;

   // Outlet menu
   const handleHoverOutlet = () => (miniOutlet === 'hidden') ? setMiniOutlet('') : setMiniOutlet('hidden');
   const handleOutletLeave = (e: any) => (!e.target.classList.contains('hidden')) ? setMiniOutlet('hidden') : 0;

   return (
   <>
      <header style={headerContainerCss} className={headerContainerStyle}>

         <section className="flex justify-between items-center">

            <section className="flex items-center p-5 w-fit">

               <section className="mr-2">

                  <ClockLoader
                     size={20}
                     color="#B91C1D"   
                  />

               </section>

               <p className="ml-2 mt-1 text-xl text-red-700 font-semibold italic">
                  <a href="/">
                     Rush
                  </a>
               </p>

            </section>

            <section>

               <FaBars
                  onClick={handleClickMenuBar}
                  className="w-10 mr-3 mt-1 text-2xl text-red-700 hover:cursor-pointer hover:text-red-500 md:hidden" 
               />

            </section>

         </section>

         <nav className={`${menu} h-fit w-screen flex flex-col p-10 items-center text-center text-red-700  bg-slate-100 text-xl 
            md:text-sm md:bg-transparent md:flex md:flex-row md:justify-between md:absolute md:top-3.5 md:p-0 md:w-10/12 md:left-28 2xl:w-11/12`}>

            <section className="flex flex-col md:flex-row md:mt-2.5">

               <section className="mb-5 md:mb-0 md:mx-2">
                  <h3 className="p-1 text-red-600 hover:text-red-700 hover:cursor-pointer transition-none">
                     <a className="uppercase" href="">Monte seu kit!</a>
                  </h3>
               </section>

               <section className="mb-3 md:mb-0 md:mx-2">
                  <h3 onMouseOver={handleHoverHeadshop} id="btnMenu1" className="uppercase p-1 hover:cursor-pointer hover:text-red-600 transition-none">
                     Headshop  ↷
                  </h3>
                  {/* <!--  ↯  --> */}
                  <section onMouseLeave={e => handleHeadshopLeave(e)} >
                     <ul className={`flex ${miniHeadshop} flex-col p-3 border-t-2 border-red-700 
                        md:bg-slate-100 md:absolute`}>
                        <li className="p-2 uppercase"><a href="">Seda</a></li>
                        <li className="p-2 uppercase"><a href="">Tabaco</a></li>
                        <li className="p-2 uppercase"><a href="">Piteiras</a></li>
                        <li className="p-2 uppercase"><a href="">Itens</a></li>
                     </ul>
                  </section>
               </section>

               <section className="mb-3 md:mb-0 md:mx-2">
                  <h3 onMouseOver={handleHoverKits} id="btnMenu2" className="uppercase p-1 hover:cursor-pointer hover:text-red-600 transition-none">
                     Kits Prontos  ↷
                  </h3>
                  <section onMouseLeave={handleKitsLeave}>
                     <ul id="miniMenu2" className={`flex ${miniKits} flex-col p-3 border-t-2 border-red-700
                        md:bg-slate-100 md:absolute`}>
                        <li className="p-2 uppercase"><a href="">Kit Pronto #1</a></li>
                        <li className="p-2 uppercase"><a href="">Kit Pronto #2</a></li>
                        <li className="p-2 uppercase"><a href="">Kit Pronto #3</a></li>
                        <li className="p-2 uppercase"><a href="">Kit Pronto #4</a></li>
                     </ul>
                  </section>
               </section>

               <section className="mb-3 md:mb-0 md:mx-2">
                  <h3 onMouseOver={handleHoverOutlet} id="btnMenu3" className="uppercase p-1 hover:cursor-pointer hover:text-red-600 transition-none">
                     Outlet  ↷
                  </h3>
                  <section onMouseLeave={handleOutletLeave}>
                     <ul id="miniMenu3" className={`uppercase flex ${miniOutlet} flex-col p-3 border-t-2 border-red-700
                        md:bg-slate-100 md:absolute`}>
                        <li className="p-2"><a href="">Camisetas</a></li>
                        <li className="p-2"><a href="">Calças</a></li>
                        <li className="p-2"><a href="">Chapéus</a></li>
                        <li className="p-2"><a href="">Acessórios</a></li>
                     </ul>
                  </section>
               </section>

               <section className="md:mx-2">
                  <h3 className="uppercase mb-3 p-1 hover:cursor-pointer hover:text-red-600 transition-none md:mb-0">Quem somos</h3>
               </section>

            </section>

            <section className="flex items-center border-t-2 border-b-2 border-red-800 md:self-start">

               <section>
                  <FaUser 
                     className="text-xl m-2 hover:cursor-pointer hover:text-red-600 md:text-2xl" 
                  />
               </section>

               <section>
                  <FaCartShopping 
                     className="text-xl m-2 hover:cursor-pointer hover:text-red-600 md:text-2xl" 
                  />
               </section>

            </section>

         </nav>

      </header>

   </>
   );
};

const headerContainerStyle: string = `h-fit w-screen fixed z-50 bg-white`;
const headerContainerCss: object = { 
   boxShadow: '0 0 1.3rem 0.1px' 
};


