import React, { useEffect } from "react";
import ne from "../../assets/bookingIcon.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
    useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);
  return (
    
    <div>
      <h1 className="text-3xl font-bold text-secondary">How it Works</h1>
      <div className="grid  grid-cols-2  md:grid-cols-4 gap-2 md:gap-5 mt-8">
        <div
          className="border border-base-300 shadow  bg-white rounded-2xl p-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img className="" src={ne}></img>
          <h3 className="text-lg text-secondary  mt-1.5 font-semibold">
            Booking Pick & Drop
          </h3>
          <p className="text-thried  font-medium text-justify mt-2">
            Fast, reliable pickup and drop services anytime you need. Book your
            ride instantly with smooth and secure tracking.
          </p>
        </div>

        <div
          className="border border-base-300 shadow  bg-white rounded-2xl p-6"
          data-aos="fade-up"
              data-aos-delay="300"
        >
          <img className="" src={ne}></img>
          <h3 className="text-lg text-secondary   font-semibold text-justify mt-2">
            Cash On Delivery
          </h3>
          <p className="text-thried  font-medium">
            Pay easily at your doorstep after receiving your service. Simple,
            secure, and fully transparent payment process.
          </p>
        </div>

        <div
          className="border border-base-300 shadow  bg-white rounded-2xl p-6"
          data-aos="fade-up"
              data-aos-delay="400"
        >
          <img className="" src={ne}></img>
          <h3 className="text-lg text-secondary   mt-1.5 font-semibold">
            Delivery Hub
          </h3>
          <p className="text-thried  font-medium text-justify mt-2">
            Manage all your deliveries from one centralized platform. Fast
            routing, real-time tracking, and seamless coordination.
          </p>
        </div>
        <div
          className="border border-base-300 shadow  bg-white rounded-2xl p-6"
           data-aos="fade-up"
              data-aos-delay="500"
        >
          <img className="" src={ne}></img>
          <h3 className="text-lg text-secondary mt-1.5  font-semibold">
            Booking SME & Corporate
          </h3>
          <p className="text-thried  font-medium text-justify mt-2">
            Smart booking solutions designed for SMEs and large organizations.
            Streamline operations with secure, fast, and reliable delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
