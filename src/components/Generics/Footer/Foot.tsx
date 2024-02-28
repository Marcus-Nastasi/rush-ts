
export default function Foot() {
   return(
      <>
      <footer id="foo" className="flex justify-center text-center mt-20 p-5 text-slate-50 bg-slate-900">

         <section className="lg:flex lg:flex-row lg:w-11/12 lg:justify-between">

            <section className="py-5 lg:w-1/3">
               
               <h4 className="text-red-700 text-xl font-semibold">CATEGORIAS</h4>

               <ul>
                  <li>
                     <a href="">Monte seu Kit</a>
                  </li>
                  <li>
                     <a href="">Headshop</a>
                  </li>
                  <li>
                     <a href="">Kits Prontos</a>
                  </li>
                  <li>
                     <a href="">Outlet</a>
                  </li>
                  <li>
                     <a href="">Quem somos</a>
                  </li>
               </ul>
               
            </section>
            
            <section className="py-5 lg:w-1/3">
               <h4 className="text-red-700 text-xl font-semibold">SEÇÕES</h4>

               <ul>
                  <li>
                     <a href="">Dúvidas</a>
                  </li>
                  <li>
                     <a href="">Políticas de devolução</a>
                  </li>
                  <li>
                     <a href="">Termos e condições</a>
                  </li>
               </ul>
            </section>
            
            <section className="py-5 lg:w-1/3">
               <h4 className="text-red-700 text-xl font-semibold">FALE CONOSCO</h4>

               <ul>
                  <li>
                     <a href="">E-mail: contato@rush.com.br</a>
                  </li>
                  <li>
                     <a href="">Telefones: (11) 97339-9212</a>
                  </li>
                  <li>
                     <a href="">Atendimento: Seg à Sex das 9h às 18h</a>
                  </li>
               </ul>
            </section>

         </section>

      </footer>

      <section className="flex justify-center text-center my-14 p-5 font-semibold text-red-700">

         <section>
            <h4>Todos os direitos reservados à Rush</h4>
            <p>CNPJ: 127.000.124.68/0000-1</p>
         </section>

      </section>

      <section className="fixed bottom-7 right-7 md:bottom-12 md:right-12">
         <img id="whatsappButton" className="w-14 hover:cursor-pointer md:w-16 lg:w-20" src="/assets/img/icons/whatsapp.png" />
      </section>
      </>
   );
};


