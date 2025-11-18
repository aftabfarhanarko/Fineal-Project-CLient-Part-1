import axios from "axios";
import React from "react";

const axiosShire = axios.create({
  baseURL: "http://localhost:5000/",
});

const useAxiosSecoir = () => {
  return axiosShire;
};

export default useAxiosSecoir;
