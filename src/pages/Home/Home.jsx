import React from "react";
import Banner from "./HomeComponents/Banner";
import Work from "./Work";
import OurServices from "./HomeComponents/OurServices";

const Home = () => {
  return (
    <div className="px-0.5">
      <section className="my-10">
        <Banner></Banner>
      </section>
      <section className="my-20">
        <Work></Work>
      </section>

      <section className="my-20">
        <OurServices></OurServices>
      </section>
    </div>
  );
};

export default Home;
