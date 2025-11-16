import React from "react";
import logo from '../../assets/logo.png'

const Loding = () => {
  return (
    <div>
      Loding Loding
      <div>
        <img src={logo}></img>
        <HashLoader color="#39e61d" />
      </div>
    </div>
  );
};

export default Loding;
