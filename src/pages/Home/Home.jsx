import React from "react";
import Banner from "./HomeComponents/Banner";
import Work from "./Work";

const Home = () => {
  return (
    <div className="px-0.5">
      <section className="my-10">
        <Banner></Banner>
      </section>
      <section className="my-20">
        <Work></Work>
      </section>
    </div>
  );
};

export default Home;
