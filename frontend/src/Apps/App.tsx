import React from "react";
import Header from "../components/Generics/Header/Header";
import BanOne from "../components/Home/Banner/BanOne";
import BanTwo from "../components/Home/Banner/BanTwo";
import Card1 from "../components/Home/Cards/Card1";
import Card2 from "../components/Home/Cards/Card2";
import Ad1 from "../components/Home/Ads/Ad1";
import Cat from "../components/Home/Categories/Cat";
import News from "../components/Home/News/News";
import Foot from "../components/Generics/Footer/Foot";

export default function App() {
   return (
      <section className="overflow-x-hidden">
         <Header />
         <BanOne />
         <Card1 />
         <Ad1 />
         <BanTwo />
         <Card2 />
         <Cat />
         <News />
         <Foot />
      </section>
   );
};




